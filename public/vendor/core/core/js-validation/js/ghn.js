// window.addEventListener("load", function () {

//     function calculateShippingFee() {
//         let fromDistrictId = document.getElementById("from_city")?.value;
//         let fromWardCode = document.getElementById("from_ward")?.value;
//         let toDistrictId = document.getElementById("to_city")?.value;
//         let toWardCode = document.getElementById("to_ward")?.value;
//         let rawOrderAmount = document.getElementById("total_amount").getAttribute("data-price");

//         let couponValue = document.getElementById("couponValue")?.value;
//         let couponType = document.getElementById("couponType")?.value;
//         // console.log(rawOrderAmount);


//         if (!toWardCode) {
//             console.warn("⚠️ Chưa chọn phường/xã, không thể tính phí vận chuyển!");
//             return;
//         }

//         if (!fromDistrictId || !fromWardCode || !toDistrictId) {
//             console.log("Thiếu thông tin địa chỉ để tính phí vận chuyển.");
//             return;
//         }

//         let products = [];
//         document.querySelectorAll("[id$='_name']").forEach((nameInput) => {
//             let productId = nameInput.id.replace("_name", "").replace(/\D/g, '');
//             if (!productId) return;

//             let quantityInput = document.getElementById(`${productId}_quantity`);
//             let lengthInput = document.getElementById(`${productId}_length`);
//             let widthInput = document.getElementById(`${productId}_width`);
//             let heightInput = document.getElementById(`${productId}_height`);
//             let weightInput = document.getElementById(`${productId}_weight`);

//             if (!quantityInput || !lengthInput || !widthInput || !heightInput || !weightInput) {
//                 console.warn(`⚠️ Thiếu thông tin sản phẩm cho ID: ${productId}`);
//                 return;
//             }

//             let product = {
//                 name: nameInput.value,
//                 quantity: parseInt(quantityInput.value) || 1,
//                 length: parseInt(lengthInput.value) || 0,
//                 width: parseInt(widthInput.value) || 0,
//                 height: parseInt(heightInput.value) || 0,
//                 weight: parseInt(weightInput.value) || 0,
//             };
//             products.push(product);
//         });

//         if (products.length === 0) {
//             console.warn("⚠️ Không có sản phẩm hợp lệ để tính phí vận chuyển.");
//             return;
//         }

//         let maxLength = 0, maxWidth = 0, totalHeight = 0, totalWeight = 0;
//         products.forEach((product) => {
//             maxLength = Math.max(maxLength, product.length);
//             maxWidth = Math.max(maxWidth, product.width);
//             totalHeight += product.height;
//             totalWeight += product.weight;
//         });

//         let convertedWeight = (maxLength * maxWidth * totalHeight) / 5;
//         let chargeableWeight = Math.max(totalWeight, convertedWeight);

//         let requestData = {
//             service_type_id: 2,
//             from_district_id: parseInt(fromDistrictId),
//             from_ward_code: fromWardCode,
//             to_district_id: parseInt(toDistrictId),
//             to_ward_code: toWardCode,
//             length: maxLength,
//             width: maxWidth,
//             height: totalHeight,
//             weight: Math.ceil(chargeableWeight),
//             insurance_value: 0,
//             coupon: null,
//             items: products,
//         };

//         console.log("🚀 Request Data:", requestData);     

//         fetch("https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Token": "2c2e62dc-ee72-11ef-a3aa-e2c95c1f5bee",
//                 "ShopId": "5643397",
//             },
//             body: JSON.stringify(requestData),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 if (data && data.data && data.data.total) {
//                     let shippingFee = (data.data.total);

//                     rawOrderAmount = parseInt(rawOrderAmount, 10) || 0;
//                     rawOrderAmount += shippingFee;

//                     if(couponValue != '' && couponType == 'amount'){
//                         rawOrderAmount -= parseFloat(couponValue) ;
//                         console.log(`new Amount: ${rawOrderAmount}`);
                        
//                         document.getElementById("total_amount").innerText = formatPrice(rawOrderAmount);
//                     }
//                     // console.log(rawOrderAmount);
                    
