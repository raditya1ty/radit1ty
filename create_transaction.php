<?php
// Set your Merchant Server Key
$serverKey = 'YOUR_MIDTRANS_SERVER_KEY'; // Ganti dengan Server Key Anda
$apiUrl = 'https://api.midtrans.com/v2/charge'; // API URL Midtrans

// Ambil data dari POST
$input = json_decode(file_get_contents('php://input'), true);
$username = $input['username'];
$diamond = $input['diamond'];
$payment = $input['payment'];

// Tentukan harga berdasarkan jumlah Diamond
$price = 0;
switch ($diamond) {
    case '100':
        $price = 15000;
        break;
    case '200':
        $price = 30000;
        break;
    case '500':
        $price = 75000;
        break;
    case '1000':
        $price = 150000;
        break;
}

// Buat data transaksi
$transactionData = [
    'payment_type' => 'gopay', // Atau sesuaikan dengan payment method
    'transaction_details' => [
        'order_id' => uniqid('order_'),
        'gross_amount' => $price
    ],
    'customer_details' => [
        'first_name' => $username,
        'email' => 'tiktok3114t@gmail.com', // Ganti dengan email
        'phone' => '082138555015' // Ganti dengan nomor telepon
    ]
];

// Encode data ke JSON
$transactionDataJson = json_encode($transactionData);

// Setup cURL untuk melakukan request ke API Midtrans
$ch = curl_init($apiUrl);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Basic ' . base64_encode($serverKey . ':')
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $transactionDataJson);

// Eksekusi cURL dan ambil respons
$response = curl_exec($ch);
curl_close($ch);

// Parsing respons dari Midtrans
$responseData = json_decode($response, true);

// Kirimkan snap_token ke frontend
if (isset($responseData['snap_token'])) {
    echo json_encode([
        'status' => 'success',
        'snap_token' => $responseData['snap_token']
    ]);
} else {
    echo json_encode(['status' => 'error']);
}
?>
