import cleanCodeImg from "./images/clean-code.webp";
import phpImg from "./images/php.webp";
import motekhassesNodejsImg from "./images/motekhasses-nodejs.webp";
import motekhassesNextImg from "./images/motekhasses-next.webp";
import miniProjectPytonImg from "./images/mini-project-pyton.webp";
import dashboardImg from "./images/dashboard-herfeee.webp";
import afzooneMororGarImg from "./images/afzoone-mororgar.webp";
import robotTelegramImg from "./images/robot-telegram.webp";
import jangoImg from "./images/motekhasses-jango.webp";
import masterFreeLanceImg from "./images/master-freelance.webp";
import deeoloyImg from "./images/deeploy.webp";
import liveVierMasterImg from "./images/live-vier-master.webp";
import articleImg1 from "./images/aticle-class-in-js.webp";
import articleImg2 from "./images/article-boolean-in-python.webp";
import articleImg3 from "./images/article-error-in-python.webp";
import articleImg4 from "./images/article-alert-in-js.webp";

const frontendSubMenu = [
  { label: "آموزش HTML", link: "" },
  { label: "آموزش Css", link: "" },
  { label: "آموزش Flex Box", link: "" },
  { label: " Css Grid", link: "" },
  { label: "مینی پروژه های تخصصی با Css", link: "" },
  { label: "آموزش Tailwind Css", link: "" },
  { label: "آموزش اصولی طراحی قالب", link: "" },
  { label: "آموزش بوت استرپ", link: "" },
  { label: "آموزش جاوا اسکریپت", link: "" },
  { label: "پروژه های تخصصی با JS", link: "" },
  { label: "آموزش جامع ریکت جی اس", link: "" },
  { label: "آموزش ویو جی اس", link: "" },
  { label: "آموزش وی اس کد - Vs Code", link: "" },
];

const securitySubMenu = [
  { label: "نقشه راه ورود به دنیای هک و امنیت", link: "" },
  { label: "شبکه با گرایش امنیت", link: "" },
  { label: "لینوکس با گرایش امنیت", link: "" },
  { label: "آموزش هکر قانونمند - CEH V11", link: "" },
  { label: "آموزش کالی لینوکس", link: "" },
  { label: "آموزش پایتون سیاه", link: "" },
  { label: "آموزش Burb Suite", link: "" },
  { label: "آموزش جاوا اسکریپت سیاه", link: "" },
];

const articleSubMenu = [
  { label: "اچ تی ام ال", link: "" },
  { label: "بوت استرپ", link: "" },
  { label: "پروژه های برنامه نویسی", link: "" },
  { label: "تست نفوذ و امنیت وب", link: "" },
  { label: "جی کوئری", link: "" },
  { label: "ریکت جی اس", link: "" },
  { label: "سی اس اس", link: "" },
  { label: "شروع برنامه نویسی", link: "" },
  { label: "طراحی سایت", link: "" },
  { label: "ویو جی اس", link: "" },
];

const pythonSubMenu = [
  { label: "دوره آموزش پایتون", link: "" },
  { label: "پروژه های کاربردی با پایتون", link: "" },
  { label: "بهینه نویسی کد ها در پایتون", link: "" },
  { label: "متخصص جنگو", link: "" },
  { label: "مصور سازی داده با پایتون", link: "" },
];

const latestCoursesData = [
  {
    id: 1,
    tag1: "ارتقای مهارت",
    title: "Clean Code برای برنامه نویسان JS",
    desc: "فرق بین یه برنامه نویس تازه کار و حرفه ای نوع دیدگاه و طرز کدنویسیشونه. برنامه نویس...",
    name: "محمد امین سعیدی راد",
    time: "02:21",
    price: 1_100_000,
    member: 234,
    image: cleanCodeImg,
    link: "/",
    type: "",
  },
  {
    id: 2,
    tag1: "بک اند",
    tag2: "پی اچ پی",
    title: "پروژه های کاربردی با PHP",
    desc: '"مینی پروژه‌های کاربری با PHP" یه دوره آموزشی گام به گام هست که برای توسعه‌دهندگان وب،',
    name: "معین باغشیخی",
    time: "09:05",
    price: 470_000,
    member: 6941,
    image: phpImg,
    type: "",
    link: "",
  },
  {
    id: 3,
    tag1: "بک اند",
    title: "آموزش حرفه ای NodeJS بدون پیش نیاز",
    desc: "الان و امروز کمتر کسی هست که از بازار کار داغ نود جی اس با خبر نباشه و یکی از…",
    name: "محمد امین سعیدی راد",
    time: "62:00",
    price: 4_350_000,
    member: 425,
    image: motekhassesNodejsImg,
    type: "",
    link: "",
  },
  {
    id: 4,
    tag1: "فرانت اند",
    title: "آموزش Next.js بصورت پروژه محور",
    desc: "نکست یه فریمورک مبتنی بر ری‌اکت هست که امروزه تو بازار کار یکی از مهم‌ترین تکنولوژی‌ها...",
    name: "محمد امین سعیدی راد",
    time: "32:04",
    price: 2_100_000,
    member: 1369,
    image: motekhassesNextImg,
    type: "frontend",
    link: "",
  },
  {
    id: 5,
    tag1: "پایتون",
    title: "پروژه های کاربردی با پایتون",
    desc: "قبل از اینکه بخواین این دوره رو ببینید اگر دوره آموزش پایتون رو ندیدین حتما دوره رو ببینید",
    name: "رضا دولتی",
    time: "15:17",
    price: 990_000,
    member: 1318,
    image: miniProjectPytonImg,
    type: "",
    link: "",
  },
  {
    id: 6,
    tag1: "فرانت اند",
    title: "پیاده سازی داشبورد های حرفه ای با CSS و JS",
    desc: "این دوره فرصتی فوق‌العاده برای ارتقاء مهارت‌های فرانت اند شماست. با یادگیری از جدیدترین",
    name: "مهرشاد براتی",
    time: "07:08",
    price: 620_000,
    member: 284,
    image: dashboardImg,
    type: "frontend",
    link: "",
  },
];