//                     document.getElementById("shipping_amount").innerText = formatPrice(shippingFee);
//                     document.getElementById("total_amount").innerText = formatPrice(rawOrderAmount);
//                     document.getElementById("shipping_amount_inp").value = shippingFee;
//                     document.getElementById("total_amount_ipn").value = rawOrderAmount;
//                 } else {
//                     document.getElementById("shipping_amount").innerText = "Không thể tính phí";
//                     document.getElementById("shipping_amount_inp").value = "";
//                     console.error("❌ Lỗi khi lấy dữ liệu từ API GHN:", data);
//                 }
//             })
//             .catch((error) => {
//                 console.error("❌ Lỗi khi gọi API GHN:", error);
//                 document.getElementById("shipping_amount").innerText = "Lỗi API";
//                 document.getElementById("shipping_amount_inp").value = "";
//             });
//     }

//     function formatPrice(price) {
//         return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
//     }       

    // document.getElementById("address_id")?.addEventListener("change", function () {
    //     let selectedOption = this.options[this.selectedIndex];
    //     let dataCode = selectedOption.getAttribute("data-code"); // Lấy dữ liệu từ data-code
    //     if (!dataCode) {
    //         console.warn("⚠️ Không có data-code cho địa chỉ được chọn.");
    //         return;
    //     }

    //     let [toDistrictId, toWardCode] = dataCode.split(", ").map(item => item.trim());

    //     console.log("📍 Cập nhật toDistrictId & toWardCode:", { toDistrictId, toWardCode });

    //     document.getElementById("to_city").value = toDistrictId;
    //     document.getElementById("to_ward").value = toWardCode;

        
    //     initialToWardValue = toWardCode;

    //     calculateShippingFee();
    // });

    
    

//     document.querySelectorAll("[id$='_quantity'], [id$='_length'], [id$='_width'], [id$='_height'], [id$='_weight']").forEach((input) => {
//         input.addEventListener("change", calculateShippingFee);
//     });

//     let couponInput = document.getElementById("couponValue");

//     if (couponInput) {
//         couponInput.addEventListener("input", function () {
//             if (this.value.trim() !== "") { // Kiểm tra nếu giá trị khác rỗng
//                 calculateShippingFee();
//             }
//         });
//     }

//     if (document.getElementById("to_ward")?.value) {
//         calculateShippingFee();
//     }

    // $(document).ajaxComplete(function (event, xhr, settings) {
    //     if (
    //         settings.url.includes("cart/update") ||
    //         settings.url.includes("checkout/update")   
    //     ) {
    //         console.log("🛒 Cart  Updated! Waiting for final update...");
            
    //         console.log("🔄 Now recalculating shipping fee...Cart");
    //         calculateShippingFee();

    //     }
    // });

//     $(document).ajaxComplete(function (event, xhr, settings) {
//         if (
//             settings.url.includes("coupon/apply") ||  
//             settings.url.includes("coupon/remove")    
//         ) {
//             console.log("🛒 Coupon Updated! Waiting for final update...");
            
//             // Đợi 500ms để đảm bảo apply/remove hoàn tất trước khi tính lại phí ship
//             setTimeout(() => {
//                 console.log("🔄 Now recalculating shipping fee...Coupon");
//                 calculateShippingFee();
//             }, 5000);
//         }
//     });
 
// });

