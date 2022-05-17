#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;
out vec4 FragColor;
vec2 Fisheye(vec2 p); // function for creating the fisheye effect the image 

void main() {

    vec2 tex_coordinates = 2.0*texcoord.xy -1.0;
    vec2 temp;
    float d = length(tex_coordinates);
    if(d<1.0){
        temp =Fisheye(tex_coordinates);
    }else{
        temp =texcoord.xy;
    }
    FragColor  = texture(image,temp);
}

vec2 Fisheye(vec2 p){
    float theta  = atan(p.y,p.x); //calculating theta "atan=arctan"
    float radius = length(p); //magnatide of a vec is its length
    radius = pow(radius, 1.5);//raise it to 1.5 for the "barrel effect"
    p.x = radius * cos(theta);  //finding texture x coordinate
    p.y = radius * sin(theta);  //finding texture y coordinate
    vec2 final_coord = 0.5 * (p + 1.0);
    return final_coord;
}