import React from 'react'
import './CardModal.css'

const CardModal = ({card, show, handleClose}) => {

    console.log("modal displays");

    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
        <div id="cardModal" className={showHideClassName} >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="cardTitle">{card.title}</h5>
                <small id="inListDesc" className="pl-3 text-secondary">in list <strong id="inListTitle"></strong></small>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body p-1">
                <div className="d-flex mt-3">
                  <h6>
                    <i className="fa fa-bars"></i>
                  </h6>
                  <div className="flex-grow-1">
                    <h6>Description</h6>
                    <p id="cardDesc">{card.description}</p>
                  </div>
                </div>
                <div className="d-flex">
                  <h6>
                    <i className="fa fa-list-ul"></i>
                  </h6>
                  <div className="flex-grow-1">
                    <h6>Checklist</h6>
                    <div id="chkli-wrapper">
                    {card.checklists ? 
                      card.checklists.map(chkli => (<small className="d-inline-block m-1 mr-2 text-secondary" key={chkli.id}><i className="fa fa-check-square-o"></i></small>))
                    : <p style={{opacity: 0.7}}>No Checklist</p>
                    }
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-sm btn-success" onClick={handleClose}><i className="fa fa-save"></i> Save Changes</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default CardModal