document.addEventListener("DOMContentLoaded", function () {
    // let isCouponProcessing = false;

    function calculateShippingFee() {

        let fromDistrictId = document.getElementById("from_city")?.value;
        let fromWardCode = document.getElementById("from_ward")?.value;
        let toDistrictId = localStorage.getItem('to_city') || document.getElementById("to_city")?.value;
        let toWardCode = localStorage.getItem('to_ward') || document.getElementById("to_ward")?.value;
        let rawOrderAmount = document.getElementById("total_amount").getAttribute("data-price");

        let couponValue = document.getElementById("couponValue")?.value || localStorage.getItem("couponValue") || 0;
        let couponType = document.getElementById("couponType")?.value || localStorage.getItem("couponType") || "";

        if (!toWardCode) {
            console.warn("⚠️ Chưa chọn phường/xã, không thể tính phí vận chuyển!");
            return;
        }

        if (!fromDistrictId || !fromWardCode || !toDistrictId) {
            console.log("Thiếu thông tin địa chỉ để tính phí vận chuyển.");
            return;
        }

        let products = [];
        document.querySelectorAll("[id$='_name']").forEach((nameInput) => {
            let productId = nameInput.id.replace("_name", "").replace(/\D/g, '');
            if (!productId) return;

            let quantityInput = document.getElementById(`${productId}_quantity`) || 1;
            let lengthInput = document.getElementById(`${productId}_length`);
            let widthInput = document.getElementById(`${productId}_width`);
            let heightInput = document.getElementById(`${productId}_height`);
            let weightInput = document.getElementById(`${productId}_weight`);

            if (!quantityInput || !lengthInput || !widthInput || !heightInput || !weightInput) {
                console.warn(`⚠️ Thiếu thông tin sản phẩm cho ID: ${productId}`);
                return;
            }

            let product = {
                name: nameInput.value,
                quantity: parseInt(quantityInput.value) || 1,
                length: parseInt(lengthInput.value) || 0,
                width: parseInt(widthInput.value) || 0,
                height: parseInt(heightInput.value) || 0,
                weight: parseInt(weightInput.value) || 0,
            };
            products.push(product);
        });

        if (products.length === 0) {
            console.warn("⚠️ Không có sản phẩm hợp lệ để tính phí vận chuyển.");
            return;
        }

        let maxLength = 0, maxWidth = 0, totalHeight = 0, totalWeight = 0;
        products.forEach((product) => {
            maxLength = Math.max(maxLength, product.length);
            maxWidth = Math.max(maxWidth, product.width);
            totalHeight += product.height;
            totalWeight += product.weight;
        });

        let convertedWeight = (maxLength * maxWidth * totalHeight) / 5;
        let chargeableWeight = Math.max(totalWeight, convertedWeight);

        let requestData = {
            service_type_id: 2,
            from_district_id: parseInt(fromDistrictId),
            from_ward_code: fromWardCode,
            to_district_id: parseInt(toDistrictId),
            to_ward_code: toWardCode,
            length: maxLength,
            width: maxWidth,
            height: totalHeight,
            weight: Math.ceil(chargeableWeight),
            insurance_value: 0,
            coupon: null,
            items: products,
        };

        console.log("🚀 Request Data:", requestData);

        fetch("https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Token": "2c2e62dc-ee72-11ef-a3aa-e2c95c1f5bee",
                "ShopId": "5643397",
            },
            body: JSON.stringify(requestData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data && data.data && data.data.total) {
                    let shippingFee = data.data.total;
                    let shippingFeeNew = shippingFee;

                    rawOrderAmount = parseInt(rawOrderAmount, 10) || 0;
                    rawOrderAmount += shippingFee;

                    document.querySelectorAll("[id^='apply_']").forEach((button) => {
                        let dataCode = button.getAttribute("data-code"); // Lấy giá trị data-code
                    
                        if (dataCode) {
                            let [value, type] = dataCode.split("','").map(item => item.trim()); // Tách giá trị và loại mã giảm giá
                    
                            value = parseFloat(value.replace(/[^0-9.-]+/g, "")); // Chuyển đổi thành số
                    
                            if (type === "shipping" && value <= shippingFee) {
                                let couponItem = button.closest(".checkout__coupon-item"); // Tìm item cha của nút apply
                                if (couponItem) {
                                    couponItem.style.display = "none";
                                }
                            }
                        }
                    });

                    if (couponValue != '' && couponType == 'shipping') {
                        rawOrderAmount -= parseFloat(shippingFee);
                        shippingFeeNew = parseFloat(shippingFee) - shippingFee; 

                    } else {
                        
                        let couponDiscountAmount = document.getElementById("couponDiscountAmount")?.getAttribute("data-code") || 0;
                        rawOrderAmount -= parseFloat(couponDiscountAmount);
                    }
                    
                    if(shippingFeeNew == 0){
                        document.getElementById("shipping_amount").innerHTML = formatPriceDiscount(shippingFee);
                    }else{
                        document.getElementById("shipping_amount").innerText = formatPrice(shippingFee);
                    }
                    
                    document.getElementById("total_amount").innerText = formatPrice(rawOrderAmount);
                    document.getElementById("shipping_amount_inp").value = shippingFeeNew;
                    document.getElementById("total_amount_ipn").value = rawOrderAmount;

                    document.getElementById("couponValue").value = couponValue;
                    document.getElementById("couponType").value = couponType;
                } else {
                    console.error("❌ Lỗi khi lấy dữ liệu từ API GHN:", data);
                }
            })
            .catch((error) => {
                console.error("❌ Lỗi khi gọi API GHN:", error);
            });
    }
    calculateShippingFee()

    document.getElementById("address_id")?.addEventListener("change", function () {
        let selectedOption = this.options[this.selectedIndex];
        let dataCode = selectedOption.getAttribute("data-code"); // Lấy dữ liệu từ data-code
        if (!dataCode) {
            console.warn("⚠️ Không có data-code cho địa chỉ được chọn.");
            return;
        }

        let [toDistrictId, toWardCode] = dataCode.split(", ").map(item => item.trim());

        console.log("📍 Cập nhật toDistrictId & toWardCode:", { toDistrictId, toWardCode });

        localStorage.removeItem('to_city');
        localStorage.removeItem('to_ward');
        localStorage.removeItem('to_wardName');

        document.getElementById("to_city").value = toDistrictId;
        document.getElementById("to_ward").value = toWardCode;

        
        initialToWardValue = toWardCode;

        calculateShippingFee();
    });

    document.getElementById("address_city").addEventListener("change", function () {
        let selectedValue = this.value; // Lấy giá trị của select
        localStorage.setItem('to_city', selectedValue)
        document.getElementById("to_city").value = selectedValue; // Gán vào input
    });

    document.getElementById("address_ward").addEventListener("change", function () {
        let selectedValue = this.value; // Lấy giá trị từ select
        let wardCode = selectedValue.split(".")[0];
        let wardName = selectedValue.split(".")[1];

        localStorage.setItem('to_ward', wardCode)
        localStorage.setItem('to_wardName', wardName)

        document.getElementById("to_ward").value = wardCode;
        // calculateShippingFee();
    });

    function getOldWard() {
        let old_toWard = localStorage.getItem('to_ward'); // Lấy ward code từ localStorage
        let old_toWardName = localStorage.getItem('to_wardName'); // Lấy ward name từ localStorage
    
        if (old_toWard && old_toWard !== '') {
            let selectElement = document.getElementById("address_ward");
    
            if (selectElement) {
                // Kiểm tra xem option có tồn tại hay không
                let existingOption = selectElement.querySelector(`option[value='${old_toWard}']`);
                
                if (!existingOption) {
                    // Nếu chưa có, thêm option mới
                    let newOption = document.createElement("option");
                    newOption.value = old_toWard;
                    newOption.textContent = old_toWardName || `Phường/Xã ${old_toWard}`;
                    selectElement.appendChild(newOption);
                }
    
                // Chọn lại option đã lưu
                selectElement.value = old_toWard;
                console.log(`✅ Đã chọn lại Phường/Xã: ${old_toWardName} (${old_toWard})`);
            } else {
                console.warn("❌ Không tìm thấy select #to_ward!");
            }
        } else {
            console.log('⚠️ Không có Phường/Xã đã chọn trong LocalStorage.');
        }
    }    
    getOldWard();

    function formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
    }

    function formatPriceDiscount(price) {
        let formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
        return `<s>${formattedPrice}</s>`; // Thêm thẻ <s> để gạch ngang số tiền
    }

    function handleCouponUpdate(actionType, discountCode, discountValue, discountType, isSuccess) {
        if (isSuccess) {
            console.log(`🎉 ${actionType} mã giảm giá: ${discountCode}, Giá trị: ${discountValue}, Loại: ${discountType}`);
            
            setTimeout(() => {
                document.getElementById("couponValue").value = discountValue;
                document.getElementById("couponType").value = discountType;
    
                // ✅ Lưu vào LocalStorage
                localStorage.setItem("couponValue", discountValue);
                localStorage.setItem("couponType", discountType);
    
                calculateShippingFee();
            }, 5000);
        } else {
            console.warn(`❌ ${actionType} mã giảm giá thất bại: ${discountCode}`);
        }
    }
    
    $(document).on("click", "[id^='apply_']", function () {
        let discountId = $(this).attr("id").replace("apply_", "");
        let discountCode = $(this).data("discount-code") || "";
        let discountData = $(this).data("code"); // Lấy từ data-code
    
        if (discountData) {
            let [discountValue, discountType] = discountData.split("','").map(item => item.replace(/['"]/g, "").trim());
    
            console.log(`🛒 Đang áp dụng mã: ${discountCode}, Giá trị: ${discountValue}, Loại: ${discountType}`);
    
            // **Lắng nghe phản hồi AJAX để kiểm tra thành công/thất bại**
            $(document).ajaxComplete(function (event, xhr, settings) {
                if (settings.url.includes("coupon/apply")) {
                    try {
                        let response = JSON.parse(xhr.responseText);
    
                        if (response.error) {
                            console.error(`❌ Mã giảm giá ${discountCode} bị lỗi: ${response.message}`);
                            handleCouponUpdate("Áp dụng", discountCode, "", "", false);
                        } else {
                            console.log(`🎉 Mã giảm giá ${discountCode} đã được áp dụng thành công!`);
                            localStorage.setItem("discountId", discountId);
                            handleCouponUpdate("Áp dụng", discountCode, discountValue, discountType, true);
                            setTimeout(() => {
                                getOldWard()
                                calculateShippingFee();
                            }, 5000);
                        }
                    } catch (e) {
                        console.error("❌ Lỗi xử lý phản hồi AJAX:", e);
                    }
                }
            });
        }
    });
    
    // ❌ **Lắng nghe sự kiện click vào "Remove" để gửi yêu cầu AJAX**
    $(document).on("click", "[id^='remove_']", function () {
        let discountId = $(this).attr("id").replace("remove_", "");
        console.log(`❌ Đang xóa mã giảm giá ID: ${discountId}`);
    
        $(document).ajaxComplete(function (event, xhr, settings) {
            if (settings.url.includes("coupon/remove")) {
                try {
                    let response = JSON.parse(xhr.responseText);
    
                    if (response.error) {
                        console.error("❌ Xóa mã giảm giá thất bại:", response.message);
                    } else {
                        console.log("✅ Mã giảm giá đã được xóa thành công!");
                        handleCouponUpdate("Xóa", "", "", "", true);
                        setTimeout(() => {
                            calculateShippingFee();
                        }, 5000);
                    }
                } catch (e) {
                    console.error("❌ Lỗi khi xử lý phản hồi AJAX:", e);
                }
            }
        });
    });
    //-------
    $(document).ajaxComplete(function (event, xhr, settings) {
        if (
            settings.url.includes("cart/update") ||
            settings.url.includes("checkout/update")   
        ) {
            console.log("🛒 Cart  Updated! Waiting for final update...");
            
            console.log("🔄 Now recalculating shipping fee...Cart");
            calculateShippingFee();
            // getOldWard();
        }
    });
    // 🔄 **Tự động tính lại phí vận chuyển sau khi apply/remove coupon**
    $(document).ajaxComplete(function (event, xhr, settings) {
        if (settings.url.includes("coupon/apply") || settings.url.includes("coupon/remove")) {
            console.log("🛒 Coupon Updated! Waiting for final update...");
    
            // isCouponProcessing = true;
            
            setTimeout(() => {
                // isCouponProcessing = false;
                getOldWard();
                calculateShippingFee();
            }, 5000);
        }
    });


    document.addEventListener("click", function (event) {
        let btn = event.target.closest("#btn_checkout");
        
        if (btn) {
            handleCheckout();
        }
    });
    
    function handleCheckout() {
        localStorage.removeItem('couponType');
        localStorage.removeItem('couponValue');
        localStorage.removeItem('discountId');
        localStorage.removeItem('to_ward');
        localStorage.removeItem('to_wardName');
        localStorage.removeItem('to_city');
    
        let path = window.location.pathname;
        let token = path.split("/checkout/")[1];
    
        let shippingAmount = document.getElementById("shipping_amount_inp").value || 0;
        let totalAmount = document.getElementById("total_amount_ipn").value || 0;
    
        console.log("🚀 Sending checkout data:", { token, shippingAmount, totalAmount });
    
        fetch("/ghn/update-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').content
            },
            body: JSON.stringify({
                token: token,
                shipping_amount_inp: shippingAmount,
                total_amount_ipn: totalAmount
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log("✅ Order updated successfully:", data);
            } else {
                console.error("❌ Error updating order:", data);
                alert("Failed to update order. Please try again!");
            }
        })
        .catch(error => {
            console.error("❌ AJAX Error:", error);
            alert("There was an error processing your request.");
        });
    }
    

});



