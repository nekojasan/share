// js
$(function () {

    let listA  = [1,3];
    let listB  = [1];
    let tr    = $('tr.target');
    let td  　= tr.find('td');

    //tdの数だけループして
    $.each(td,function(_index,_val){
        //リストに含まれているインデックスだけ
        if(listA.indexOf(_index) >= 0){
            //クラスを付ける
            $(this).addClass('addA');
        }

        if(listB.indexOf(_index) >= 0){
            //クラスを付ける
            $(this).addClass('addB');
        }
    });
});

HTML
<tr class="target hoge">
    <td>ついてほしい1</td>
    <td class="addA addB">ついてほしい2</td>
    <td>ついてほしい3</td>
    <td class="addA">ついてほしい4</td>
</tr>
