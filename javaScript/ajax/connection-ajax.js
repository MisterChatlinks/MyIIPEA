// Def var
var form = document.querySelector('#connection');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
    });

    

    // bouton submit du forme
    var btnForm = document.querySelector("#connection-btn");
        btnForm.onclick() = ()=>{
           let xhr = new XMLHttpRequest();
           xhr.open('POST', '', true);
           xhr.onload = () =>{
            if(xhr.readyState === XMLHttpRequest.DONE)
                    if(xhr.status ===  200){
                        if(xhr.response === true){
                            // Traitement des données
                        } else {
                            // Traitement des erreurs
                        }
                }
            }
        }

