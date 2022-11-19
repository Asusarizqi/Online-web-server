$(document).ready(function(){
    $('.run').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('_');
        let id_on = rid[1];
        let nama = $('#aran_'+id_on).text();

        if(isi=='Hapus'){
            let konfirmasi = confirm(`Sudah yakin di hapus ${nama}?`);
            if(!konfirmasi) return;

            $('#on_'+id_on).fadeOut();
        }else{
            alert("Anda mengklik kolom yang berisi : " + $(this).html() + "!");
        }
    })
})