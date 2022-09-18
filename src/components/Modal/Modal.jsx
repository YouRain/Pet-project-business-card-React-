import React, { useState } from "react";
import ButtonModal from "./ButtonModal";
import InputModal from "./InputModal";
import cl from "./Modal.module.css"
import TextModal from "./TextModal";

function Modal({ persons, visible, setVisible, setPersons, newPerson, setNewPerson, idPerson, toggleBtn }) {
    const mainClass = [cl.modal];
    if (visible) {
        mainClass.push(cl.active)
    }

    function addNewPerson() {
        let localPerson = {...newPerson, id: Date.now()}
        setPersons([...persons, localPerson]);
        setVisible(false);
    }

    function saveChangedPerson() {
        let localPerson = { ...newPerson };
        let localPersons = persons.slice();
        localPersons.splice(idPerson, 1, localPerson);
        setPersons([...localPersons]);
        setVisible(false);
    }

    return (
        <div className={mainClass.join(" ")}>
            <div className={cl.container}>
                <form className={cl.modalInner} onClick={(e) => e.preventDefault()}>
                    <div className={cl.modalItem} style={{ marginTop: 0 }}>
                        <InputModal value={newPerson.name} onChange={e => setNewPerson({ ...newPerson, name: e.target.value })} placeholder="Имя" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                        <InputModal value={newPerson.surname} onChange={e => setNewPerson({ ...newPerson, surname: e.target.value })} placeholder="Фамилия" className={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                    </div>
                    <div className={cl.modalItem} >
                        <InputModal value={newPerson.eMail} onChange={e => setNewPerson({ ...newPerson, eMail: e.target.value })} placeholder="E-Mail" className={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                        <InputModal value={newPerson.numberTelephone} onChange={e => setNewPerson({ ...newPerson, numberTelephone: e.target.value })} placeholder="Телефон сотовый" className={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                    </div>
                    <div className={cl.modalItem} >
                        <InputModal value={newPerson.currentJobTitle} onChange={e => setNewPerson({ ...newPerson, currentJobTitle: e.target.value })} placeholder="Должность" className={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                        <InputModal value={newPerson.birthDay} onChange={e => setNewPerson({ ...newPerson, birthDay: e.target.value })} placeholder="дд.мм.гггг" className={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                    </div>
                    <div className={cl.modalItem} >
                        <InputModal value={newPerson.address.country} onChange={e => setNewPerson({ ...newPerson, address: { ...newPerson.address, country: e.target.value } })} placeholder="Страна" className={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                        <InputModal value={newPerson.address.city} onChange={e => setNewPerson({ ...newPerson, address: { ...newPerson.address, city: e.target.value } })} placeholder="Город" className={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                    </div>
                    <div className={cl.modalItem} style={{marginTop: 0}}>
                        <InputModal value={newPerson.address.street} onChange={e => setNewPerson({ ...newPerson, address: { ...newPerson.address, street: e.target.value } })} placeholder="Улица" className={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} styleWrapper={{paddingTop: 0}}/>
                        <InputModal value={newPerson.address.flat} onChange={e => setNewPerson({ ...newPerson, address: { ...newPerson.address, flat: e.target.value } })} placeholder="Дом" className={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} styleWrapper={{paddingTop: 0}} />
                    </div>
                    <div className={cl.modalItem} >
                        <InputModal value={newPerson.linkGitHub} onChange={e => setNewPerson({ ...newPerson, linkGitHub: e.target.value })} placeholder="Твой GitHub" className={cl.inputModal} classNameWrapper={cl.inputWrapperFull} />
                        <InputModal value={newPerson.linkLinkedIn} onChange={e => setNewPerson({ ...newPerson, linkLinkedIn: e.target.value })} placeholder="Твой LinkedIn" className={cl.inputModal} classNameWrapper={cl.inputWrapperFull} />
                        <InputModal value={newPerson.linkTwitter} onChange={e => setNewPerson({ ...newPerson, linkTwitter: e.target.value })} placeholder="Твой Twitter" className={cl.inputModal} classNameWrapper={cl.inputWrapperFull} />
                    </div>
                    <div className={cl.modalItem} >
                        <TextModal value={newPerson.aboutMe} onChange={e => setNewPerson({ ...newPerson, aboutMe: e.target.value })} placeholder="Расскажи о себе" className={cl.inputModal} classNameWrapper={cl.inputWrapperFull} style={{ height: 100}} />
                    </div>
                    <div className={cl.buttonWrapper}>
                        {toggleBtn
                            ? <ButtonModal className={cl.buttonModal} onClick={addNewPerson} >Добавить</ButtonModal>
                            : <ButtonModal className={cl.buttonModal} onClick={saveChangedPerson} >Сохранить</ButtonModal>
                        }
                        <ButtonModal className={cl.buttonModal} onClick={() => setVisible(false)} >Выйти</ButtonModal>
                    </div>
                </form>
            </div>
        </div>
    )
}

{ `${cl.inputModalFifty}` }

export default Modal;