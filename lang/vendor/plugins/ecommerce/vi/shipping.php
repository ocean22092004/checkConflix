<?php

return [
    'name' => 'Phí vận chuyển',
    'shipping' => 'Vận chuyển',
    'title' => 'Tiêu đề',
    'amount' => 'Số tiền',
    'enable' => 'Cho phép',
    'enabled' => 'Đã bật',
    'disable' => 'Vô hiệu hóa',
    'disabled' => 'Tàn tật',
    'create_shipping' => 'Tạo vận chuyển',
    'edit_shipping' => 'Edit shipping #',
    'status' => 'Trạng thái',
    'shipping_methods' => 'Phương thức vận chuyển',
    'create_shipping_method' => 'Tạo phương thức vận chuyển',
    'edit_shipping_method' => 'Sửa phương thức vận chuyển',
    'add_shipping_region' => 'Thêm khu vực vận chuyển',
    'country' => 'Quốc gia',
    'state' => 'Bang',
    'city' => 'Thành phố',
    'address' => 'Địa chỉ',
    'phone' => 'Điện thoại',
    'email' => 'E-mail',
    'zip_code' => 'Mã Bưu Chính',
    'methods' => [
        'default' => 'Mặc định',
    ],
    'statuses' => [
        'not_approved' => 'Chưa được phê duyệt',
        'approved' => 'Đã được phê duyệt',
        'picking' => 'Đang lấy hàng',
        'delay_picking' => 'Trì hoãn việc lấy hàng',
        'picked' => 'Đã lấy hàng',
        'not_picked' => 'Không lấy hàng',
        'delivering' => 'Đang giao hàng',
        'delivered' => 'Đã giao hàng',
        'not_delivered' => 'Chưa giao hàng',
        'audited' => 'Đã kiểm định',
        'canceled' => 'Đã hủy',
        'pending' => 'Chờ xử lý',
        'arrange_shipment' => 'Sắp xếp chuyển hàng',
        'ready_to_be_shipped_out' => 'Sẵn sàng để được vận chuyển ra ngoài',
    ],
    'cod_statuses' => [
        'pending' => 'Chờ xử lý',
        'completed' => 'Hoàn thành',
    ],
    'delete' => 'Xóa',
    'shipping_rules' => 'Quy tắc vận chuyển',
    'shipping_rules_description' => 'Quy định tính phí vận chuyển.',
    'select_country' => 'Chọn quốc gia',
    'add_shipping_rule' => 'Thêm quy tắc vận chuyển',
    'delete_shipping_rate' => 'Xóa phí vận chuyển cho khu vực',
    'delete_shipping_rate_confirmation' => 'Bạn có chắc chắn muốn xóa <strong class="khu vực-price-item-label"></strong> khỏi khu vực vận chuyển này không?',
    'delete_shipping_area' => 'Xóa khu vực vận chuyển',
    'delete_shipping_area_confirmation' => 'Bạn có chắc chắn muốn xóa khu vực vận chuyển <strong class="khu vực-item-label"></strong> không?',
    'add_shipping_fee_for_area' => 'Thêm phí vận chuyển theo khu vực',
    'confirm' => 'Xác nhận',
    'save' => 'Cứu',
    'greater_than' => 'Lớn hơn',
    'type' => 'Kiểu',
    'shipping_rule_name' => 'Tên quy tắc vận chuyển',
    'shipping_fee' => 'Phí vận chuyển',
    'cancel' => 'Hủy bỏ',
    'based_on_weight' => 'Dựa trên trọng lượng sản phẩm (:unit)',
    'based_on_price' => 'Căn cứ vào giá sản phẩm',
    'shipment_canceled' => 'Lô hàng đã bị hủy',
    'at' => 'Tại',
    'cash_on_delivery' => 'Giao hàng thu tiền (COD)',
    'update_shipping_status' => 'Cập nhật trạng thái vận chuyển',
    'update_cod_status' => 'Cập nhật trạng thái COD',
    'history' => 'Lịch sử',
    'shipment_information' => 'Thông tin chuyển hàng',
    'order_number' => 'Số đơn hàng',
    'shipping_method' => 'Phương thức vận chuyển',
    'select_shipping_method' => 'Chọn phương thức vận chuyển',
    'cod_status' => 'trạng thái COD',
    'shipping_status' => 'Tình trạng giao hàng',
    'customer_information' => 'Thông tin khách hàng',
    'sku' => 'Mã sản phẩm',
    'change_status_confirm_title' => 'Xác nhận <span class="shipment-status-label"></span> ?',
    'change_status_confirm_description' => 'Bạn có chắc chắn muốn xác nhận <span class="shipment-status-label"></span> cho lô hàng này không?',
    'accept' => 'Chấp nhận',
    'weight_unit' => 'Trọng lượng (:đơn vị)',
    'updated_at' => 'Cập nhật cuối cùng',
    'cod_amount' => 'Số tiền thanh toán khi giao hàng (COD)',
    'cancel_shipping' => 'Hủy vận chuyển',
    'shipping_address' => 'Địa chỉ giao hàng',
    'packages' => 'Gói',
    'edit' => 'Chỉnh sửa',
    'fee' => 'Phí',
    'note' => 'Ghi chú',
    'finish' => 'Hoàn thành',
    'shipping_fee_cod' => 'Phí vận chuyển/COD',
    'send_confirmation_email_to_customer' => 'Gửi email xác nhận cho khách hàng',
    'form_name' => 'Tên',
    'changed_shipping_status' => 'Changed status of shipping to: :status. Updated by: %user_name%',
    'order_confirmed_by' => 'Đơn hàng được xác nhận bởi %user_name%',
    'shipping_canceled_by' => 'Việc vận chuyển bị hủy bởi %user_name%',
    'update_shipping_status_success' => 'Cập nhật trạng thái vận chuyển thành công!',
    'update_cod_status_success' => 'Đã cập nhật trạng thái COD vận chuyển thành công!',
    'updated_cod_status_by' => 'Updated COD status to :status . Updated by: %user_name%',
    'all' => 'Tất cả',
    'all_countries' => 'Tất cả các nước',
    'error_when_adding_new_region' => 'Đã xảy ra lỗi khi thêm vùng mới!',
    'delivery' => 'Vận chuyển',
    'adjustment_price_of' => 'Adjustment price of :key',
    'warehouse' => 'Kho',
    'delivery_note' => 'Phiếu giao hàng',
    'customer_note' => 'Ghi chú của khách hàng',
    'shipments' => 'Giao hàng',
    'order_id' => 'Mã đơn hàng',
    'shipment_id' => 'ID lô hàng',
    'not_available' => 'Không có sẵn',
    'shipping_amount' => 'Số tiền vận chuyển',
    'additional_shipment_information' => 'Thông tin lô hàng bổ sung',
    'shipping_company_name' => 'Tên công ty vận chuyển',
    'shipping_company_name_placeholder' => 'Ex: DHL, AliExpress...',
    'tracking_id' => 'Mã theo dõi',
    'tracking_id_placeholder' => 'Ex: JJD0099999999',
    'tracking_link' => 'Liên kết theo dõi',
    'tracking_link_placeholder' => 'Ex: https://mydhl.express.dhl/us/en/tracking.html#/track-by-reference',
    'estimate_date_shipped' => 'Ngày vận chuyển dự kiến',
    'date_shipped' => 'Ngày vận chuyển',
    'add_note' => 'Thêm ghi chú...',
    'view_order' => 'View Order :order_id',
    'rule' => [
        'enum_types' => [
            'based_on_weight' => 'Dựa trên tổng trọng lượng của đơn hàng (:đơn vị)',
            'based_on_price' => 'Dựa trên tổng số tiền đặt hàng',
            'based_on_zipcode' => 'Dựa trên mã vùng',
            'based_on_location' => 'Dựa trên vị trí',
            'unavailable' => 'Không có sẵn',
        ],
        'item' => [
            'name' => 'Mục quy tắc vận chuyển',
            'edit' => 'Chỉnh sửa mục',
            'create' => 'Tạo mục mới',
            'delete' => 'Xóa mục quy tắc vận chuyển',
            'confirmation' => 'Bạn có chắc chắn muốn xóa mục quy tắc vận chuyển <strong class="item-label"></strong> không?',
            'load_data_table' => 'Tải bảng dữ liệu (:total)',
            'tables' => [
                'shipping_rule' => 'Quy tắc vận chuyển',
                'country' => 'Quốc gia',
                'state' => 'Bang',
                'city' => 'Thành phố',
                'zip_code' => 'Mã Bưu Chính',
                'adjustment_price' => 'Giá điều chỉnh',
                'is_enabled' => 'Được kích hoạt?',
            ],
            'forms' => [
                'country' => 'Quốc gia',
                'country_placeholder' => 'Quốc gia',
                'state' => 'Bang',
                'state_placeholder' => 'Bang',
                'city' => 'Thành phố',
                'city_placeholder' => 'Thành phố',
                'shipping_rule' => 'Quy tắc vận chuyển',
                'zip_code' => 'Mã Bưu Chính',
                'zip_code_placeholder' => 'Mã Bưu Chính',
                'adjustment_price' => 'Giá điều chỉnh',
                'adjustment_price_placeholder' => 'Giá điều chỉnh',
                'is_enabled' => 'Được kích hoạt?',
                'no_shipping_rule' => 'Không có quy tắc vận chuyển',
                'adjustment_price_helper' => 'Để trừ vào giá, chỉ cần sử dụng số âm. ví dụ. -10',
            ],
            'bulk-import' => [
                'menu' => 'Nhập số lượng lớn Mục quy tắc vận chuyển',
                'greater_than_or_equal' => 'Only numbers or decimals are accepted and greater than or equal to :min.',
                'less_than_or_equal' => 'Only numbers or decimals are accepted and less than or equal to :max.',
                'between' => 'Only numbers or decimals are accepted and between :min and :max.',
                'overwrite' => 'Ghi đè',
                'add_new' => 'Thêm mới',
                'skip' => 'Nhảy',
            ],
        ],
        'select_type' => 'Lựa chọn đối tượng',
        'cannot_create_rule_type_for_this_location' => 'Không thể tạo loại quy tắc ":type" ở vị trí này!',
    ],
    'empty_shipping_options' => [
        'title' => 'Không có tùy chọn vận chuyển',
        'subtitle' => 'Nhấp vào thêm quốc gia từ phía bên trái để thêm các tùy chọn vận chuyển mới.',
    ],
    'shipping_based_on_location_instruction' => 'Nếu bạn muốn đặt phí vận chuyển dựa trên vị trí, bạn cần bật ":link_text" trong Cài đặt -> Thanh toán và nhập dữ liệu vị trí trong Công cụ -> Nhập/Xuất dữ liệu.',
    'shipping_based_on_zip_code_instruction' => 'Nếu bạn muốn đặt phí vận chuyển dựa trên mã zip, bạn cần bật ":link_text" trong Cài đặt -> Thanh toán và đặt mã zip cho địa chỉ cửa hàng.',
    'shipping_label' => [
        'name' => 'Nhãn vận chuyển',
        'print' => 'In',
        'print_shipping_label' => 'in nhãn vận chuyển',
        'sender' => 'Người gửi',
        'order_date' => 'Ngày đặt hàng',
        'scan_qr_code' => 'Quét mã QR để theo dõi lô hàng của bạn',
    ],
    'customer_confirmed_delivery_at' => 'Customer confirmed delivery at',
];
