import React from 'react'
import './CardModal.css'

const CardModal = () => {
    return (
        <div id="cardModal" class="modal fade trello-black" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="cardTitle"></h5>
                <small id="inListDesc" class="pl-3 text-secondary">in list <strong id="inListTitle"></strong></small>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body p-1">
                <div class="d-flex mt-3">
                  <h6>
                    <i class="fa fa-bars"></i>
                  </h6>
                  <div class="flex-grow-1">
                    <h6>Description</h6>
                    <p id="cardDesc"></p>
                  </div>
                </div>
                <div class="d-flex">
                  <h6>
                    <i class="fa fa-list-ul"></i>
                  </h6>
                  <div class="flex-grow-1">
                    <h6>Checklist</h6>
                    <div id="chkli-wrapper">
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-sm btn-success"><i class="fa fa-save"></i> Save Changes</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default CardModal
