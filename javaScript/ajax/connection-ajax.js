// Def var
var form = document.querySelector('#connection');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
    });


    // message d'erreur
    var error_text = document.querySelector('.error-text');
    function error_text_function(color,display,content){
        error_text.textContent = content;
        error_text.style.display = display;
        error_text.style.backgroundColor = color;
    };

    // bouton submit du forme
    var btnForm = document.querySelector("#connection-btn");
        function btnForm_function(state){
            switch (state){
                case 'on':
                    btnForm.disabled = false;
                    btnForm.style.backgroundColor = 'black';
                    btnForm.textContent = 'Se Connecter'
                    break;

                case 'off':
                    btnForm.disabled = true;
                    btnForm.style.backgroundColor = 'grey';
                    btnForm.textContent = "Connexion en cours ...";            
            }
        }

        btnForm.onclick() = ()=>{

           // empeche le click du bouton
           btnForm_function('off');

           function sanitizeInput(){
              // vider les input de tout code malvaillant  

              function htmlEntities(str) {
                return str.replace(/[&<>"'()\[\]{}|\\\/!#$%^*_=~`,.;:?\-+]/g, function(match) {
                  switch (match) {
                    case '&':
                      return '&amp;';
                    case '<':
                      return '&lt;';
                    case '>':
                      return '&gt;';
                    case '"':
                      return '&quot;';
                    case "'":
                      return '&#39;';
                    case '(':
                      return '&#40;';
                    case ')':
                      return '&#41;';
                    case '[':
                      return '&#91;';
                    case ']':
                      return '&#93;';
                    case '{':
                      return '&#123;';
                    case '}':
                      return '&#125;';
                    case '|':
                      return '&#124;';
                    case '\\':
                      return '&#92;';
                    case '/':
                      return '&#47;';
                    case '!':
                      return '&#33;';
                    case '#':
                      return '&#35;';
                    case '$':
                      return '&#36;';
                    case '%':
                      return '&#37;';
                    case '^':
                      return '&#94;';
                    case '*':
                      return '&#42;';
                    case '_':
                      return '&#95;';
                    case '=':
                      return '&#61;';
                    case '~':
                      return '&#126;';
                    case '`':
                      return '&#96;';
                    case ',':
                      return '&#44;';
                    case '.':
                      return '&#46;';
                    case ';':
                      return '&#59;';
                    case ':':
                      return '&#58;';
                    case '?':
                      return '&#63;';
                    case '-':
                      return '&#45;';
                    case '+':
                      return '&#43;';
                    default:
                      return match;
                  }
                });
              }
              };

                const input = document.querySelectorAll("input:not([type=file])");
                input.forEach(element => {
                        element.value =  htmlEntities(element.value);
                        //  console.log(element.value);
                });

           }
          
           /* Ajax - method XMLHttpRequest, prend en charge l'envoie coter serveur */

           let xhr = new XMLHttpRequest();
           xhr.open('POST', '', true);
           xhr.onload = () =>{
            if(xhr.readyState === XMLHttpRequest.DONE)
                    if(xhr.status ===  200){
                        switch (xhr.response){
                            case 'success':
                                error_text_function('green', 'block', 'Connexion réussie');
                                // redirection
                                    setTimeout(()=>{
                                        window.location.href = 'index.php';
                                    },1500);

                                break;

                            case 'failed':
                                error_text_function('red', 'block', 'Email ou Mot de passe incorrect');
                                btnForm_function('on');
                                break;

                            default:
                                error_text_function('red', 'block', 'Nous avons rencontrer une erreur ressayer');
                                btnForm_function('on');
                                break;
                        }       
                }
            }
            xhr.setRequestHeader("POST","appliaction/x-www-urlencoded");
            xhr.send();
        

