function addRow() {
  var newColumn = document.createElement("div");
  newColumn.setAttribute("class", "col text-center");
  newColumn.innerHTML = `

      <div class="input-group">
                            <input type="text" name="" id="name-action" class="input-elem"
                                placeholder="Enter Name Action" autocomplete="off" />
                            <label for="name-action">Name Action</label>
                        </div>
                             <div class="input-group">
                            <input type="date" name="" id="date-of-arrival" class="input-elem" autocomplete="off" />
                            <label for="date-of-arrival">Expected Arrival Date (2024/01/01)</label>
                        </div>
                        <div class="input-group">
                            <input type="time" name="" id="hour-arrival" class="input-elem"
                                autocomplete="off" />
                            <label for="hour-arrival">Arrival Hour (12:00 PM)</label>
                        </div>
                        <div class="input-group">
                            <input type="text" name="" id="note-action" class="input-elem"
                                placeholder="Enter Your Note (Optional)" autocomplete="off" />
                            <label for="note-action">Note</label>
                        </div>
                               <div class="input-group text-center">
                            <a class="btn-copy mb-3 text-center" onclick="openicon()" id="icon-action">Add Icon From Here <i class="fas fa-plus-circle"></i></a>
                        </div>
                        <div class="input-group">
                            <input type="text"  name="" id="input-icon" class="input-elem" placeholder="Past Icon Here . . . "
                                autocomplete="off" />
                            <label for="input-icon">Icon</label>
                        </div>
                        <button class="btn btn-delete mb-2 text-center" onclick="removeRow(this.parentNode)"><i class="fas fa-minus c"></i></button>
                    
                        `;
  document.getElementById("inRows").appendChild(newColumn);
}
function removeRow(node) {
  return node.remove();
}
