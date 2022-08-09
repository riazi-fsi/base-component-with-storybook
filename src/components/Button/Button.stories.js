import React from "react";
import Button from "./Button";


export default {

    title: 'ReactComponentLibrary/Button2',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const button = Template.bind({});
button.args = {
    label: "Click me!!",
    disabled: false,
    tooltip:"click in BTN",
    style:{width:'100px',color:'red',fontSize:'12px',fontWeight:'bolder'},

}