// document.addEventListener("DOMContentLoaded", function() {
//     function syncQuantities() {
//         document.querySelectorAll("input[id$='_qty']").forEach(qtyInput => {
//             let id = qtyInput.id.split("_")[0]; 
//             let quantityInput = document.getElementById(`${id}_quantity`);

//             if (!quantityInput) return; 

//             quantityInput.value = qtyInput.value;
//         });
//     }

//     syncQuantities();

//     document.querySelectorAll("button[id$='_plus'], button[id$='_minus']").forEach(button => {
//         button.addEventListener("click", function() {
//             let id = this.id.split("_")[0];
//             let qtyInput = document.getElementById(`${id}_qty`);
//             let quantityInput = document.getElementById(`${id}_quantity`);

//             if (!qtyInput || !quantityInput) return;

//             let currentValue = parseInt(qtyInput.value, 10) || 1;
//             let min = parseInt(qtyInput.min, 10) || 1;
//             let max = parseInt(qtyInput.max, 10) || 1000;

//             if (this.id.includes("_plus") && currentValue < max) {
//                 currentValue++;
//             } else if (this.id.includes("_minus") && currentValue > min) {
//                 currentValue--;
//             }

//             qtyInput.value = currentValue;
//             quantityInput.value = currentValue;
//         });
//     });

