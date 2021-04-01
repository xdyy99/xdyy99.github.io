// Calculator
var calculator = (function() {
    return {
        calRow: function(obj, idsp) {
            var price;
            obj.forEach(function(cur) {
                if (cur.idsp == idsp) {
                    price = cur.price * cur.amount;
                }
            });
            return price;
        },

        calTotal: function(obj) {
            var total = 0;
            obj.forEach(function(cur, index) {
                total += cur.priceChange;
            });
            return total;
        },

        calAmount: function(obj) {
            var amount = 0;
            obj.forEach(function(cur) {
                amount += cur.amount;
            });
            return amount;
        },
    }
})();

//AddToArray
var AddToArray = (function() {
    var product = function(id, idsp, name, price, amount, priceChange) {
        this.id = id;
        this.idsp = idsp;
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.priceChange = priceChange;
    };
    var data = [];

    var updateItem = function(data) {
        data.forEach(function(cur, index) {
            cur.id = index;
        });
    };

    return {
        addToArray: function(id, idsp, name, price, amount, priceChange) {
            var id;
            if (data.length > 0) {
                id = data.length + 1;
            } else {
                id = 1;
            }
            var newProduct = new product(id, idsp, name, price, amount, priceChange);
            data.push(newProduct);
            console.log(data);
            return newProduct;

        },

        // Hàm lấy data
        getData: function() {
            return data;
        },

        // Hàm xóa 1 item
        deleteItem: function(idsp) {
            data.forEach(function(cur, index) {
                if (cur.idsp == idsp) {
                    data.splice(index, 1);
                    updateItem(data);
                    console.log(data);
                }
            });
        },


        // Kiểm tra trùng 
        checkInData: function(idsp) {
            var count = 0;
            if (data.length > 0) {
                data.forEach(function(cur, index) {
                    if (cur.idsp == idsp) {
                        count++;
                    }
                });
            } else {
                return true;
            }

            if (count > 0) {
                return false;
            } else {
                return true;
            }
        },


        // Update số lượng sản phẩm
        updateAmount: function(value, idsp) {
            data.forEach(function(cur) {
                if (cur.idsp == idsp) {
                    cur.amount = value;
                    cur.priceChange = cur.price * value;
                }
            });
            console.log(data);
        },


        // Xóa toàn bộ data 
        deleteAllInData: function() {
            data = [];
        },

        updateAmountClick: function(idsp) {
            data.forEach(function(cur, index) {
                if (cur.idsp == idsp) {
                    cur.amount++;
                    cur.priceChange = cur.price * cur.amount;
                }
            });
        },

        showData: function() {
            console.log(data);
        }

    }


})();

//UI Controller
var UIcontroller = (function() {
    var name, price, img;
    var DOM_name = document.querySelectorAll('.name-product');
    var DOM_price = document.querySelectorAll('.price-product');

    return {
        getValue: function(id) {
            var img_name = DOM_img[id].src.split("/");
            return {
                idsp: id,
                name: DOM_name[id].textContent,
                name: DOM_name[id].textContent,
                price: DOM_price[id].textContent,
                img: img_name[img_name.length - 1],
                amount: 1
            }
        },
        addProduct: function(obj) {
            $('.order .order-table tbody').append("<tr>" +
                "<td><input type='hidden' name='data_product[" + obj.idsp + "][id]' value='" + obj.idsp + "' /> " + obj.id + "</td>" +
                "<td><input type='hidden' class='from-control' name='producr_name' />" + obj.name + "</td>" +
                "<td>VNĐ</td>" +
                "<td class='amount-product'>" +
                "<div class='amount-box'>" +
                "<span class='change-amount input-number-decrement'>–</span>" +
                "<input id='" + obj.id + "' idsp='" + obj.idsp + "' class='input-number' type='text' name='data_product[" + obj.idsp + "][quantity]' value='1' min='0' onkeypress='return false;'>" +
                "<span class='change-amount input-number-increment'>+</span>" +
                "</div>" +
                "</td>" +
                "<td><input type='hidden' class='from-control' name='producr_price'/>" + mona_format_price(obj.price) + "</td>" +
                "<td class='total-row'>" + mona_format_price(obj.priceChange) + "</td>" +
                "<td><img  idsp='" + obj.idsp + "' src='" + mona_ajax_url.siteURL + "/template/images/delete.svg' alt=''></td></tr>");

            /* --- */
            $('.order-table tbody tr').each(function() {
                $(this).find("td").eq(0).attr("data-title", "STT");
                $(this).find("td").eq(1).attr("data-title", "TÊN HÀNG");
                $(this).find("td").eq(2).attr("data-title", "đơn vị");
                $(this).find("td").eq(3).attr("data-title", "số lượng");
                $(this).find("td").eq(4).attr("data-title", "giá tiền");
                $(this).find("td").eq(5).attr("data-title", "tổng tiền");
                $(this).find("td").eq(6).attr("data-title", "Xóa");
            });
        },

        deleteProduct: function(idsp, data) {
            data.forEach(function(cur, index) {
                if (cur.idsp == idsp) {
                    document.querySelector(".order-table").deleteRow(index + 1);
                }
            });
        }

    }

})();



