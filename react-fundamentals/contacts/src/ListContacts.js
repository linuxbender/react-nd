import React from 'react'

function ListContacts(props) {
    const contacts = props.contacts || [];
    const deleteContact = props.onDeleteContact;
    return (
        <ol className='contact-list'>
            {contacts.map((contact) => (
                <li key={contact.id} className='contact-list-item'>
                    <div className='contact-avatar' style={{
                        backgroundImage: `url(${contact.avatarURL})`
                    }} />
                    <div className='contact-details'>
                        <p>{contact.name}</p>
                        <p>{contact.email}</p>
                    </div>
                    <button onClick={() => deleteContact(contact)} className='contact-remove'>Remove</button>
                </li>
            ))}
        </ol>
    )
}

export default ListContacts;