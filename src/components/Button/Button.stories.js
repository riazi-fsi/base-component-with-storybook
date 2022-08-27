import React from "react";
import Button from "./Button";


export default {

    title: 'ReactComponent/Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const normal = Template.bind({});
normal.args = {
    label: "Click me!!",
    disabled: false,
    

}
export const danger = Template.bind({});
danger.args = {
    label: "Click me!!",
    type:'danger',
   
}
export const warning = Template.bind({});
warning.args = {
    label: "Click me!!",
    type:'warning',
   
}
export const custome = Template.bind({});
custome.args = {
    label: "Click me!!",
    style:{color:'red',fontSize:'12px',fontWeight:'bolder'},
   
}
export const disabled= Template.bind({});
disabled.args = {
    label: "Click me!!",
    disabled:true
   
}