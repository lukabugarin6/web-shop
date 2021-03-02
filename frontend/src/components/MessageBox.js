import React from 'react'

const MessageBox = ({children,variant}) => {
    return (
        <div className={`col-span-12 alert alert-${variant || 'info'}`}>
            {children}
        </div>
    )
}

export default MessageBox
