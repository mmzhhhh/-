window.onload=function () {
    const btn = document.querySelector('.checkBoxAll');
    var buttons = document.querySelectorAll('.checkBox');

    // 设置全选
    btn.onclick = function () {
        if (btn.checked) {
            for (let i in buttons) {
                buttons[i].checked = true;
            }
        } else {
            for (let i in buttons) {
                buttons[i].checked = false;
            }
        }
        getTotal();
    }

    //设置删除所选商品函数;
    var del = document.querySelector('.delete_choose');
    del.onclick = function () {
        let trNum = document.querySelectorAll('tr');
        for (i in buttons) {
            if (trNum.length === 1) {
                alert('已经全部删除');
                break;
            } else {
                if (buttons[i].checked === true) {
                    buttons[i].parentNode.parentNode.remove();
                }
            }
            getTotal();
        }

    }

    var carbody = document.getElementById('carbody');
    var tr = carbody.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
        tr[i].onclick = function (e) {
            var target = e.target;
            var input = this.getElementsByTagName('input')[1];
            switch (target.className) {
                case 'add':
                    if (input.value >= 30) {
                        alert("商品最多可选择30件");
                    } else {
                        input.value = parseInt(input.value) + 1;
                    }
                    break;
                case 'reduce':
                    if (input.value < 2) {
                        alert("当前商品已为最小值");
                    } else {
                        input.value = parseInt(input.value - 1);
                    }
                    break;
                case 'deleteA':
                    carbody.removeChild(target.parentNode.parentNode)
            }
            getTotal();
        }
    }

    // 清空购物车
    var clearAll = document.querySelector('.clearAll');
    clearAll.onclick = function () {
        let trNum = document.querySelectorAll('tr');
        let i;
        if (trNum.length === 1) {
            alert('购物车已清空');
            return;
        }
        for (i = 1; i < trNum.length; i++) {
            trNum[i].remove();
        }
        getTotal();
    }

    //统计商品数量和小计价格
    var totalPrice = document.querySelector('.totalPrice');
    var totalCount = document.querySelector('.totalCount');

    function getTotal() {
        var carbody = document.getElementById('carbody');
        var tr = carbody.getElementsByTagName('tr');
        var price = 0;
        var count = 0;
        for (var i = 0; i < tr.length; i++) {
            var input = tr[i].getElementsByTagName('input');
            if (input[0].checked) {
                var sPrice = tr[i].getElementsByTagName('td')[2].innerText;
                var sCount = parseInt(input[1].value);
                tr[i].getElementsByTagName('td')[4].innerText = sPrice * sCount;
                price += parseFloat(tr[i].getElementsByTagName('td')[4].innerText);
                count += parseInt(input[1].value);
            }

        }
        totalCount.innerText = count;
        totalPrice.innerText = price;
    }

    //结算函数
    var pay = document.querySelector('.pay');
    pay.onclick = function () {
        alert("请支付 " + totalPrice.innerText + " 元！");
    }

    var addNew=document.querySelector('.btn');
    addNew.onclick=function (){
        var option = prompt("请选择要添加的商品类型:\n1. 电子产品\n2. 服装");
        var newTr = document.createElement('tr');
        if (option === "1") {
            newTr.innerHTML = '<td><input type="checkbox" class="checkBox"></td>\n' +
                '            <td><img alt="咖啡豆" src="咖啡豆.webp">\n' +
                '                <p>电子产品</p></td>\n' +
                '            <td class="price">60</td>\n' +
                '            <td>\n' +
                '                <button class="reduce">-</button>\n' +
                '                <input type="number" value="1" min="1" max="30" readonly>\n' +
                '                <button class="add">+</button>\n' +
                '            </td>\n' +
                '            <td class="sPrice">10</td>\n' +
                '            <td><a class="deleteA" href="javascript:">删除</a></td>'
        } else if (option === "2") {
            newTr.innerHTML = '<td><input type="checkbox" class="checkBox"></td>\n' +
                '            <td><img alt="咖啡豆" src="咖啡豆.webp">\n' +
                '                <p>服装</p></td>\n' +
                '            <td class="price">100</td>\n' +
                '            <td>\n' +
                '                <button class="reduce">-</button>\n' +
                '                <input type="number" value="1" min="1" max="30" readonly>\n' +
                '                <button class="add">+</button>\n' +
                '            </td>\n' +
                '            <td class="sPrice">10</td>\n' +
                '            <td><a class="deleteA" href="javascript:">删除</a></td>'
        } else {
            alert("请输入有效的选项！");
        }
        carbody.appendChild(newTr);

        const btn = document.querySelector('.checkBoxAll');
        var buttons = document.querySelectorAll('.checkBox');

        // 设置全选
        btn.onclick = function () {
            if (btn.checked) {
                for (let i in buttons) {
                    buttons[i].checked = true;
                }
            } else {
                for (let i in buttons) {
                    buttons[i].checked = false;
                }
            }
            getTotal();
        }

        //设置删除所选商品函数;
        var del = document.querySelector('.delete_choose');
        del.onclick = function () {
            let trNum = document.querySelectorAll('tr');
            for (i in buttons) {
                if (trNum.length === 1) {
                    alert('已经全部删除');
                    break;
                } else {
                    if (buttons[i].checked === true) {
                        buttons[i].parentNode.parentNode.remove();
                    }
                }
                getTotal();
            }

        }

        var tr = carbody.getElementsByTagName('tr');
        for (var i = 0; i < tr.length; i++) {
            tr[i].onclick = function (e) {
                var target = e.target;
                var input = this.getElementsByTagName('input')[1];
                switch (target.className) {
                    case 'add':
                        if (input.value >= 30) {
                            alert("商品最多可选择30件");
                        } else {
                            input.value = parseInt(input.value) + 1;
                        }
                        break;
                    case 'reduce':
                        if (input.value < 2) {
                            alert("当前商品已为最小值");
                        } else {
                            input.value = parseInt(input.value - 1);
                        }
                        break;
                    case 'deleteA':
                        carbody.removeChild(target.parentNode.parentNode)
                }
                getTotal();
            }
        }
    }
}