/* DATA DEFAULT WEBSITE - file ini ditimpa oleh hasil "Ekspor data.js" dari mode Admin */
(function(){
const sd=(s,w=900,h=650)=>`https://picsum.photos/seed/${s}/${w}/${h}`;
const wali=(g,n)=>({name:g+" Wali Kelas "+n,bio:"Wali kelas yang membimbing santri dalam akademik dan akhlak. Edit profil ini melalui mode Admin.",photo:""});
const kelas=p=>({
putra:[1,2,3].map(n=>({name:"Kelas "+n+" Putra",jumlah:40,wali:wali("Ustadz",p+" "+n)})),
putri:[1,2,3].map(n=>({name:"Kelas "+n+" Putri",jumlah:40,wali:wali("Ustadzah",p+" "+n)}))});
const people=(t,n)=>Array.from({length:n},(_,i)=>({name:`${t} Nama ${i+1}`,role:"Mata Pelajaran",photo:""}));
const gal=(p,caps)=>caps.map((c,i)=>({src:sd(p+i),cap:c}));
window.DEFAULT_DATA={
site:{name:"Pondok Pesantren Daarul Mughni Al Maaliki 3",tagline:"Mencetak generasi berakhlak mulia, berilmu, dan berkhidmat untuk agama, bangsa, dan masyarakat.",address:"Cijeruk, Bogor, Jawa Barat",phone:"0822550505",logo:"",heroBg:sd("pesantren-hero",1800,1000),quoteBg:sd("pesantren-quote",1800,900),map:"Cijeruk, Bogor"},
about:{title:"Tentang Pesantren",text:"Pondok Pesantren Daarul Mughni Al Maaliki 3 berlokasi di Cijeruk, Bogor. Kami menyelenggarakan pendidikan Madrasah Tsanawiyah (MTs) dan Madrasah Aliyah (MA) yang memadukan ilmu agama dan ilmu umum dalam lingkungan asrama yang asri, tenang, dan kondusif. Dengan bimbingan para ustadz dan ustadzah yang berdedikasi, kami berikhtiar membentuk santri yang beriman, berakhlak, mandiri, dan bermanfaat bagi sesama."},
words:{text:"Pesantren bukan sekadar tempat belajar, tetapi rumah yang menempa jiwa, membentuk akhlak, dan menyalakan cahaya ilmu untuk bekal dunia dan akhirat.",by:"Keluarga Besar Daarul Mughni Al Maaliki 3"},
panca:[
{title:"Berakhlakul Karimah",desc:"Menanamkan budi pekerti luhur, adab, dan sopan santun dengan meneladani Rasulullah ﷺ dalam kehidupan sehari-hari."},
{title:"Keikhlasan",desc:"Segala amal dan pengabdian dilakukan semata-mata karena Allah, tanpa pamrih dan tanpa paksaan."},
{title:"Kesederhanaan",desc:"Hidup sederhana, tidak berlebihan, dan penuh rasa syukur. Sederhana bukan berarti kekurangan."},
{title:"Keilmuan",desc:"Semangat menuntut ilmu agama dan umum secara mendalam sebagai bekal dunia dan akhirat."},
{title:"Berkhidmat",desc:"Mengabdi kepada agama, pesantren, masyarakat, dan bangsa dengan sepenuh hati."}],
founder:{name:"Kyai Mustopa Mughni, MA",role:"Pendiri Pesantren",photo:"",bio:"Beliau adalah pendiri Pondok Pesantren Daarul Mughni Al Maaliki 3 yang berkhidmat dalam dunia pendidikan Islam. Dengan keikhlasan dan keteladanan, beliau membimbing para santri menjadi generasi yang berilmu dan berakhlak mulia."},
schools:[{name:"MTs",full:"Madrasah Tsanawiyah",...kelas("MTs")},{name:"MA",full:"Madrasah Aliyah",...kelas("MA")}],
env:gal("lingkungan",["Gedung Pesantren","Masjid Pesantren","Asrama Santri","Halaman & Taman","Ruang Kelas","Pemandangan Sekitar"]),
act:gal("kegiatan",["Kajian Kitab","Muhadharah","Pengajian Bersama","Peringatan Hari Besar","Gotong Royong","Santri Berprestasi"]),
eks:gal("eskul",["Pramuka","Hadroh & Marawis","Pencak Silat","Olahraga","Kaligrafi","Pidato 3 Bahasa"]),
ustadz:people("Ustadz",20),
ustadzah:people("Ustadzah",20),
video:"",
social:{facebook:"https://www.facebook.com/share/1DjZESp5fZ/",tiktok:"https://www.tiktok.com/@daarulmughni3.official?_r=1&_t=ZS-9B71lB3KH9p/",instagram:"https://www.instagram.com/daarulmughni3.official?exln=eHdocnB5OTljMDZw/"},
ppdb:{url:"https://linkfly.to/81103l3fQ9s",title:"Penerimaan Peserta Didik Baru (PPDB) PPDM3",text:"Pendaftaran santri baru MTs dan MA Pondok Pesantren Daarul Mughni Al Maaliki 3 telah dibuka. Daftarkan putra-putri Anda melalui tautan resmi PPDB PPDM3 di bawah ini."},
pass:""
};
})();
