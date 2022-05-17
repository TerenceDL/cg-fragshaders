#version 300 es

precision mediump float;

in vec2 texcoord;
uniform vec2 mouse_pos;
uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    //convert to pixel mode
    float pixel_width = 16.0;
    float pixel_height= 9.0;
    vec2 uv = texcoord.xy;
    vec3 tex_coordinates = vec3(1.0, 0.0, 0.0);
    float dx =  pixel_width*(1.0/width); //break up pixel
    float dy = pixel_height*(1.0/height); //break up pixel 
    vec2 coord = vec2(dx*round(uv.x/dx),dy*round(uv.y/dy)); //convert to a whole number to get rid of smoothness 
    tex_coordinates = texture(image, coord).rgb;
    FragColor = vec4(tex_coordinates, 1.0);
}

