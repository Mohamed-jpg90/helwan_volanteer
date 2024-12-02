
var cart_div = document.querySelector(".carts_products div");
let news = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
    news.classList.add("loaded");
});



let head = document.querySelector('#data_head')
let srolling = 0

function scrool() {
    let isScrollBottom = srolling < window.scrollY
    if (isScrollBottom) {
        head.classList.add("hide")
    }
    else {
        head.classList.remove("hide")
    }
    srolling = window.scrollY;
}

window.addEventListener("scroll", function () {
    // if (window.innerWidth <= 985) {
    //     return 0
    // }
    if (window.scrollY >= 50) {
        head.classList.add("active");
        scrool()
    } else {

        head.classList.remove("active")
    }
});




////////////////////////////////////////////////////////////////////////////

let allexplors = document.querySelector('.cotent_of_sec2');

let explors = [
    {
        id: 1,
        Image_class: "image_sec2_1",
        heder: "مؤتمر WUF12 العالمي",
        pragraph: "تستضيف جمهورية مصر العربية المنتدى الحضري العالمي في نسخته الثانية عشر والذي يضم وفود من أكثر من ١٨٢ دولة حول العالم.",
        show_more: "https://www.facebook.com/share/p/1BPEa4qwUr/"
    },
    {
        id: 2,
        Image_class: "image_sec2_2",
        heder: " ورشة عمل بمركز التميز       ",
        pragraph: "متطوعين جامعة حلوان يشاركون في ورشة عمل بمركز التميز لخدمة الافراد ذوي الاعاقه بالجامعه",
        show_more: "https://www.facebook.com/share/p/1DGaJ2NGAv/"
    },
    {
        id: 3,
        Image_class: "image_sec2_3",
        heder: "كساء فطر 2023",
        pragraph: "متطوعين جامعة حلوان حبت تختم شهر رمضان بالمشاركة فى عمل خيرى هو الاضخم فى شهر رمضان كساء فطر 2023",
        show_more: "https://www.facebook.com/share/p/18ReKvWJMr/"
    },
    {
        id: 4,
        Image_class: "image_sec2_4",
        heder: "العزومة - El 3ozouma ",
        pragraph: "قام متطوعين جامعه حلوان بمشاركة Egyptian Food Bank   في فاعليه باص العزومة - El 3ozouma  لتوزيع كراتين رمضان للمستحقين",
        show_more: "https://www.facebook.com/share/p/14uGvWoZra/"
    },
    {
        id: 5,
        Image_class: "image_sec2_5",
        heder: "زياره جمعية الطريق الي الفردوس",
        pragraph: "شارك طلاب الجامعه في هذه الزياره متمثلين في متطوعين جامعة حلوان و تم توزيع الهدايا المختلفه من ملابس و احذيه و اللعب علي الاطفال",
        show_more: "https://www.facebook.com/share/p/1JvZirfJy6/"
    },
    {
        id: 6,
        Image_class: "image_sec2_6",
        heder: "زيارة مؤسسة مستشفى سرطان الاطفال 57357",
        pragraph: "تمت زيارة مؤسسة مستشفى سرطان الاطفال 57357  لنشر روح  البهجة والسرور علي اطفالنا مرضي السرطان",
        show_more: "https://www.facebook.com/share/p/15HqiX2QpT/"
    },

]

function dimond(explors) {
    let y = explors.map((items) => {

        return `
  <div class="col-10 col-md-4  mx-auto explor" data-aos="fade-up" data-aos-once="true"  data-aos-duration="1500" > 
    <div class="${items.Image_class} image_hover ">
      
    </div>
    <br>
    <div class="text_sec2">
      <h2> ${items.heder} </h2>
      <br>
      <p> ${items.pragraph} </p>
      <br>
        <div data-aos="fade-down"  data-aos-duration="1500" data-aos-delay="100" data-aos-once="true" >
            <a href="${items.show_more}" class="buten_volanteer max_button" >معرفه المزيد &nbsp; <i class="fa-solid fa-arrow-left"></i></a>

        </div>
     
    </div>

  
  </div>


`

    }
    ).join(' ')
    allexplors.innerHTML = y


} dimond(explors);