//     let observer = new MutationObserver(syncQuantities);
//     document.querySelectorAll("input[id$='_qty']").forEach(qtyInput => {
//         observer.observe(qtyInput, { attributes: true, attributeFilter: ["value"] });
//     });
    
//     $(document).ajaxComplete(function (event, xhr, settings) {
//         if (settings.url.includes("cart/update") || settings.url.includes("checkout/update")) {
//             console.log("🛒 Cart Updated! Recalculating shipping fee...");
//             syncQuantities();
//         }
//     });

//     $(document).ajaxComplete(function (event, xhr, settings) {
//         if (
//             settings.url.includes("coupon/apply") ||  
//             settings.url.includes("coupon/remove")    
//         ) {
//             console.log("🛒 Coupon Updated! Waiting for final update...quantity");
            
//             setTimeout(() => {
//                 console.log("🛒 Coupon Updated! Recalculating shipping fee...");
//                 syncQuantities();
//             }, 5000);
//         }
//     });

// });

document.addEventListener("DOMContentLoaded", function () {

});

// function calculateShippingFee() {
//     // if (isCouponProcessing) {
//     //     console.log("⚠️ Đang xử lý mã giảm giá, chờ trước khi tính phí vận chuyển...");
//     //     return;
//     // }

//     let fromDistrictId = document.getElementById("from_city")?.value;
//     let fromWardCode = document.getElementById("from_ward")?.value;
//     let toDistrictId = document.getElementById("to_city")?.value;
//     let toWardCode = document.getElementById("to_ward")?.value;
//     let rawOrderAmount = document.getElementById("total_amount").getAttribute("data-price");

