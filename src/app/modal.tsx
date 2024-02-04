import { useModal } from "@/hooks";

export default function Modal() {
    const { show, title, content, yes, no, hideModal } = useModal()

    const modal = (
        <div className="modal">
            <div className="modal__wrapper">
                <div className="modal__back"></div>
                <div className="modal__inner">
                    <div className="modal__card">
                        <div className="card__header">
                            <div className="card__header--text">
                                <h5>{title}</h5>
                            </div>
                        </div>
                        <div className="card__body">
                            <div className="card__content">
                                <div className="card__content--text">
                                    <p>{content}</p>
                                </div>
                            </div>
                            <div className="modal__btns">
                                <button onClick={() => hideModal()}>{no}</button>
                                <button>{yes}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    return (
        show ? modal : <></>
    )
};