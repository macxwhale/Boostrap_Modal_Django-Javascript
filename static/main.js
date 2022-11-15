console.log('Hello World')
const spinner = document.getElementById('spinner')
const tableBody = document.getElementById('table-body-box')
const modalBody = document.getElementById('modal-body')
const url = window.location.href

console.log(url)

$.ajax({
    type: 'GET',
    url: '/data-json',
    success: function(response) {
        console.log(response)
        const data = JSON.parse(response.data)
        console.log(data)
        data.forEach(el => {
            console.log(el.fields)
            tableBody.innerHTML += 
            `
            <tr>
                <td>${el.pk}</td>
                <td>
                    <div class="my-img" data-bs-toggle="modal" data-bs-target="#previewPicModal" data-pic='media/${el.fields.item}'> 
                        <img src=media/${el.fields.item} height='40px' class='img-photo'>
                    </div>
                </td>
                <td>${el.fields.info}</td>
                <td></td>
            </tr>

            `
        });

        spinner.classList.add('not-visible')

        const imgPhoto = [...document.getElementsByClassName('img-photo')]
        console.log(imgPhoto)

        imgPhoto.forEach(item=>addEventListener('click', e=>{
            console.log(item)
        
            try {
                const pic = e.target.parentElement.getAttribute('data-pic')
                console.log($.trim(pic))
                if($.trim(pic)) {
                    modalBody.innerHTML = `<img src=${pic} height='300px'>`
                } else {
                    $('#closemodal').click ();
                }
                
            } catch(e) {
                
            }
                
            
            
        }))

    },
    error: function(error){
        console.log(error)
    }

})