//     let couponValue = document.getElementById("couponValue")?.value || localStorage.getItem("couponValue") || 0;
//     let couponType = document.getElementById("couponType")?.value || localStorage.getItem("couponType") || "";

//     if (!toWardCode) {
//         console.warn("⚠️ Chưa chọn phường/xã, không thể tính phí vận chuyển!");
//         return;
//     }

//     if (!fromDistrictId || !fromWardCode || !toDistrictId) {
//         console.log("Thiếu thông tin địa chỉ để tính phí vận chuyển.");
//         return;
//     }

//     let products = [];
//     document.querySelectorAll("[id$='_name']").forEach((nameInput) => {
//         let productId = nameInput.id.replace("_name", "").replace(/\D/g, '');
//         if (!productId) return;

//         let quantityInput = document.getElementById(${productId}_quantity) || 1;
//         let lengthInput = document.getElementById(${productId}_length);
//         let widthInput = document.getElementById(${productId}_width);
//         let heightInput = document.getElementById(${productId}_height);
//         let weightInput = document.getElementById(${productId}_weight);

//         if (!quantityInput || !lengthInput || !widthInput || !heightInput || !weightInput) {
//             console.warn(⚠️ Thiếu thông tin sản phẩm cho ID: ${productId});
//             return;
//         }