const popularCoursesData = [
  {
    id: 1,
    tag1: "ارتقای مهارت",
    tag2: "فرانت اند",
    title: "توسعه افزونه مرورگر با جاوااسکریپت",
    desc: "ما در این دوره، توسعه افزونه های مرورگر رو با پیاده سازی پروژه های کاربردی با دانش فرانت اند",
    name: "مهرشاد براتی",
    time: "00:00",
    price: 790_000,
    member: 58,
    image: afzooneMororGarImg,
    type: "frontend",
    pishforoush: true,
  },
  {
    id: 2,
    tag1: "بک اند",
    tag2: "پی اچ پی",
    title: "آموزش ساخت ربات تلگرام با PHP",
    desc: 'توی دوره فوق‌العاده جذاب و کاربردی "ربات تلگرام با PHP"، به دنیای عجیب و جذاب ربات نویسی...',
    name: "معین باغشیخی",
    time: "00:22",
    price: 450_000,
    member: 168,
    image: robotTelegramImg,
    type: "",
  },
  {
    id: 3,
    tag1: "بک اند",
    tag2: "پایتون",
    title: "دوره پروژه محور متخصص جنگو",
    desc: "از ویژگی های مهم دوره آموزش جنگو میتونیم به توضیح کامل مفاهیم پایه و ساختاری، کامل..",
    name: "رضا دولتی",
    time: "46:11",
    price: 3_500_000,
    member: 477,
    image: jangoImg,
    type: "",
  },
  {
    id: 4,
    tag1: "مهارت های نرم",
    title: "مستر فریلنس - هنر همکاری موفق با کارفرماها",
    desc: "موفق بودن یک وکیل به تعداد بالای پرونده هاش نیست. بلکه به تعداد کیفیت پرونده...",
    name: "قدیر یلمه",
    time: "00:00",
    price: 7_100_000,
    member: 424,
    image: masterFreeLanceImg,
    type: "",
  },
  {
    id: 5,
    tag1: "ارتقای مهارت",
    title: "زیر و بَم و منطق دیپلوی برای برنامه نویسان JS",
    desc: "تو هر فیلدی فعالیت بکنی برای پرزنت خودت تو بازار کار و نمایش نمونه کارات نیاز به دپلوی",
    name: "محمد امین سعیدی راد",
    time: "00:19",
    price: 700_000,
    member: 221,
    image: deeoloyImg,
    type: "",
  },
  {
    id: 6,
    tag1: "بک اند",
    tag2: "پی اچ پی",
    title: "دوره پروژه محور لایووایر (Livewire Master)",
    desc: "دوره لایووایر مستر (Livewire Master) یک دوره‌ی تمام عیار برای فول‌استک فریمورکِ لایووایر است که هدف آن آموزش قدم به…",
    name: "آرمین هوشمند",
    time: "00:21",
    price: 699_000,
    member: 24,
    image: liveVierMasterImg,
    type: "",
  },
];

