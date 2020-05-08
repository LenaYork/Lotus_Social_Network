import React from 'react';
import styles from './Dialogues.module.css';
import DialogueItem from './DialogueItem/DialogueItem';
import DialogueMessage from './DialogueMessage/DialogueMessage';
// import {NavLink} from 'react-router-dom';

// function DialogueItem(props) {
//     return(
//         <div className={`${styles.dialogue} ${styles.active}`}>
//             <NavLink to={'/dialogues/'+props.id} activeClassName={styles.activeLink}>{props.name}</NavLink>
//         </div>
//     )
// }

// function DialogueMessage(props) {
//     return(
//     <div className={styles.message}>{props.message}</div>
//     )   
// }

function Dialogues() {
    const dialoguesData = [
        {id: 'inna', name: "Inna"},
        {id: 'alexandr', name: "Alexandr"},
        {id: 'vadim', name: "Vadim"},
        {id: 'jack', name: "Jack"},
        {id: 'alex', name: "Alex"},
        {id: 'amy', name: "Amy"},
        {id: 'ari', name: "Ari"},

    ];

    const messagesData = [
        {id: 1, message: "Good evening!"},
        {id: 2, message: "Not spam!"},
        {id: 3, message: "When is the next lesson?"},
        {id: 4, message: "Can u tell me hw?"},
        {id: 5, message: "Hello"},
        {id: 6, message: "Hey"},
        {id: 7, message: "As in?"},

    ];

    let dialogueNames = dialoguesData.map(el => (
            <DialogueItem name={el.name} id={el.id} className={styles.active} />
        )
    );
    // [
    //             <DialogueItem name={dialoguesData[0].name} id={dialoguesData[0].id}className={styles.active} />,
    //             <DialogueItem name={dialoguesData[1].name} id={dialoguesData[1].id}className={styles.active} />,
    //             <DialogueItem name={dialoguesData[2].name} id={dialoguesData[2].id}className={styles.active} />,
    //             <DialogueItem name={dialoguesData[3].name} id={dialoguesData[3].id}className={styles.active} />,
    //             <DialogueItem name={dialoguesData[4].name} id={dialoguesData[4].id}className={styles.active} />,
    //             <DialogueItem name={dialoguesData[5].name} id={dialoguesData[5].id}className={styles.active} />,
    //             <DialogueItem name={dialoguesData[6].name} id={dialoguesData[6].id}className={styles.active} />,

    // ];

    let dialogeMessages = messagesData.map( el => (
        <DialogueMessage message={el.message} id={el.id} />
        )
    );
    // [
    //     <DialogueMessage message={messagesData[0].message} id={messagesData[0].id}/>,
    //     <DialogueMessage message={messagesData[1].message} id={messagesData[1].id}/>,
    //     <DialogueMessage message={messagesData[2].message} id={messagesData[2].id}/>,
    //     <DialogueMessage message={messagesData[3].message} id={messagesData[3].id}/>,
    //     <DialogueMessage message={messagesData[4].message} id={messagesData[4].id}/>,
    //     <DialogueMessage message={messagesData[5].message} id={messagesData[5].id}/>,
    //     <DialogueMessage message={messagesData[6].message} id={messagesData[6].id}/>,
    // ];

    return (
        <div className={styles.dialogues}>
            <div className={styles.dialogueList}>
                {dialogueNames}
            </div>
            <div className={styles.messages}>
               {dialogeMessages}
            </div>

        </div>
    )
}

export default Dialogues;