//         let product = {
//             name: nameInput.value,
//             quantity: parseInt(quantityInput.value) || 1,
//             length: parseInt(lengthInput.value) || 0,
//             width: parseInt(widthInput.value) || 0,
//             height: parseInt(heightInput.value) || 0,
//             weight: parseInt(weightInput.value) || 0,
//         };
//         products.push(product);
//     });

//     if (products.length === 0) {
//         console.warn("⚠️ Không có sản phẩm hợp lệ để tính phí vận chuyển.");
//         return;
//     }

//     let maxLength = 0, maxWidth = 0, totalHeight = 0, totalWeight = 0;
//     products.forEach((product) => {
//         maxLength = Math.max(maxLength, product.length);
//         maxWidth = Math.max(maxWidth, product.width);
//         totalHeight += product.height;
//         totalWeight += product.weight;
//     });

//     let convertedWeight = (maxLength * maxWidth * totalHeight) / 5;
//     let chargeableWeight = Math.max(totalWeight, convertedWeight);

//     let requestData = {
//         service_type_id: 2,
//         from_district_id: parseInt(fromDistrictId),
//         from_ward_code: fromWardCode,
//         to_district_id: parseInt(toDistrictId),
//         to_ward_code: toWardCode,
//         length: maxLength,
//         width: maxWidth,
//         height: totalHeight,
//         weight: Math.ceil(chargeableWeight),
//         insurance_value: 0,
//         coupon: null,
//         items: products,
//     };

//     console.log("🚀 Request Data:", requestData);