// Controller
var controller = (function(Cal, Arr, UIctrl) {
    var setupEvent = function() {
        var btn_order = document.querySelector('.search-product');
        // $('.search-product option').each(function(index) {
        //     $(this).attr('id', index);
        // });
        // - Click add
        $('.search-product').on('change', function() {
            var idsp = parseInt($(".search-product option:selected").attr("id"));
            var name = $(".search-product option:selected").text();
            var price = parseFloat($(".search-product option:selected").attr("price"));
            var priceChange = price;
            var amount = 1;
            var id = 0;
            addCart(id, idsp, name, price, amount, priceChange);
        })



        // Add file Excel

        $('#mona-file-upload').on('change', function(e) {

            // Deleta all in data     
            Arr.deleteAllInData();
            $(".order tbody").html("");


            var reader = new FileReader();

            if (typeof(FileReader) != "undefined") {


                var xlsxflag = true;
                var reader = new FileReader();

                reader.onload = function(e) {
                    console.log("run excel");
                    var data = e.target.result;
                    /*Converts the excel data in to object*/
                    if (xlsxflag) {
                        var workbook = XLSX.read(data, { type: 'binary' });
                    } else {
                        var workbook = XLS.read(data, { type: 'binary' });
                    }
                    /*Gets all the sheetnames of excel in to a variable*/
                    var sheet_name_list = workbook.SheetNames;

                    var cnt = 0; /*This is used for restricting the script to consider only first sheet of excel*/
                    sheet_name_list.forEach(function(y) { /*Iterate through all sheets*/
                        /*Convert the cell value to Json*/
                        if (xlsxflag) {
                            var exceljson = XLSX.utils.sheet_to_json(workbook.Sheets[y]);
                        } else {
                            var exceljson = XLS.utils.sheet_to_row_object_array(workbook.Sheets[y]);
                        }
                        if (exceljson.length > 0 && cnt == 0) {
                            var $html = '';
                            var $count = 1;
                            var $countt = 0;
                            var $total = 0;
                            $.each(exceljson, function(index, item) {
                                var $qtt = parseInt(item.quantity);
                                if ($qtt > 0 && item.sku != '') {
                                    var $select = $('#mona-product-selector option[data-sku="' + item.sku + '"]');
                                    if ($select.length) {
                                        var idsp = parseInt($select.attr('id')),
                                            price = parseInt($select.attr('price')),
                                            priceChange = price,
                                            name = $select.text();

                                        addCart(index, idsp, name, price, $qtt, priceChange);

                                    }
                                }


                                /* --- */

                            });
                            // if ($html != '') {
                            //     $('.order .order-table tbody').html($html);
                            //     $('.box-total .price').html(mona_format_price($total));
                            //     $('.box-total .product span').html($countt);
                            // }
                            // cnt++;
                        }
                    });
                    document.getElementById("mona-file-upload").value = null;
                }
                if (xlsxflag) { /*If excel file is .xlsx extension than creates a Array Buffer from excel*/
                    reader.readAsArrayBuffer(this.files[0]);
                } else {
                    reader.readAsBinaryString(this.files[0]);
                }
            }
        });




        // - Click delete
        document.querySelector('.order-table').addEventListener('click', deleteCart);

        // Thay đổi số lượng
        $(".order-table").on('click', '.change-amount', function() {

            value = parseInt($(this).parent().children(".input-number").val());
            index = parseInt($(this).parent().children(".input-number").attr("id"));
            idsp = parseInt($(this).parent().children(".input-number").attr("idsp"));

            if ($(this).hasClass("input-number-increment")) {
                value++;
                $(this).parent().children(".input-number").val(value);
            }
            if ($(this).hasClass('input-number-decrement')) {
                if (value > 1) {
                    value--;
                    $(this).parent().children(".input-number").val(value);
                }
            }

            // Đổi số lượng trong object
            Arr.updateAmount(value, idsp);

            // Get data
            data = Arr.getData();

            // Tính tiền của hàng
            price = data[index - 1].priceChange;
            changeTotal(price, index);

            // Tính tổng
            updateTotal();


        });
    };

    // 1.Thao tác add giá trị vào cart
    var addCart = function(id, idsp, name, price, amount, priceChange) {

        var height_table = $('.order-table').height();
        if (height_table > 450) {
            $('.order .order-table tbody').addClass("limit-table");
        } else {
            $('.order .order-table tbody').removeClass("limit-table");
        }
        var value, newProduct, data, total, check;
        // - Lấy giá trị của sản phẩm
        // value = UIctrl.getValue(id);

        check = Arr.checkInData(idsp);

        if (check == true) {
            // - Add vào mảng
            newProduct = Arr.addToArray(id, idsp, name, price, amount, priceChange);

            // - In ra màn hình
            UIctrl.addProduct(newProduct);
        } else {
            Arr.updateAmountClick(idsp);
            changeAmountClick(idsp);
        }

        // Tổng tiền giỏ hàng
        updateTotal();


    };


    // 2. Thao tác xóa 1 product
    var deleteCart = function(event) {

        var height_table = $('.order-table').height();
        if (height_table < 383) {
            $('.order .order-table tbody').removeClass("limit-table");
        }
        var target = $(event.target);
        if (target.is("img")) {
            var idsp = parseInt(event.target.getAttribute('idsp'));
        }

        // lấy mảng (danh sách sản phẩm)
        data = Arr.getData();

        // Xóa ngoài màn hình
        UIctrl.deleteProduct(idsp, data);

        // xóa trong mảng
        Arr.deleteItem(idsp);

        // Tổng tiền giỏ hàng
        updateTotal();




    };


    // 4. Tăng số lượng khi bị trùng
    var changeAmountClick = function(idsp) {

        data = Arr.getData();
        var input_number = document.querySelectorAll('.input-number');

        var get_index = 0;
        data.forEach(function(cur, index) {
            if (cur.idsp == idsp) {
                input_number[index].value = cur.amount;
                get_index = index;
            }
        });
        // Tính tiền của hàng
        price = data[get_index].priceChange;
        changeTotal(price, get_index + 1);

        // Tính tổng
        updateTotal();
    };


    // Đổi giá tiền theo số lượng của sản phẩm
    var changeTotal = function(price, id) {
        var changeTotal = document.querySelectorAll('.total-row');
        changeTotal.forEach(function(cur, index) {
            if ((index + 1) == id) {
                cur.innerHTML = mona_format_price(price);
            }
        });
    };

    // - Tính tổng tiền giỏ hàng
    var updateTotal = function() {
        data = Arr.getData();
        total = Cal.calTotal(data);
        amount = Cal.calAmount(data);
        document.querySelector('.box-total .price').innerHTML = mona_format_price(total);
        document.querySelector('.box-total .product span').innerHTML = amount;
    };


    return {
        init: function() {
            setupEvent();
        }
    }
})(calculator, AddToArray, UIcontroller);
controller.init();

function mona_format_price(x) {
    x = x.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    return x;
}