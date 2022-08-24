# fairprice-label-validation
## Tentang
Tugas Week 10 Fazztrack <br>
Validasi Label Pada Setiap Produk di kategori PWP pada website fairprice.com.sg<br>
Menggunakan Cypress 10, Gherkin cucumber BDD,dan PageObject 
<br>
Terdapat Dua Scenario Setiap Produk Memiliki Label PWP dan invalid Scenario Setiap Produk Memiliki Label PHP

## Dokumentasi
* Gambar Tes Scenario Valid <br>
![image](https://user-images.githubusercontent.com/29125099/186329704-05a155a5-2fbe-49f4-984f-63190ef6996e.png)
* Gambar Tes Scenario Invalid <br>
![image](https://user-images.githubusercontent.com/29125099/186329818-30d2ac8b-a549-4f6a-bf80-4bc7c0ea4a3f.png)
* Video Tes Keseluruhan <br>


https://user-images.githubusercontent.com/29125099/186330136-89002e7a-3326-4541-afb5-426368c7c7ec.mp4



## Instalasi
1. Clone Repository
```sh
git clone https://github.com/An-Ra/fairprice-label-validation.git
```
2. Install NPM Packages
```sh
npm install
```
## Pengunaan
* Untuk menjalankan semua case
```sh
npm test
```
* Untuk Menjalankan Valid Case
```sh
npm test -- -e TAGS=@LabelPWP_1
```
* Untuk Menjalankan Invalid Case
```sh
npm test -- -e TAGS=@LabelPWP_2
```
