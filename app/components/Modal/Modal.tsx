'use client'
import React from 'react'
interface ModalProps {
    isOpen?: boolean;
    onClose:()=> void;
    onSubmit:()=>void;
    title?:string;
    body?:React.ReactElement;
    footer?:React.ReactElement;
    actionLabel:string;
    disabled?:boolean;
    secondaryAction?:()=>void;
    secondaryLabel?:string;

}
export const Modal = () => {
  return (
    <div>Modal</div>
  )
}
