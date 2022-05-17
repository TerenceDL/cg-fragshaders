#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;
vec2 Ripple(vec2 p,vec2 o);
void main() {

    vec2 tex_coordinates = 2.0*texcoord.xy -1.0;
    vec2 temp;
    float d = length(tex_coordinates);
    if(d<1.0){
        temp = Ripple(tex_coordinates,texcoord);
    }else{
        temp =texcoord.xy;
    }
    FragColor  = texture(image,temp);

}

vec2 Ripple(vec2 p, vec2 o){
    
    float radius = length(p); //magnatide of a vec is its length
    vec2 tex_coordOffset = p*(sin(((radius*30.0)-(time*5.0))+0.5)/60.0);
    vec2 final_coord = o+tex_coordOffset;
    return final_coord;
}