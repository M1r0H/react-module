import React from 'react'
import './modal.css'

export default function Modal({ active, setActive, children }) {
    return (
        <div id="modal" className={active ? "active" : ""} onClick={() => setActive(false)}>
            <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}