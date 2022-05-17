#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {

   vec4 color = texture(image,texcoord);
   float red = (4.0*color.r);
   float green =(4.0*color.g);
   float blue = (4.0*color.b);
   red   = round(red)/4.0;
   green = round(green)/4.0;
   blue  = round(blue)/4.0;
   FragColor = vec4(red, green, blue, color.a);
}
