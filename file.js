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