const indexArticlesSectionDatas = [
  {
    id: 1,
    title: "آموزش boolean در پایتون",
    desc: "مقادیر boolean در پایتون یعنی True و False، واقعاً جذاب هستند! آن‌ها مانند پلیس و دزد هستند که به برنامه‌نویسان کمک می‌کنند تا جهان منطقی خود را بسازند. این دو…",
    teacher: "شقایق ستیه نیا",
    date: "1402/11/16",
    image: articleImg2,
  },

  {
    id: 2,
    title: "آموزش دستور alert در جاوا اسکریپت",
    desc: "هنگامی‌که از برخی از وب‌سایت‌ها بازدید می‌کنیم پاپ‌آپ‌ها یا پنجره‌های بازشویی در صفحه ظاهر می‌شوند و حاوی پیغامی یا تبلیغی برای ما هستند. این جعبه‌های هشدار (Message box...",
    teacher: "کامل بهرامی",
    date: "1402/11/14",
    image: articleImg4,
  },

  {
    id: 3,
    title: "آموزش مدیریت خطا در پایتون",
    desc: "در مسیر جادویی آموزش برنامه‌نویسی پایتون، مسائلی چون خطاها  و استثناها همواره ما را دچار چالش‌های جدید می‌کند. اگر شما هم به دنبال راهکارهایی هستید که بتوانید مدیریت...",
    teacher: "شقایق ستیه نیا",
    date: "1402/11/11",
    image: articleImg3,
  },

  {
    id: 4,
    title: "آموزش Class در جاوا اسکریپت",
    desc: "کلاس در جاوا اسکریپت، مانند دستورالعملی برای ساختن اشیا است. در اصل کلاس به کامپیوتر یا مرورگر می‌گوید که هر شی باید چه ویژگی‌هایی داشته باشد و بتواند چه‌کاری انجام…",
    teacher: "کامل بهرامی",
    date: "1402/11/09",
    image: articleImg1,
  },
];

const sidebarData = [
  {
    id: 1,
    title: "فرانت اند",
    children: [
      { title: "آموزش HTML", path: "" },
      { title: "آموزش CSS", path: "" },
      { title: "آموزش FlexBox", path: "" },
      { title: "آموزش CSS Grid", path: "" },
      { title: "مینی پروژه های تخصصی با Css", path: "" },
      { title: "آموزش Tailwind CSS", path: "" },
      { title: "آموزش اصولی طراحی قالب", path: "" },
      { title: "آموزش بوت استرپ", path: "" },
      { title: "آموزش جاوااسکریپت", path: "" },
      { title: "پروژه های تخصصی با JS", path: "" },
      { title: "آموزش جامع ری اکت ReactJS", path: "" },
      { title: "آموزش ویو جی اس", path: "" },
      { title: "آموزش وی اس کد - Vscode", path: "" },
    ],
  },
  {
    id: 2,
    title: "امنیت",
    children: [
      { title: "نقشه راه ورود به دنیای هک و امنیت", path: "" },
      { title: "شبکه با گرایش امنیت", path: "" },
      { title: "لینوکس با گرایش امنیت", path: "" },
      { title: "آموزش هکر قانونمند - CEH VII", path: "" },
      { title: "آموزش کالی لینوکس", path: "" },
      { title: "آموزش پایتون سیاه", path: "" },
      { title: "آموزش Burb Suite", path: "" },
      { title: "آموزش جاوااسکریپت سیاه", path: "" },
    ],
  },
  {
    id: 3,
    title: "پایتون",
    children: [
      { title: "دوره آموزش پایتون", path: "" },
      { title: "پروژه های کاربردی با پایتون", path: "" },
      { title: "بهینه نویسی کد ها در پایتون", path: "" },
      { title: "متخصص جنگو", path: "/" },
      { title: "مصور سازی داده با پایتون", path: "" },
    ],
  },
  {
    id: 4,
    title: "پی اچ پی",
    children: [
      { title: "ربات تلگرام با PHP", path: "" },
      { title: "پروژه های کاربردی با PHP", path: "" },
    ],
  },
  {
    id: 5,
    title: "ارتقای مهارت ها",
    children: [
      { title: "الگوریتم و ساختمان داده", path: "" },
      { title: "آموزش websocket", path: "" },
      { title: "گیت و گیت هاب", path: "" },
      { title: "آموزش GraphQL", path: "" },
      { title: "توسعه کتابخانه با JS", path: "" },
      { title: "افزونه نویسی با JS", path: "" },
      { title: "Clean Code برای JS", path: "" },
      { title: "دیپلوی پروژه های JS", path: "" },
      { title: "دوره Mern Stack", path: "" },
      { title: "آموزش رجکس (regex)", path: "" },
      { title: "NPM برای جاوااسکریپت کارها", path: "" },
      { title: "آموزش کاربردی Vscode", path: "" },
    ],
  },
  {
    id: 6,
    title: "مقالات",
    children: [
      { title: "اچ تی ام ال", path: "" },
      { title: "بوت استرپ", path: "" },
      { title: "پروژه های برنامه نویسی", path: "" },
      { title: "تست نفوذ و امنیت وب", path: "" },
      { title: "جی کوئری", path: "" },
      { title: "ری اکت جی اس", path: "" },
      { title: "سی اس اس", path: "" },
      { title: "شروع برنامه نویسی", path: "" },
      { title: "طراحی سایت", path: "" },
      { title: "ویو جی اس", path: "" },
    ],
  },
];

export {
  frontendSubMenu,
  securitySubMenu,
  articleSubMenu,
  pythonSubMenu,
  latestCoursesData,
  popularCoursesData,
  indexArticlesSectionDatas,
  sidebarData,
};