//     fetch("https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Token": "2c2e62dc-ee72-11ef-a3aa-e2c95c1f5bee",
//             "ShopId": "5643397",
//         },
//         body: JSON.stringify(requestData),
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             if (data && data.data && data.data.total) {
//                 let shippingFee = data.data.total;
//                 let shippingFeeNew = shippingFee;

//                 rawOrderAmount = parseInt(rawOrderAmount, 10) || 0;
//                 rawOrderAmount += shippingFee;

//                 if (couponValue != '' && couponType == 'shipping') {

//                     if (shippingFee <= couponValue) {
//                         rawOrderAmount -= parseFloat(shippingFee);
//                         shippingFeeNew = parseFloat(shippingFee) - shippingFee; 
//                     }else{
//                         // removeCoupon();
//                         autoClickRemove(remove_${localStorage.getItem("discountId")}, 3)
//                     }

//                 } else {
                    
//                     let couponDiscountAmount = document.getElementById("couponDiscountAmount")?.getAttribute("data-code") || 0;
//                     rawOrderAmount -= parseFloat(couponDiscountAmount);
//                 }
                
//                 if(shippingFeeNew == 0){
//                     document.getElementById("shipping_amount").innerHTML = formatPriceDiscount(shippingFee);
//                 }else{
//                     document.getElementById("shipping_amount").innerText = formatPrice(shippingFee);
//                 }
                
//                 document.getElementById("total_amount").innerText = formatPrice(rawOrderAmount);
//                 document.getElementById("shipping_amount_inp").value = shippingFeeNew;
//                 document.getElementById("total_amount_ipn").value = rawOrderAmount;

//                 document.getElementById("couponValue").value = couponValue;
//                 document.getElementById("couponType").value = couponType;
//             } else {
//                 console.error("❌ Lỗi khi lấy dữ liệu từ API GHN:", data);
//             }
//         })
//         .catch((error) => {
//             console.error("❌ Lỗi khi gọi API GHN:", error);
//         });
// }
// calculateShippingFee()
// function handleCouponUpdate(actionType, discountCode, discountValue, discountType, isSuccess) {
//     if (isSuccess) {
//         console.log(🎉 ${actionType} mã giảm giá: ${discountCode}, Giá trị: ${discountValue}, Loại: ${discountType});
        
//         setTimeout(() => {
//             document.getElementById("couponValue").value = discountValue;
//             document.getElementById("couponType").value = discountType;

//             // ✅ Lưu vào LocalStorage
//             localStorage.setItem("couponValue", discountValue);
//             localStorage.setItem("couponType", discountType);

//             calculateShippingFee();
//         }, 5000);
//     } else {
//         console.warn(❌ ${actionType} mã giảm giá thất bại: ${discountCode});
//     }
// }

// function autoClickRemove(buttonId, delayInSeconds) {
//     setTimeout(function () {
//         let button = document.getElementById(buttonId);
//         // Xóa dữ liệu mã giảm giá trong localStorage
//         localStorage.removeItem("couponValue");
//         localStorage.removeItem("couponType");
//         localStorage.removeItem("discountId");
//         if (button) {
//             button.click();
//             console.log(✅ Nút ${buttonId} đã được tự động click sau ${delayInSeconds} giây!);
//         } else {
//             console.warn(❌ Không tìm thấy nút có ID: ${buttonId});
//         }
//     }, delayInSeconds * 1000); // Chuyển giây thành mili-giây
// }


// $(document).on("click", "[id^='apply_']", function () {
//     let discountId = $(this).attr("id").replace("apply_", "");
//     let discountCode = $(this).data("discount-code") || "";
//     let discountData = $(this).data("code"); // Lấy từ data-code

//     if (discountData) {
//         let [discountValue, discountType] = discountData.split("','").map(item => item.replace(/['"]/g, "").trim());

//         console.log(🛒 Đang áp dụng mã: ${discountCode}, Giá trị: ${discountValue}, Loại: ${discountType});

//         // **Lắng nghe phản hồi AJAX để kiểm tra thành công/thất bại**
//         $(document).ajaxComplete(function (event, xhr, settings) {
//             if (settings.url.includes("coupon/apply")) {
//                 try {
//                     let response = JSON.parse(xhr.responseText);

//                     if (response.error) {
//                         console.error(❌ Mã giảm giá ${discountCode} bị lỗi: ${response.message});
//                         handleCouponUpdate("Áp dụng", discountCode, "", "", false);
//                     } else {
//                         console.log(🎉 Mã giảm giá ${discountCode} đã được áp dụng thành công!);
//                         localStorage.setItem("discountId", discountId);
//                         handleCouponUpdate("Áp dụng", discountCode, discountValue, discountType, true);
//                         setTimeout(() => {
//                             calculateShippingFee();
//                         }, 1500);
//                     }
//                 } catch (e) {
//                     console.error("❌ Lỗi xử lý phản hồi AJAX:", e);
//                 }
//             }
//         });
//     }
// });

// // ❌ **Lắng nghe sự kiện click vào "Remove" để gửi yêu cầu AJAX**
// $(document).on("click", "[id^='remove_']", function () {
//     let discountId = $(this).attr("id").replace("remove_", "");
//     console.log(❌ Đang xóa mã giảm giá ID: ${discountId});

//     $(document).ajaxComplete(function (event, xhr, settings) {
//         if (settings.url.includes("coupon/remove")) {
//             try {
//                 let response = JSON.parse(xhr.responseText);

//                 if (response.error) {
//                     console.error("❌ Xóa mã giảm giá thất bại:", response.message);
//                 } else {
//                     console.log("✅ Mã giảm giá đã được xóa thành công!");
//                     handleCouponUpdate("Xóa", "", "", "", true);
//                     setTimeout(() => {
//                         calculateShippingFee();
//                     }, 5000);
//                 }
//             } catch (e) {
//                 console.error("❌ Lỗi khi xử lý phản hồi AJAX:", e);
//             }
//         }
//     });
// });
// //-------
// $(document).ajaxComplete(function (event, xhr, settings) {
//     if (
//         settings.url.includes("cart/update") ||
//         settings.url.includes("checkout/update")   
//     ) {
//         console.log("🛒 Cart  Updated! Waiting for final update...");
        
//         console.log("🔄 Now recalculating shipping fee...Cart");
//         calculateShippingFee();

//     }
// });
// // 🔄 **Tự động tính lại phí vận chuyển sau khi apply/remove coupon**
// $(document).ajaxComplete(function (event, xhr, settings) {
//     if (settings.url.includes("coupon/apply") || settings.url.includes("coupon/remove")) {
//         console.log("🛒 Coupon Updated! Waiting for final update...");

//         // isCouponProcessing = true;
//         setTimeout(() => {
//             // isCouponProcessing = false;
//             calculateShippingFee();
//         }, 5000);
//     }
// });