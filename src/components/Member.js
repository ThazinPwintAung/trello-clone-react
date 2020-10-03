import React from 'react'

const Member = ({member}) => {
    const names = member.name.trim().split(" ");
    let initials = names[0][0];
    if (names.length > 1) {
        initials += names[names.length -1][0];
    } else if (names[0].length > 1) {
        initials += names[0][1];
    }
    initials = initials.toUpperCase();
    
    return (
        <div class="avatar">{initials}</div>
    )
}

export default Member
