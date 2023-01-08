import React, { useEffect, useState } from "react";
import { IEducation, IExperience, IPersonInfo, ISkillsPerson } from "~/types/interface";
import ButtonModal from "./ButtonModal";
import InputModal from "./InputModal";
import cl from "./Modal.module.css";
import TextModal from "./TextModal";

interface IModal {
    persons: IPersonInfo[]
    visible: boolean
    setVisible: (value: boolean) => void
    setPersons: (value: IPersonInfo[]) => void
    newPerson: IPersonInfo
    setNewPerson: (value: IPersonInfo) => void
    idPerson: number
    toggleBtn: boolean
}

function Modal({ persons, visible, setVisible, setPersons, newPerson, setNewPerson, idPerson, toggleBtn }: IModal) {

    const [newSkills, setNewSkills] = useState("")
    const [newExperience, setNewExperience] = useState("")
    const [newEducation, setNewEducation] = useState("")
    const [arrNewSkills, setArrNewSkills] = useState(newPerson.skills)
    const [arrNewExperience, setArrNewExperience] = useState(newPerson.experience)
    const [arrNewEducation, setArrNewEducation] = useState(newPerson.education)

    useEffect(() => {
        setArrNewSkills([...newPerson.skills])
        setArrNewExperience([...newPerson.experience])
        setArrNewEducation([...newPerson.education])
    }, [newPerson])

    const mainClass = [cl.modal];
    if (visible) {
        mainClass.push(cl.active)
    }

    function addNewPerson() {
        let localPerson = { ...newPerson, id: Date.now() }
        localPerson.skills = [...removeEmptyLineSkills()];
        localPerson.experience = [...removeEmptyLineExperience()];
        localPerson.education = [...removeEmptyLineEducation()];
        setPersons([...persons, localPerson]);
        newPerson.skills = [{ soft: "", progress: "" }];
        newPerson.experience = [{ periodDate: "", company: "", postTitle: "", postText: "" }]
        newPerson.education = [{ periodDate: "", educationPost: "", educationPostTitle: "", institution: "", educationText: "" }]
        setArrNewSkills([{ soft: "", progress: "" }]);
        setArrNewExperience([{ periodDate: "", company: "", postTitle: "", postText: "" }])
        setArrNewEducation([{ periodDate: "", educationPost: "", educationPostTitle: "", institution: "", educationText: "" }])
        setVisible(false);
    }

    function saveChangedPerson() {
        let localPerson = { ...newPerson };
        localPerson.skills = [...removeEmptyLineSkills()];
        localPerson.experience = [...removeEmptyLineExperience()];
        localPerson.education = [...removeEmptyLineEducation()];
        let localPersons = persons.slice();
        localPersons.splice(idPerson, 1, localPerson);
        setPersons([...localPersons]);
        setVisible(false);
    }

    function addNewLine(value: string) {
        let localArr;
        if (value == "skills") {
            let localObj: ISkillsPerson = { soft: "", progress: "", }
            localArr = arrNewSkills.slice()
            localArr.push(localObj)
            setArrNewSkills([...localArr])
        } else if (value == "experience") {
            let localObj: IExperience = { periodDate: "", company: "", postTitle: "", postText: "" }
            localArr = arrNewExperience.slice()
            localArr.push(localObj)
            setArrNewExperience([...localArr])
        } else if (value == "education") {
            let localObj: IEducation = { periodDate: "", educationPost: "", educationPostTitle: "", institution: "", educationText: "" }
            localArr = arrNewEducation.slice()
            localArr.push(localObj)
            setArrNewEducation([...localArr])
        }
    }

    function removeNewLine(value: string) {
        let localArr;
        if (value == "skills") {
            localArr = arrNewSkills.slice()
            localArr.pop()
            setArrNewSkills([...localArr])
        } else if (value == "experience") {
            localArr = arrNewExperience.slice()
            localArr.pop()
            setArrNewExperience([...localArr])
        } else if (value == "education") {
            localArr = arrNewEducation.slice()
            localArr.pop()
            setArrNewEducation([...localArr])
        }
    }

    function removeEmptyLineSkills() {
        let localArrSkills = arrNewSkills.filter(item => {
            return item.soft.trim() !== "" || item.progress.trim() !== ""
        })
        if (localArrSkills.length === 0) {
            return [{ soft: "", progress: "" }]
        }
        return localArrSkills
    }

    function removeEmptyLineExperience() {
        let localArrSkills = arrNewExperience.filter(item => {
            return item.periodDate.trim() !== "" || item.company.trim() !== "" || item.postTitle.trim() !== "" || item.postText.trim() !== ""
        })
        if (localArrSkills.length === 0) {
            return [{ periodDate: "", company: "", postTitle: "", postText: "" }]
        }
        return localArrSkills
    }

    function removeEmptyLineEducation() {
        let localArrSkills = arrNewEducation.filter(item => {
            return item.periodDate.trim() !== "" || item.educationPost.trim() !== "" || item.educationPostTitle.trim() !== "" || item.institution.trim() !== "" || item.educationText.trim() !== ""
        })
        if (localArrSkills.length === 0) {
            return [{ periodDate: "", educationPost: "", educationPostTitle: "", institution: "", educationText: "" }]
        }
        return localArrSkills
    }

    return (
        <div className={mainClass.join(" ")}>
            <div className={cl.container}>
                <form className={cl.modalInner} onClick={e => e.preventDefault()}>
                    <div className={cl.modalItem} style={{ marginTop: 0 }}>
                        <InputModal value={newPerson.name} onChange={e => setNewPerson({ ...newPerson, name: e.target.value })} placeholder="Имя" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                        <InputModal value={newPerson.surname} onChange={e => setNewPerson({ ...newPerson, surname: e.target.value })} placeholder="Фамилия" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                    </div>
                    <div className={cl.modalItem} >
                        <InputModal value={newPerson.eMail} onChange={e => setNewPerson({ ...newPerson, eMail: e.target.value })} placeholder="E-Mail" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                        <InputModal value={newPerson.numberTelephone} onChange={e => setNewPerson({ ...newPerson, numberTelephone: e.target.value })} placeholder="Телефон сотовый" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                    </div>
                    <div className={cl.modalItem} >
                        <InputModal value={newPerson.currentJobTitle} onChange={e => setNewPerson({ ...newPerson, currentJobTitle: e.target.value })} placeholder="Должность" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                        <InputModal value={newPerson.birthDay} onChange={e => setNewPerson({ ...newPerson, birthDay: e.target.value })} placeholder="дд.мм.гггг" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                    </div>
                    <div className={cl.modalItem} >
                        <InputModal value={newPerson.address.country} onChange={e => setNewPerson({ ...newPerson, address: { ...newPerson.address, country: e.target.value } })} placeholder="Страна" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                        <InputModal value={newPerson.address.city} onChange={e => setNewPerson({ ...newPerson, address: { ...newPerson.address, city: e.target.value } })} placeholder="Город" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                    </div>
                    <div className={cl.modalItem} style={{ marginTop: 0 }}>
                        <InputModal value={newPerson.address.street} onChange={e => setNewPerson({ ...newPerson, address: { ...newPerson.address, street: e.target.value } })} placeholder="Улица" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} styleWrapper={{ paddingTop: 0 }} />
                        <InputModal value={newPerson.address.flat} onChange={e => setNewPerson({ ...newPerson, address: { ...newPerson.address, flat: e.target.value } })} placeholder="Дом" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} styleWrapper={{ paddingTop: 0 }} />
                    </div>
                    <div className={cl.modalItem} style={{ marginTop: 0 }}>
                        <InputModal value={newPerson.language} onChange={e => setNewPerson({ ...newPerson, language: e.target.value })} placeholder="Языки" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} styleWrapper={{ paddingTop: 0 }} />
                    </div>
                    <div className={cl.modalItem} >
                        <InputModal value={newPerson.linkGitHub} onChange={e => setNewPerson({ ...newPerson, linkGitHub: e.target.value })} placeholder="Твой GitHub" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFull} />
                        <InputModal value={newPerson.linkLinkedIn} onChange={e => setNewPerson({ ...newPerson, linkLinkedIn: e.target.value })} placeholder="Твой LinkedIn" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFull} />
                        <InputModal value={newPerson.linkTwitter} onChange={e => setNewPerson({ ...newPerson, linkTwitter: e.target.value })} placeholder="Твой Twitter" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFull} />
                    </div>
                    <div className={cl.modalItem} >
                        <TextModal value={newPerson.aboutMe} onChange={e => setNewPerson({ ...newPerson, aboutMe: e.target.value })} placeholder="Расскажи о себе" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFull} style={{ height: 100 }} />
                    </div>
                    <div style={{ width: "100%", textAlign: "center", marginBottom: "10px" }}>
                        <h4 className={cl.title}>Профессиональные навыки</h4>
                        {arrNewSkills.map((prop, index) =>
                            <div className={cl.modalItem} style={{ margin: "0" }} >
                                <InputModal value={prop.soft} onChange={e => setNewSkills(arrNewSkills[index].soft = e.target.value)} placeholder="Софт" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                                <InputModal value={prop.progress} onChange={e => setNewSkills(arrNewSkills[index].progress = e.target.value)} placeholder="%" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                            </div>
                        )}
                        <div className={cl.buttonWrapperAddRemoveSkills}>
                            <ButtonModal className={cl.buttonModalAdd} onClick={() => addNewLine("skills")} >
                                <i className="fa-solid fa-plus"></i>
                            </ButtonModal>
                            <ButtonModal className={cl.buttonModalAdd} onClick={() => removeNewLine("skills")} >
                                <i className="fa-solid fa-minus"></i>
                            </ButtonModal>
                        </div>
                    </div>
                    <div style={{ width: "100%", textAlign: "center", marginBottom: "10px"  }}>
                        <h4 className={cl.title}>Стаж</h4>
                        {arrNewExperience.map((prop, index) =>
                            <div style={{ width: "100%", marginBottom: "10px" }}>
                                <div className={cl.modalItem} style={{ margin: "0" }}>
                                    <InputModal value={prop.periodDate} onChange={e => setNewExperience(arrNewExperience[index].periodDate = e.target.value)} placeholder="Период" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                                    <InputModal value={prop.company} onChange={e => setNewExperience(arrNewExperience[index].company = e.target.value)} placeholder="Компания" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                                </div>
                                <div className={cl.modalItem} style={{ margin: "0" }}>
                                    <InputModal value={prop.postTitle} onChange={e => setNewExperience(arrNewExperience[index].postTitle = e.target.value)} placeholder="Должность" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                                    <InputModal value={prop.postText} onChange={e => setNewExperience(arrNewExperience[index].postText = e.target.value)} placeholder="Текст" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                                </div>
                            </div>
                        )}
                        <div className={cl.buttonWrapperAddRemoveEx}>
                            <ButtonModal className={cl.buttonModalAdd} onClick={() => addNewLine("experience")} >
                                <i className="fa-solid fa-plus"></i>
                            </ButtonModal>
                            <ButtonModal className={cl.buttonModalAdd} onClick={() => removeNewLine("experience")} >
                                <i className="fa-solid fa-minus"></i>
                            </ButtonModal>
                        </div>
                    </div>
                    <div style={{ width: "100%", textAlign: "center", marginBottom: "10px"  }}>
                        <h4 className={cl.title}>Образование</h4>
                        {arrNewEducation.map((prop, index) =>
                            <div style={{ width: "100%", marginBottom: "10px" }}>
                                <div className={cl.modalItem} style={{ margin: "0" }}>
                                    <InputModal value={prop.periodDate} onChange={e => setNewEducation(arrNewEducation[index].periodDate = e.target.value)} placeholder="Период" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                                    <InputModal value={prop.educationPost} onChange={e => setNewEducation(arrNewEducation[index].educationPost = e.target.value)} placeholder="Степень" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                                </div>
                                <div className={cl.modalItem} style={{ margin: "0" }}>
                                    <InputModal value={prop.educationPostTitle} onChange={e => setNewEducation(arrNewEducation[index].educationPostTitle = e.target.value)} placeholder="Должность" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                                    <InputModal value={prop.institution} onChange={e => setNewEducation(arrNewEducation[index].institution = e.target.value)} placeholder="Университет" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFifty} />
                                </div>
                                <div className={cl.modalItem} style={{ margin: "0" }}>
                                    <TextModal value={prop.educationText} onChange={e => setNewEducation(arrNewEducation[index].educationText = e.target.value)} placeholder="Текст" classNameInput={cl.inputModal} classNameWrapper={cl.inputWrapperFull} style={{ height: 100 }} />
                                </div>
                            </div>
                        )}
                        <div className={cl.buttonWrapperAddRemoveEd}>
                            <ButtonModal className={cl.buttonModalAdd} onClick={() => addNewLine("education")} >
                                <i className="fa-solid fa-plus"></i>
                            </ButtonModal>
                            <ButtonModal className={cl.buttonModalAdd} onClick={() => removeNewLine("education")} >
                                <i className="fa-solid fa-minus"></i>
                            </ButtonModal>
                        </div>
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