var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

var html = $('html')

var titleWeb = $('.title-web')
var sidebarListTwo = $('.sidebar-list-two')
var sidebarListTwoWrap = $('.sidebar-list-two__wrap')
var scrollSidebar = $('.scroll-sidebar')

var sreach = $('.sreach-input')
var btnDeleteData = $('.delete-data-input')

var dayUpdate = $('.day-update')
var nameSingerOfAlbum = $('.name-singers-ablum')

var listSong = $('.list-song')

var wrapArtistCard = $('.wrap-card-artist')

var wrapPlayList = $('.wrap-card-playlist')

var wrapCardVpop = $('.wrap-card-vpop')

var audio = $('#audio')


var iconPlayAlbum = $('.icon-play-album')

var thumbail = $('.thumbail')

var onPlay = $('.on-play')
var onPause = $('.on-pause')

var sortSongbtn = $('.wrap-sort')

var sortTypeDefault = $('.sort-type--default')
var sortTypeNameSong = $('.sort-type--name-song')
var sortTypeNameSinger = $('.sort-type--singer')
var sorTypeNameAlbum = $('.sort-type--album')

var listSort = $('.list-sort')
var playerAlbumCurrent = $('.player-album-current')
var playerControlsSong = $('.player-controls__song')
var wrapProgress = $('.wrap-input-progress')
var progress = $('.progress')
var progressControllSong = $('.progress-controll-song')
var slider = $('.slider')

var totalTimeSong = $('.total-time-song')
var timeSongRun = $('.time-song-run')

var albumCurrentInfo = $('.player-album-current__info')

var featureVolume = $('.feature--volume')
var volumeControl = $('.volume-control')
var btnNext = $('.btn-next')
var btnPrew = $('.btn-prew')

// Xử lý thanh scroll sidebar

var handlerScrollSidebar = {
    sidebarlist: function(){
        sidebarListTwoWrap.onscroll = function(){
            var newHeight = Math.floor(sidebarListTwo.offsetHeight - scrollSidebar.offsetHeight)
            var scrollTop = sidebarListTwoWrap.scrollTop
            sidebarListTwoWrap.classList.add('is-mask')
            if(scrollTop < newHeight){
                scrollSidebar.style.transform = `translateY(${scrollTop}px)`
            }else{
                scrollSidebar.style.transform = `translateY(${newHeight - 1}px)`
            }
            if(scrollTop == 0){
                sidebarListTwoWrap.classList.remove('is-mask')
            }
            
        }
    },

    start: function(){
        this.sidebarlist()
    }
}


// xử lý thanh sreach
var headerSreach = {
    btnDeleteData: function(){
        _this = this
        sreach.oninput = function(){
            if(sreach.value){
                btnDeleteData.style.display = 'block'
                console.log(Boolean(sreach.value))
            }else{
                btnDeleteData.style.display = 'none'
                console.log(Boolean(sreach.value))
            }
        }
        btnDeleteData.onclick = function(){
            sreach.value = ''
            btnDeleteData.style.display = 'none'
            sreach.focus()
        }

        
    },

    start: function(){
        this.btnDeleteData()
    }
}

// Xử lý web

var handlerCodeWeb = {
    currentIndex : 0,
    oldIndex : 0,
    isAudio : true,
    song : [
        {
            name : 'Đã Sai từ lúc đầu',
            singerOne: 'Bùi Anh Tuấn',
            singerTwo: 'Trung Quân',
            singerThree: '',
            singers: [
                'Bùi Anh Tuấn',
                'Trung Quân'
            ],
            album: 'Đã Sai từ lúc đầu ( live concert HOA )',
            image: './music/img/Sai từ khi bắt đầu.webp',
            index: 0,
            mv: false,
            link: './music/song/X2Download.app - ĐÃ SAI TỪ LÚC ĐẦU _ Trung Quân - Bùi Anh Tuấn _đọ giọng_ cực đỉnh trong Live Concert HOA (320 kbps).mp3',
        },
        {
            name : 'Yêu không hối tiếc',
            singerOne: 'Huỳnh Tú',
            singerTwo: '',
            singerThree: '',
            singers: [
                'Huỳnh Tú'
            ],
            album: 'Yêu không hối tiếc',
            image: './music/img/Yêu không hối tiếc.webp',
            index: 1,
            mv: false,
            link: './music/song/X2Download.app - Huỳnh Tú _ Yêu Không Hối Tiếc _ Remake (320 kbps).mp3',
        },
        {
            name : 'Buồn thì cứ khóc đi',
            singerOne: 'Thùy Chi',
            singerTwo: '',
            singerThree: '',
            singers: [
                'Thùy Chi'
            ],
            album: 'Thong dong mà hát',
            image: './music/img/Buồn thì cứ khóc đi.webp',
            index: 2,
            mv: false,
            link: './music/song/X2Download.app - Buồn Thì Cứ Khóc Đi _ Thùy Chi _ Thong Dong Mà Hát (320 kbps).mp3',
        },
        {
            name : 'Tình nào không như tình đầu',
            singerOne: 'Trung Quân',
            singerTwo: '',
            singerThree: '',
            singers: [
                'Trung Quân'
            ],
            album: 'Tình nào không như tình đầu',
            image: './music/img/Tình nào không như tình đầu.webp',
            index: 3,
            mv: true,
            link: './music/song/X2Download.app - TÌNH NÀO KHÔNG NHƯ TÌNH ĐẦU _ TRUNG QUÂN _ Official Lyrics Video (128 kbps).mp3',
        },
        {
            name : 'Dừng lại vẫn kịp lúc',
            singerOne: 'Trung Quân',
            singerTwo: '',
            singerThree: '',
            singers: [
                'Trung Quân'
            ],
            album: 'Dừng lại vẫn kịp lúc',
            image: './music/img/Dừng lại vẫn kịp lúc.webp',
            index: 4,
            mv: true,
            link: './music/song/X2Download.app - DỪNG LẠI VẪN KỊP LÚC _ TRUNG QUÂN x VƯƠNG ANH TÚ _ Lyrics Video (320 kbps).mp3',
        },
        {
            name : 'Ngày chưa giông bão ( Người bất tử OST )',
            singerOne: 'Bùi Lan Hương',
            singerTwo: '',
            singerThree: '',
            singers: [
                'Bùi Lan Hương'
            ],
            album: 'Người bất tử OST',
            image: './music/img/Ngày chưa giông bão.webp',
            index: 5,
            mv: true,
            link: './music/song/X2Download.app - Ngày Chưa Giông Bão (OST Người Bất Tử) _ Bùi Lan Hương [ Official MV ] (128 kbps).mp3',
        },
        {
            name : 'Em bỏ hút thuốc chưa - người yêu cũ nhắn tin hỏi nhưng bích phương không muốn trả lời',
            singerOne: 'Bích Phương',
            singerTwo: '',
            singerThree: '',
            singers: [
                'Bích Phương'
            ],
            album: 'Tâm trạng tan hơi chậm một chút',
            image: './music/img/Em bỏ thuốc chưa.webp',
            index: 6,
            mv: false,
            link: './music/song/X2Download.app - em bỏ hút thuốc chưa - người yêu cũ nhắn tin hỏi nhưng bích phương không muốn trả lời (320 kbps).mp3',
        },
        {
            name : 'Nói hết lòng mình',
            singerOne: 'Liz Kim Cương',
            singerTwo: '',
            singerThree: '',
            singers: [
                'Liz Kim Cương'
            ],
            album: 'Nói hết lòng mình',
            image: './music/img/Nói hết lòng mình.webp',
            index: 7,
            mv: false,
            link: './music/song/X2Download.app - NÓI HẾT LÒNG MÌNH _ LIZ KIM CƯƠNG _ OFFICIAL MV (128 kbps).mp3',
        },
        {
            name : 'Lời tạm biệt chưa nói',
            singerOne: 'Grey D',
            singerTwo: 'Orange',
            singerThree: '',
            singers: [
                'Grey D',
                'Orange'
            ],
            album: 'Hương mùa hè',
            image: './music/img/lời tạm biệt chưa nói.webp',
            index: 8,
            mv: false,
            link: './music/song/X2Download.app - lời tạm biệt chưa nói - GREY D & ORANGE, Kai Đinh.mp3',
        },
        {
            name : 'Forget Me Now',
            singerOne: 'Fishy',
            singerTwo: 'Trí Dũng',
            singerThree: '',
            singers: [
                'Fishy',
                'Trí Dũng'
            ],
            album: 'Forget Me Now',
            image: './music/img/forget me now.webp',
            index: 9,
            mv: false,
            link: './music/song/X2Download.app - fishy & Trí Dũng - Forget Me Now (128 kbps).mp3',
        },
        {
            name : 'Có hẹn với hạnh phúc',
            singerOne: 'Ái Phương',
            singerTwo: '',
            singerThree: '',
            singers: [
                'Ái Phương'
            ],
            album: 'Có hẹn với hạnh phúc',
            image: './music/img/Có hẹn với hạnh phúc.webp',
            index: 10,
            mv: false,
            link: './music/song/X2Download.app - CÓ HẸN VỚI HẠNH PHÚC _ The Originals_ The Ái Phương Show (128 kbps).mp3',
        },
        {
            name : 'Hoang Mang',
            singerOne: 'Bùi Anh Tuấn',
            singerTwo: '',
            singerThree: '',
            singers: [
                'Bùi Anh Tuấn'
            ],
            album: 'Hoang Mang ( Cover )',
            image: './music/img/Hoang Mang.webp',
            index: 11,
            mv: false,
            link: './music/song/X2Download.app - [LYRICS] HOANG MANG - BÙI ANH TUẤN (128 kbps).mp3',
        },
        {
            name : 'lạnh lẽo',
            singerOne: 'Ái Phương',
            singerTwo: 'Bùi Anh Tuấn',
            singerThree: '',
            singers: [
                'Ái Phương',
                'Bùi Anh Tuấn'
            ],
            album: 'lạnh lẽo ( Cover )',
            image: './music/img/lạnh lẽo.webp',
            index: 12,
            mv: false,
            link: './music/song/X2Download.app - Lạnh Lẽo ( Cover ) - Ái Phương ft. Bùi Anh Tuấn _ THE AI PHUONG SHOW _ Season 2 (128 kbps).mp3',
        },
        {
            name : 'Hết thương cạn nhớ',
            singerOne: 'Đức Phúc',
            singerTwo: '',
            singerThree: '',
            singers: [
                'Đức Phúc'
            ],
            album: 'Hết thương cạn nhớ',
            image: './music/img/Hết thương cạn nhớ.webp',
            index: 13,
            mv: true,
            link: './music/song/X2Download.app - HẾT THƯƠNG CẠN NHỚ - ĐỨC PHÚC _ OFFICIAL MUSIC VIDEO (128 kbps).mp3',
        },
        {
            name : 'Đã Từng',
            singerOne: 'Bùi Anh Tuấn',
            singerTwo: 'Dương Hoàng Yến',
            singerThree: '',
            album: 'Đã Từng',
            singers: [
                'Bùi Anh Tuấn',
                'Dương Hoàng Yến'
            ],
            image: './music/img/Đã Từng.webp',
            index: 14,
            mv: true,
            link: './music/song/X2Download.app - [Lyrics] Đã Từng __ Bùi Anh Tuấn Ft Dương Hoàng Yến __ Video edit by Duy (128 kbps).mp3',
        },
        {
            name : 'Thanh Xuân',
            singerOne: 'Da LAB',
            singerTwo: '',
            singerThree: '',
            singers: [
                'Da LAB'
            ],
            album: 'Thanh Xuân',
            image: './music/img/Thanh Xuân.webp',
            index: 15,
            mv: true,
            link: './music/song/X2Download.app - Thanh Xuân - Da LAB (Official MV) (128 kbps).mp3',
        },
        {
            name : 'Anh sẽ tốt mà',
            singerOne: 'Thùy Chi',
            singerTwo: 'Phạm Hồng Phước',
            singerThree: '',
            singers: [
                'Thùy Chi',
                'Phạm Hồng Phước'
            ],
            album: 'Anh sẽ tốt mà',
            image: './music/img/Anh sẽ tốt mà.webp',
            index: 16,
            mv: false,
            link: './music/song/X2Download.app - Anh Sẽ Tốt Mà _ Thùy Chi ft. Phạm Hồng Phước _ Official MV Lyric (128 kbps).mp3',
        },
        {
            name : 'Em gái mưa',
            singerOne: 'Hương Tràm',
            singerTwo: '',
            singerThree: '',
            singers: [
                'Hương Tràm'
            ],
            album: 'Em gái mưa',
            image: './music/img/Em gái mưa.webp',
            index: 17,
            mv: true,
            link: './music/song/X2Download.app - Em Gái Mưa [Lyrics] Hương Tràm (128 kbps).mp3',
        },
        {
            name : 'Túy Âm',
            singerOne: 'Xesi',
            singerTwo: 'Masew',
            singerThree: 'Nhatnguyen',
               singers: [
                'Xesi',
                'Masew',
                'Nhatnguyen'
            ],
            album: 'Túy Âm',
            image: './music/img/Tuý âm.webp',
            index: 18,
            mv: false,
            link: './music/song/X2Download.app - Túy Âm - Xesi x Masew x Nhatnguyen (128 kbps).mp3',
        },
        {
            name : 'Tháng mấy em nhớ anh',
            singerOne: 'Bùi Anh Tuấn',
            singerTwo: '',
            singerThree: '',
            singers: [
                'Bùi Anh Tuấn'
            ],
            album: 'Tháng mấy em nhớ anh ( live concert HOA )',
            image: './music/img/Tháng mấy em nhớ anh.webp',
            index: 19,
            mv: false,
            link: './music/song/X2Download.app - THÁNG MẤY EM NHỚ ANH _ Bùi Anh Tuấn _lụi tim_ khán giả trong Live Concert HOA (128 kbps).mp3',
        },
        

    ],
    
    cardSinger: [
        {
            picute: './picutre/Bui Lan Huong.webp',
            name: 'Bùi Lan Hương',
            follower: '19k QUAN TÂM',
        },
        {
            picute: './picutre/Thuy Chi.webp',
            name: 'Thùy Chi',
            follower: '102k QUAN TÂM',
        },
        {
            picute: './picutre/Trung Quaan.webp',
            name: 'Trung Quân',
            follower: '26k QUAN TÂM',
        },
        {
            picute: './picutre/Anh Tuan.webp',
            name: 'Bùi Anh Tuấn',
            follower: '11k QUAN TÂM',
        },

        {
            picute: './picutre/Huynh Tu.webp',
            name: 'Huỳnh Tú',
            follower: '21k QUAN TÂM',
        },
        {
            picute: '',
            name: 'Dương Hoàng Yến',
            follower: '186k QUAN TÂM',
        },
    ],

    cardPlaylist: [
        {
            piture: './picutre/Hương mùa hè.webp',
            namePlaylist: 'Hương mùa hè',
            singers : {
                first:'Hoàng Dũng',
                two: 'GREY D',
                three: 'Orange'
            }
        },
        {
            piture: './picutre/Nhạc liu riu.webp',
            namePlaylist: 'Nhạc liu riu',
            singers : {
                first:'Bích Phương',
                two: '',
                three: ''
            }
        },
        {
            piture: './picutre/Thích thích.webp',
            namePlaylist: 'Thích thích',
            singers : {
                first:'Phương Ly',
                two: '',
                three: ''
            }
        },
        {
            piture: './picutre/Yên.webp',
            namePlaylist: 'Yên',
            singers : {
                first:'Hoàng Dũng',
                two: '',
                three: ''
            }
        },
        {
            piture: './picutre/vote for 5.webp',
            namePlaylist: 'Vote For 5ive (live band) (Tập 5)',
            singers : {
                first:'Vote for 5',
                two: '',
                three: ''
            }
        }
    ],

    cardVPop: [
        {
            piture: './picutre/Chưa quên người yêu cũ.webp',
            nameSongVpop: 'Chưa quên người yêu cũ',
            singers : {
                first:'Hà My',
                two: '',
                three: ''
            }
        },
        {
            piture: './picutre/Tay trái chỉ trăng.webp',
            nameSongVpop: 'Tay trái chỉ trăng',
            singers : {
                first:'Dương Hoàng Yến',
                two: '',
                three: ''
            }
        },
        {
            piture: './picutre/Gieo quẻ.webp',
            nameSongVpop: 'Gieo quẻ',
            singers : {
                first:'Hoàng Thùy Linh',
                two: '',
                three: ''
            }
        },
        {
            piture: './picutre/Bên trên tầng lầu.webp',
            nameSongVpop: 'Bên trên tầng lầu',
            singers : {
                first:'Vũ Duy Tân',
                two: '',
                three: ''
            }
        },
        {
            piture: './picutre/Ngày tận thế.webp',
            nameSongVpop: 'Ngày tận thế',
            singers : {
                first:'Tóc Tiên',
                two: 'Da LAB',
                three: ''
            }
        }
    ],

    // Day update
    dayUpDate : function(){
        var date = new Date()
        var timcurrent = `<span class="">Cập nhập: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} </span>`
        dayUpdate.innerHTML = timcurrent
    },

    // Lấy ra ca sĩ có trong playlist để đưa vào info album
    singerCurrent: function(){
        var singerlist = this.song.map(function(song){
            return song.singers
        })

        var singerListFlat = singerlist.flat(Infinity)
       
        var lengthSingerList = singerListFlat.length
        var newListSinger = []
          
        for(var i = 0 ; i < lengthSingerList ; i++){
            if(newListSinger.includes(singerListFlat[i]) === false ){   
                newListSinger.push(singerListFlat[i])  
                      
            }else{

            }
        }  
        
        var singerActive = []

        for(var j = 0; j < newListSinger.length && singerActive.length < 4 ; j++){
            var randomSinger = newListSinger[Math.floor(Math.random() * newListSinger.length)]
            
           if(singerActive.includes(randomSinger) === false ){
                singerActive.push(randomSinger)
           }
        }

        var htmlcode = singerActive.map(function(s,index){
            return `
                ${index === singerActive.length -1 ? `<p>${s}</p>` : `<p>${s}</p>,`}
            `
        })

        nameSingerOfAlbum.innerHTML = htmlcode.join('')
    },

    // Render ra list nhạc
    renderCode: function(){
        _this = this
        var html = this.song.map(function(song,index){          
            return ` <div class="song">
                        <div class="info-song">
                            <i class="fa-light fa-music"></i>
                            <div class="thumbail-smail">
                                <img class ="img-song" src="${song.image}" alt="">
                                <div class="wrap-icon-play-playlist btn-play-song " data-index="${index}"  > 
                                    <img class="gif-play on-pause" src= "./picutre/icon-playing.gif">
                                    <i class="btn-play-in-playlist fas fa-play on-play"></i>
                                    <div class= "background-black"></div>
                                </div>
                            </div>
                            <div class="wrap-info">
                                <div class="name-song-wrap">
                                    <p>${song.name}</p> 
                                </div>                               
                                <div class = "wrap-singer-name">
                                    ${song.singerTwo ? `<span class="singer" >${song.singerOne}</span>,`:` <span class="singer">${song.singerOne}</span> `}
                                    ${song.singerThree ? `<span class="singer" >${song.singerTwo}</span>,`:` <span class="singer"> ${song.singerTwo}</span> `}
                                    ${song.singerThree ? `<span class="singer" > ${song.singerThree}</span>`:''}
                                </div>
                            </div>
                        </div>
                        <div class="album ">
                            <p class="album-hover">${song.album}</p>
                        </div>
                        <div class= "wrap-icon-list-song">
                            ${song.mv ? `<button id="tippy-MV" class= "setting-item icon-list-song">
                                            <i class=" fa-regular fa-clapperboard-play"></i>
                                        </button>
                                        <button id="tippy-play-with-lyric" class= "setting-item icon-list-song">
                                            <i class=" fa-light fa-microphone-stand"></i>
                                        </button>
                                        <button id="tippy-love" class= "setting-item icon-list-song">
                                            <i class=" fa-light fa-heart"></i>
                                        </button>
                                        <button id="tippy-more" class= "setting-item icon-list-song">
                                            <i class=" fa-regular fa-ellipsis"></i>
                                        </button> `
                                        :`
                                        <button id="tippy-play-with-lyric" class= "setting-item icon-list-song">
                                            <i class=" fa-light fa-microphone-stand"></i>
                                        </button>
                                        <button id="tippy-love" class= "setting-item icon-list-song">
                                            <i class=" fa-light fa-heart"></i>
                                        </button>
                                        <button id="tippy-more" class= "setting-item icon-list-song">
                                            <i class=" fa-regular fa-ellipsis"></i>
                                        </button> `
                        }  
                        </div>
                        <div class="time-song">
                            <span>05:49</span>
                        </div>
                    </div>`
        })

        listSong.innerHTML = html.join('')
       
    },
    
    // Lấy và load ra bài hát hiện tại
    getCurrentSong : function(){
        Object.defineProperty(this,'currentSong',{
            get : function(){
                return this.song[this.currentIndex]
            }
        })
    },

    loadCurrentSong: function(){
        
        _this = this
        var pictureSongCurrent = $ ('.player-album-current__picture')
        var wrapNameSongCurrent = $('.wrap-album-current__name-song')
        var nameSingerCurrent = $('.name-singer-current')
       
    
        pictureSongCurrent.innerHTML = `<img src="${this.currentSong.image}">`

        wrapNameSongCurrent.innerHTML = `<p class="player-album-current__name-song">${this.currentSong.name}</p>`
        
        let nameSongCurrent = $('.player-album-current__name-song ')
        
       
     
        if(nameSongCurrent.offsetWidth > wrapNameSongCurrent.offsetWidth){
            albumCurrentInfo.classList.add('mask-image')
            wrapNameSongCurrent.innerHTML = `<p class="player-album-current__name-song ">${this.currentSong.name}</p>
                                            <p class="player-album-current__name-song ">${this.currentSong.name}</p>`
        }else {
            albumCurrentInfo.classList.remove('mask-image')

        }
        var getSingerCurrent = this.currentSong.singers.map(function(singersInSongCurrent, i){
            return ` ${i === _this.currentSong.singers.length - 1 ? `<p>${singersInSongCurrent}</p>`: `<p>${singersInSongCurrent}</p>,`}`
        })
        
        
        this.hoverNameSong()

        
        
        nameSingerCurrent.innerHTML =  getSingerCurrent.join('')
        audio.src = this.currentSong.link


        
    },

    // Render ra tổng thời gian của từng bài hát
    RenderTimeSongs: function(){
        _this = this

        var timeSongs = $$('.time-song')

        
        function getDuration(music){
            return new Promise(function(resolve){
                music.addEventListener('loadedmetadata', function(){
                    const time = formatime(music.duration)
                    
                    resolve(time)
                })
            })
        }

        function formatime(sec_num){
      
            let hours = Math.floor(sec_num / 3600);
            let minutes = Math.floor((sec_num - hours * 3600) / 60);
            let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);
        
            hours = hours < 10 ? (hours > 0 ? '0' + hours : 0) : hours;
        
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (seconds < 10) {
                seconds = '0' + seconds;
            }
            return (hours !== 0 ? hours + ':' : '') + minutes + ':' + seconds;
        }

        async function setTimeSongs(){

            for (let i = 0; i < _this.song.length; i++){
                const music = new Audio(_this.song[i].link)
                var time = await getDuration(music)
              
                timeSongs[i].innerHTML = `<span>${time}</span>`
            }
            
           
        }

        setTimeSongs()
        
    },

    // Làm tên bài hát chạy khi quá dài
    intervalvalue : [],
    nameSongMove: function(){
        
        var wrapNameSongCurrent = $('.wrap-album-current__name-song')
        var nameSongCurrent = $('.player-album-current__name-song ')
        var widthNameSong = nameSongCurrent.offsetWidth
        var widthwrapNameSong = wrapNameSongCurrent.offsetWidth
        var averageTime = widthNameSong / 40
        var timeRepeat = averageTime * 1000 + 6900
        _this = this
       
        function textSongMove (){
            if(widthNameSong > widthwrapNameSong){
                
                var interval = setInterval(function(){
                    console.log('t')
                        Object.assign(wrapNameSongCurrent.style,{
                        transform : `translateX(-${widthNameSong}px)`,
                        transition : `transform ${averageTime}s linear 0s`  
                        })
                        },900)

                var returninterval = setInterval(function(){
                        wrapNameSongCurrent.removeAttribute('style')
                        }, timeRepeat )
               
                _this.intervalvalue.push(interval)
                _this.intervalvalue.push(returninterval)
                   
           }else{
                wrapNameSongCurrent.removeAttribute('style')
               
                _this.intervalvalue.forEach(function(i){
                    clearInterval(i)
                    
                })
            
           }
        }
        textSongMove()
       
        
    },
    // hover vào tên bài hát, nếu bài hát dài sẽ tự chạy
    hoverNameSong: function(){
        var listNameSongCurrent = $$('.player-album-current__name-song ')
        var wrapNameSongCurrent = $('.wrap-album-current__name-song')
        var nameSongCurrent = $('.player-album-current__name-song ')
        var widthNameSong = nameSongCurrent.offsetWidth
        var widthwrapNameSong = wrapNameSongCurrent.offsetWidth
        var averageTime = widthNameSong / 40
        var timeRepeat = averageTime * 1000 + 600
        _this = this
    
        var hoverInterval
        listNameSongCurrent.forEach(function(data){
            data.onmouseenter = function(){
                if(widthNameSong > widthwrapNameSong){
                }
            }

            data.onmouseleave = function(){
               if(widthNameSong > widthwrapNameSong){
               
              
                   
               }
            }
            
        })
        

    },

   
    // Phát bài hát
    playSong: function(){
        var playAudio = $$('.play-audio')
        var btnPlaySong = $$('.btn-play-song')
        var song = $$('.song')
        _this = this
        playAudio.forEach(function(playPauseBtn){
            playPauseBtn.onclick = function(){      
                if(_this.isAudio){
                    audio.play()
                    thumbail.classList.add('animate-vinyl')
                    thumbail.classList.remove('animate-vinyl-off')
                    
                    if($('.btn-play-song.active') && $('.song.active')){
                        $('.btn-play-song.active').classList.remove('active')
                        $('.song.active').classList.remove('active')
                    }
                   
                    song[_this.currentIndex].classList.add('active')
                    btnPlaySong[_this.currentIndex].classList.add('active')
                }else if(!_this.isAudio){
                    audio.pause()
                    
                }
            }
        })

        
    },

    // Nút play trên danh sách bài hát

    btnPlaySong: function(){
        var btnPlaySong = $$('.btn-play-song')
        var song = $$('.song')
        _this = this
      
        
        btnPlaySong.forEach(function(d){
            
            d.onclick = function(){
                _this.adjustmentSong()
                var dataIndex = d.getAttribute('data-index')
                if(_this.currentIndex == dataIndex && _this.isAudio){
                    audio.play()
                    thumbail.classList.add('animate-vinyl')
                    thumbail.classList.remove('animate-vinyl-off')
                 
                    _this.adjustmentSong()
                    if( $('.song.active')){
                        $('.song.active').classList.remove('active')
                    }

                    if($('.btn-play-song.active')){
                        $('.btn-play-song.active').classList.remove('active')
                        
                    }
                   
                   
                    song[_this.currentIndex].classList.add('active')
                    btnPlaySong[_this.currentIndex].classList.add('active')
                 
                }else if(_this.currentIndex == dataIndex && !_this.isAudio){
                    audio.pause()
                    _this.adjustmentSong()
                  

                }else if(_this.currentIndex != dataIndex){
                    _this.currentIndex = dataIndex
                    _this.loadCurrentSong()
                    audio.play()
                    _this.adjustmentSong()
                    
                    if( $('.song.active')){
                        $('.song.active').classList.remove('active')
                    }

                    if($('.btn-play-song.active')){
                        $('.btn-play-song.active').classList.remove('active')
                        
                    }
                   
                    song[_this.currentIndex].classList.add('active')
                    btnPlaySong[_this.currentIndex].classList.add('active')
                    
                    
                    if(_this.isAudio){
                        thumbail.classList.remove('animate-vinyl-off')
                        thumbail.classList.add('animate-vinyl')
                    }else if($('.thumbail.animate-vinyl')){
                        thumbail.classList.remove('animate-vinyl')
                        thumbail.classList.add('animate-vinyl-off')
                        setTimeout(function(){
                            thumbail.classList.remove('animate-vinyl-off')
                            thumbail.classList.add('animate-vinyl')
                        },500)
                   
                       
                    }
                }
            }
         })
    },


    // hiệu ứng khi bài hát chạy
    effectWhenSongPlay : function(){ 
        var btnPlaySong = $$('.btn-play-song')
        var playAudio = $$('.play-audio')
        var song = $$('.song')

        var iconPausePlay = $$('.icon-onplay-pause')
        console.log(iconPausePlay)
            _this = this
            audio.onplay = function(){   
                titleWeb.innerText = `${_this.currentSong.name}`
                _this.isAudio = false
                playAudio.forEach(function(btn){
                    btn.classList.add('active')
                })
                
                _this.nameSongMove()
                
                var dataOldIndex = btnPlaySong[_this.currentIndex].getAttribute('data-index')
               
                oldIndex = dataOldIndex
                
            }
      
            audio.onpause = function(){
                titleWeb.innerText = 'Zingmp3'
                _this.isAudio = true
                thumbail.classList.toggle('animate-vinyl')
                thumbail.classList.toggle('animate-vinyl-off')
                playAudio.forEach(function(btn){
                    btn.classList.remove('active')
                })

                btnPlaySong.forEach(function(data){
                    data.classList.remove('active')
                })

                _this.intervalvalue.forEach(function(e){
                    clearInterval(e)
                })
                
             
            }

            audio.ontimeupdate = function(){       
                var timeCurrentProgress = audio.currentTime / audio.duration * 100 
                var sliderRun = -6 + ( audio.currentTime / audio.duration * 100 ) * (progress.offsetWidth / 100)
                
                // Xử Lý thanh duration progress
                progress.style.background = 
                `linear-gradient(to right,#fff ${timeCurrentProgress}%,#5a5561 ${timeCurrentProgress}%)`
                
                slider.style.transform = `translate(${sliderRun}px,-3.5px)`
               
                // thời gian hiện tại của bài hát
                let timeCurrentSong  = audio.currentTime

                function formatime(datatime){
                    let hours = Math.floor(datatime / 3600)
                    let minutes = Math.floor((datatime - hours * 3600) / 60)
                    let seconds = Math.floor(datatime - hours * 3600 - minutes * 60)

                    hours = hours < 10 ? hours : (hours > 0 ? '0' + hours : hours) // 0
                    
                    if(minutes < 10){
                        minutes = '0' + minutes
                    }

                    if(seconds < 10){
                        seconds = '0' + seconds
                    }

                    return (hours !==0 ? hours + ':': '') + minutes + ':' + seconds
                }

                let time = formatime(timeCurrentSong)
                timeSongRun.innerText = time
            }

            // Tổng thời gian của bài hát
            audio.onloadedmetadata = function(){
                let totalTime = audio.duration
                function formatime(datatime){
                    let hours = Math.floor(datatime / 3600)
                    let minutes = Math.floor((datatime - hours * 3600) / 60)
                    let seconds = Math.floor(datatime - hours * 3600 - minutes * 60)

                    hours = hours < 10 ? hours : (hours > 0 ? '0' + hours : hours) // 0
                    
                    if(minutes < 10){
                        minutes = '0' + minutes
                    }

                    if(seconds < 10){
                        seconds = '0' + seconds
                    }

                    return (hours !==0 ? hours + ':': '') + minutes + ':' + seconds
                }

                let time = formatime(totalTime)
                
                totalTimeSong.innerText = time
            }
        
    },


    // Tăng giảm âm lượng
    adjustmentVolume: function(){
        var levelVolume = $('.level-volume')
        var dotAdjustVolume = $('.dot-adjust-volume')
        var volumeChange = $('.volume-change')
        
        audio.volume = 1
        
        dotAdjustVolume.style.transform = `translate(${-6 + volumeControl.offsetWidth}px,-3.5px)`

        levelVolume.onmouseover = function(){
            volumeControl.classList.add('volume-hover')
            dotAdjustVolume.classList.add('dot-volume-hover')
        }
        
        var volumeAudio = 1
        featureVolume.onclick = function(){ 
                var ariaValueNow = dotAdjustVolume.getAttribute('aria-valuenow')
           
                if(ariaValueNow == 100){
                    featureVolume.classList.add('mute')
                    audio.volume = 0
                    dotAdjustVolume.setAttribute('aria-valuenow',0)
                    console.log('e')
                }else if(ariaValueNow == 0){
                    featureVolume.classList.remove('mute')
                    audio.volume = 1
                    dotAdjustVolume.setAttribute('aria-valuenow',100)
                    console.log('v')
                   
                }else if(ariaValueNow != 0 && ariaValueNow != 100 && volumeAudio == 1){
                    featureVolume.classList.add('mute')
                    audio.volume = 0
                    volumeAudio = 0
                    console.log('i')
                }else if( ariaValueNow != 0 && ariaValueNow != 100 && volumeAudio == 0){
                    featureVolume.classList.remove('mute')
                    audio.volume = ariaValueNow / 100
                    volumeAudio = 1
                    console.log('f')

                }
                
        }
       
               
        audio.onvolumechange = function(){
            var dataVolume = audio.volume * 100
            volumeControl.style.background = 
            `linear-gradient(to right,#fff ${dataVolume}%,#5a5561 ${dataVolume}%)`
            
            var positionDot = -6 + volumeControl.offsetWidth * audio.volume
            dotAdjustVolume.style.transform = `translate(${positionDot}px,-3.5px)`
        }
        
        levelVolume.addEventListener('pointerdown', e => {
            e.preventDefault()
            levelVolume.setPointerCapture(e.pointerId)
            setVolumeLine(e)
            levelVolume.addEventListener('pointermove', setVolumeLine)
            levelVolume.addEventListener('pointerup', () => {
                levelVolume.removeEventListener('pointermove', setVolumeLine)
            })
        })

        function setVolumeLine(e){
            var rect = levelVolume.getBoundingClientRect()
            let dataOffsetX = e.offsetX
            var positionLineVolume = (dataOffsetX / rect.width) * 100
            var valueDotVolume = positionLineVolume * (rect.width / 100)
            console.log(rect.width)
            if(dataOffsetX > levelVolume.offsetWidth || dataOffsetX < 0){
                volumeControl.classList.remove('volume-hover')
                dotAdjustVolume.classList.remove('dot-volume-hover')
            }
            console.log(dataOffsetX)
           
            levelVolume.setAttribute('aria-valuenow', dataOffsetX) 

            if(positionLineVolume > 100){
                positionLineVolume = 100

            }else if(positionLineVolume < 0){
                positionLineVolume = 0
            }

            var valueVolume = positionLineVolume / 100
          

            if(valueDotVolume > levelVolume.offsetWidth){
                valueDotVolume = levelVolume.offsetWidth
            }else if(valueDotVolume < -1){
                valueDotVolume = 7
            }

            audio.volume = valueVolume
            
            volumeControl.style.background = `linear-gradient(to right,#fff ${positionLineVolume}%,#5a5561 ${positionLineVolume}%)`
            dotAdjustVolume.style.transform = `translate(${valueDotVolume - 8}px,-3.5px)`

            dotAdjustVolume.setAttribute('aria-valuenow', `${positionLineVolume}`)

            var getValueNow = dotAdjustVolume.getAttribute('aria-valuenow')

            if(getValueNow <= 0){
                getValueNow = 0
                featureVolume.classList.add('mute')
            }else if(getValueNow > 0){
                featureVolume.classList.remove('mute')

            }
            positionDot(positionLineVolume)
            
        }

        function positionDot(z){
            window.addEventListener('resize', function(){
                var newWidth = z * (volumeControl.offsetWidth / 100)
               
                    dotAdjustVolume.style.transform = `translate(${newWidth - 8}px,-3.5px)`
                
            });
        }

         function newPosition(){
             window.addEventListener('resize', function(){
                 var newWidth = levelVolume.offsetWidth
                 var ariaValueNow = dotAdjustVolume.getAttribute('aria-valuenow')
                 if(ariaValueNow == 100){
                     dotAdjustVolume.style.transform = `translate(${newWidth - 8}px,-3.5px)`
                 }
             });
         }
       
         newPosition()
       
        
    },

    // điều chỉnh thời lượng bài hát
    controllTimeSong: function(){
        wrapProgress.onmouseover = function(){
            progress.classList.add('progress-hover')
            slider.classList.add('slider-hover')
        }

        wrapProgress.addEventListener('pointerdown', e =>{
            e.preventDefault()
            
            wrapProgress.setPointerCapture(e.pointerId)
            wrapProgress.addEventListener('pointermove', setTimeLine)
            wrapProgress.addEventListener('pointerup', () => {
                wrapProgress.removeEventListener('pointermove', setTimeLine)
            })
            setTimeLine(e)
          
            
       })
       function setTimeLine(e){
            var rect = wrapProgress.getBoundingClientRect()

            let dataOffsetX = e.offsetX

            if(dataOffsetX > wrapProgress.offsetWidth){
                dataOffsetX = wrapProgress.offsetWidth
                progress.classList.remove('progress-hover')
                slider.classList.remove('slider-hover')
           
            }else if(dataOffsetX < 0){
                dataOffsetX = 0
                progress.classList.remove('progress-hover')
                slider.classList.remove('slider-hover')
            }
            
            var value = (dataOffsetX / rect.width ) *100
           
            var valueSlider = value * (rect.width / 100)
            
            if(valueSlider > wrapProgress.offsetWidth){
                valueSlider = wrapProgress.offsetWidth
            }else if(valueSlider < -6){
                valueSlider = 2
            }

            progress.style.background = `linear-gradient(to right,#fff ${value}%,#5a5561 ${value}%)`
            slider.style.transform = `translate(${valueSlider - 8}px,-3.5px)`
            
            var mediumTime = audio.duration / wrapProgress.offsetWidth
            let timesong = dataOffsetX * mediumTime
           
            audio.currentTime = timesong
            whenWindowResize(value)
       }


        function whenWindowResize(value){
            window.addEventListener('resize', function(e){
                var newWidth =  value * (wrapProgress.offsetWidth / 100)
                slider.style.transform = `translate(${newWidth - 8}px,-3.5px)`
            
            });
      }
       
     
    },

    tabNextSong : function(){

    },

    // tăng, giảm bài hát
    adjustmentSong: function(){
        _this = this
        var btnPlaySong = $$('.btn-play-song')
        var wrapNameSongCurrent = $('.wrap-album-current__name-song')
        var song = $$('.song')
        var nextIndex = Number.parseFloat(this.currentIndex) + 1
        var x = this.hasPlay.length 
        var instance = tippy(btnNext,{
            allowHTML: true,
            hideOnClick : false,
            theme : 'gray',
        })
        
        function randomOn() {
            
            instance.setContent( `
                <div class="tab-next-song">
                    <span class="title-tab">Phát tiếp theo</span>
                    <div class="tab-wrap-info-song">
                        <img class="thumbail-img-next-song" src="${_this.song[nextIndex].image}" alt="">
                        <div class="wrap-tab-name">
                            <span class="name-song-tab">${_this.song[nextIndex].name}</span>
                            ${_this.song[nextIndex].singerTwo ? `<span class="name-singer-tab" >${_this.song[nextIndex].singerOne}</span>,`:` <span class="name-singer-tab">${_this.song[nextIndex].singerOne}</span> `}
                            ${_this.song[nextIndex].singerThree ? `<span class="name-singer-tab" >${_this.song[nextIndex].singerTwo}</span>,`:` <span class="name-singer-tab">${_this.song[nextIndex].singerTwo}</span> `}
                            ${_this.song[nextIndex].singerThree? `<span class="name-singer-tab" >${_this.song[nextIndex].singerThree}</span>,`:''}
                        </div>
                    </div>
                </div>
                `)
                
        }

        function randomOff(){
            instance.setContent( `
                <div class="tab-next-song">
                    <span class="title-tab">Phát tiếp theo</span>
                    <div class="tab-wrap-info-song">
                        <img class="thumbail-img-next-song" src="${_this.song[_this.predict[x]].image}" alt="">
                        <div class="wrap-tab-name">
                            <span class="name-song-tab">${_this.song[_this.predict[x]].name}</span>
                            ${_this.song[_this.predict[x]].singerTwo ? `<span class="name-singer-tab" >${_this.song[_this.predict[x]].singerOne}</span>,`:` <span class="name-singer-tab">${_this.song[_this.predict[x]].singerOne}</span> `}
                            ${_this.song[_this.predict[x]].singerThree ? `<span class="name-singer-tab" >${_this.song[_this.predict[x]].singerTwo}</span>,`:` <span class="name-singer-tab">${_this.song[_this.predict[x]].singerTwo}</span> `}
                            ${_this.song[_this.predict[x]].singerThree? `<span class="name-singer-tab" >${_this.song[_this.predict[x]].singerThree}</span>,`:''}
                        </div>
                    </div>
                </div>
                `)
        }

        if(!_this.isRadom){
            randomOn()
        }else{
            randomOff()
        }


        btnNext.onclick = function(){
 
            if(_this.isRadom){
                var i = _this.hasPlay.length
            
                if(_this.hasPlay.length == _this.predict.length){
                    i = 0
                }
                var c = i + 1
                if(_this.hasPlay.length == _this.predict.length - 1){
                     c = 0
                }
                
                if(_this.hasPlay.length == _this.song.length){
                    _this.hasPlay = []
                    
                }
                _this.functionShuffle()
                for(; _this.hasPlay.length < _this.predict.length ;){
                  
                    _this.hasPlay.push(_this.predict[i])
                    break
                }
    
                var r = `${_this.predict[c]} : ${_this.song[_this.predict[c]].name}`
                console.log(r)

                instance.setContent( `
                                    <div class="tab-next-song">
                                        <span class="title-tab">Phát tiếp theo</span>
                                        <div class="tab-wrap-info-song">
                                            <img class="thumbail-img-next-song" src="${_this.song[_this.predict[c]].image}" alt="">
                                            <div class="wrap-tab-name">
                                                <span class="name-song-tab">${_this.song[_this.predict[c]].name}</span>
                                                <div class="wrap-name-singers">
                                                    ${_this.song[_this.predict[c]].singerTwo ? `<span class="name-singer-tab" >${_this.song[_this.predict[c]].singerOne}</span>,`:` <span class="name-singer-tab">${_this.song[_this.predict[c]].singerOne}</span> `}
                                                    ${_this.song[_this.predict[c]].singerThree ? `<span class="name-singer-tab" >${_this.song[_this.predict[c]].singerTwo}</span>,`:` <span class="name-singer-tab">${_this.song[_this.predict[c]].singerTwo}</span> `}
                                                    ${_this.song[_this.predict[c]].singerThree? `<span class="name-singer-tab" >${_this.song[_this.predict[c]].singerThree}</span>,`:''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    `)
                console.log(_this.song[_this.predict[c]].name)
                _this.loadCurrentSong()
           
            }else{
                _this.currentIndex ++
                _this.hasPlay.push(_this.currentIndex)
                if(_this.currentIndex == _this.song.length){
                    _this.currentIndex = 0
                }
               
                var nextIndex = _this.currentIndex + 1
                if(nextIndex == _this.song.length){
                    nextIndex = 0
                }
                console.log(nextIndex)
                instance.setContent( `
                <div class="tab-next-song">
                    <span class="title-tab">Phát tiếp theo</span>
                    <div class="tab-wrap-info-song">
                        <img class="thumbail-img-next-song" src="${_this.song[nextIndex].image}" alt="">
                        <div class="wrap-tab-name">
                            <span class="name-song-tab">${_this.song[nextIndex].name}</span>
                            <div class="wrap-name-singers">
                                ${_this.song[nextIndex].singerTwo ? `<span class="name-singer-tab" >${_this.song[nextIndex].singerOne}</span>,`:` <span class="name-singer-tab">${_this.song[nextIndex].singerOne}</span> `}
                                ${_this.song[nextIndex].singerThree ? `<span class="name-singer-tab" >${_this.song[nextIndex].singerTwo}</span>,`:` <span class="name-singer-tab">${_this.song[nextIndex].singerTwo}</span> `}
                                ${_this.song[nextIndex].singerThree? `<span class="name-singer-tab" >${_this.song[nextIndex].singerThree}</span>,`:''}
                            </div>
                        </div>
                    </div>
                </div>
                `)
            }
            
            
         
            if( $('.song.active')){
                $('.song.active').classList.remove('active')
            }

            if($('.btn-play-song.active')){
                $('.btn-play-song.active').classList.remove('active')
                
            }
           
            song[_this.currentIndex].classList.add('active')
            btnPlaySong[_this.currentIndex].classList.add('active')
            
            _this.loadCurrentSong()

            audio.play()
            if(_this.isAudio){
                _this.isAudio = false
                thumbail.classList.remove('animate-vinyl-off')
                thumbail.classList.add('animate-vinyl')
                
            } else if(!_this.isAudio){
                thumbail.classList.add('animate-vinyl-off')
                setTimeout(function(){
                    thumbail.classList.remove('animate-vinyl-off')
                    thumbail.classList.add('animate-vinyl')
                },500)
            }
            wrapNameSongCurrent.removeAttribute('style')
            _this.intervalvalue.forEach(function(e){
                clearInterval(e)
            })

        }
      
        btnPrew.onclick = function(){
            var i = _this.hasPlay.length
            
            if(_this.hasPlay.length == _this.predict.length){
                i = 0
            }
            var c = i + 1
            if(_this.hasPlay.length == _this.predict.length - 1){
                 c = 0
            }
            
            if(_this.hasPlay.length == _this.song.length){
                _this.hasPlay = []
                
            }
            if(_this.isRadom){
                _this.functionShuffle()
                console.log(i)
                for(; _this.hasPlay.length < _this.predict.length ;){
                    _this.hasPlay.push(_this.predict[i])
                    break
                }
                instance.setContent( `
                                    <div class="tab-next-song">
                                        <span class="title-tab">Phát tiếp theo</span>
                                        <div class="tab-wrap-info-song">
                                            <img class="thumbail-img-next-song" src="${_this.song[_this.predict[c]].image}" alt="">
                                            <div class="wrap-tab-name">
                                                <span class="name-song-tab">${_this.song[_this.predict[c]].name}</span>
                                                <div class="wrap-name-singers">
                                                    ${_this.song[_this.predict[c]].singerTwo ? `<span class="name-singer-tab" >${_this.song[_this.predict[c]].singerOne}</span>,`:` <span class="name-singer-tab">${_this.song[_this.predict[c]].singerOne}</span> `}
                                                    ${_this.song[_this.predict[c]].singerThree ? `<span class="name-singer-tab" >${_this.song[_this.predict[c]].singerTwo}</span>,`:` <span class="name-singer-tab">${_this.song[_this.predict[c]].singerTwo}</span> `}
                                                    ${_this.song[_this.predict[c]].singerThree? `<span class="name-singer-tab" >${_this.song[_this.predict[c]].singerThree}</span>,`:''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    `)
            }else{
                _this.currentIndex --
                _this.hasPlay.push(_this.currentIndex)
                if(_this.currentIndex < 0){
                    _this.currentIndex = _this.song.length - 1
                   
                }
                var nextIndex = _this.currentIndex + 1
                if(nextIndex == _this.song.length){
                    nextIndex = 0
                }
                instance.setContent( `
                <div class="tab-next-song">
                    <span class="title-tab">Phát tiếp theo</span>
                    <div class="tab-wrap-info-song">
                        <img class="thumbail-img-next-song" src="${_this.song[nextIndex].image}" alt="">
                        <div class="wrap-tab-name">
                            <span class="name-song-tab">${_this.song[nextIndex].name}</span>
                            <div class="wrap-name-singers">
                                ${_this.song[nextIndex].singerTwo ? `<span class="name-singer-tab" >${_this.song[nextIndex].singerOne}</span>,`:` <span class="name-singer-tab">${_this.song[nextIndex].singerOne}</span> `}
                                ${_this.song[nextIndex].singerThree ? `<span class="name-singer-tab" >${_this.song[nextIndex].singerTwo}</span>,`:` <span class="name-singer-tab">${_this.song[nextIndex].singerTwo}</span> `}
                                ${_this.song[nextIndex].singerThree? `<span class="name-singer-tab" >${_this.song[nextIndex].singerThree}</span>,`:''}
                            </div>
                        </div>
                    </div>
                </div>
                `)
            }
        
                    
            if( $('.song.active')){
                $('.song.active').classList.remove('active')
            }

            if($('.btn-play-song.active')){
                $('.btn-play-song.active').classList.remove('active')
                
            }
           
            song[_this.currentIndex].classList.add('active')
            btnPlaySong[_this.currentIndex].classList.add('active')
          
            _this.loadCurrentSong()
            audio.play()
            if(_this.isAudio){
                _this.isAudio = false
                thumbail.classList.remove('animate-vinyl-off')
                thumbail.classList.add('animate-vinyl')
            } else if(!_this.isAudio){
                thumbail.classList.add('animate-vinyl-off')
                setTimeout(function(){
                    thumbail.classList.remove('animate-vinyl-off')
                    thumbail.classList.add('animate-vinyl')
                },500)
            }
            wrapNameSongCurrent.removeAttribute('style')

            _this.intervalvalue.forEach(function(e){
                clearInterval(e)
            })

        }
        
    
    },

    // tiếp tục phát bài tiếp theo khi end
    nextWhenEnd: function(){
        _this = this
        var song = $$('.song')
        var btnPlaySong = $$('.btn-play-song')

        audio.onended = function(){
            _this.isAudio = false
            thumbail.classList.remove('animate-vinyl')
            thumbail.classList.add('animate-vinyl-off')
            console.log(_this.isAudio)
            if(!_this.isAudio && _this.regimeRepeat != 'repeatOnce'){
                btnNext.click()

            }else{
                audio.play()
                thumbail.classList.add('animate-vinyl-off')
                setTimeout(function(){
                    thumbail.classList.remove('animate-vinyl-off')
                    thumbail.classList.add('animate-vinyl')
                },500)

                if($('.btn-play-song.active') && $('.song.active')){
                    $('.btn-play-song.active').classList.remove('active')
                    $('.song.active').classList.remove('active')
                }
               
                song[_this.currentIndex].classList.add('active')
                btnPlaySong[_this.currentIndex].classList.add('active')
                
            }

        }
    },

    // Nút phát ngẫu nhiên

    isRadom : false,
    hasPlay : [],
    predict: [],

    btnShuffle : function(){
        var btnRandom = $('.btn-random')
        _this = this
        btnRandom.onclick = function(){
            if(!_this.isRadom){
                _this.isRadom = true
                btnRandom.style.color = '#c273ed'
                console.log(_this.predict)
                _this.functionShuffle()
                _this.adjustmentSong()
            }else{
                _this.isRadom = false
                btnRandom.style.removeProperty('color')
                _this.adjustmentSong()

            }
        }
    },

    functionShuffle:function(){
      _this = this

        var hasPlayLength = this.hasPlay.length
      if(this.hasPlay.length == this.predict.length -1){
          _this.predict = []
      }
      for(var i = 0 ; this.predict.length < this.song.length ; i++){
          var testRandomIndex = Math.floor(Math.random() * _this.song.length)
          
         if(_this.predict.includes(testRandomIndex) == false){
             _this.predict.push(testRandomIndex)
            
         }
      }

        // console.log(_this.predict)
        _this.currentIndex = _this.predict[hasPlayLength]
       
      
    },

    // Lặp lại tất cả, một lần
    regimeRepeat: 'off',
    btnRepeat: function(){
        var btnRepeat = $('.btn-repeat')
        var instance = tippy(btnRepeat,{
            hideOnClick : false
        })
       
        _this = this
        
        btnRepeat.onclick = function(){
            if(_this.regimeRepeat == 'off'){
                _this.regimeRepeat = 'repeatAll'
                btnRepeat.style.color = '#c273ed'
                instance.setContent('Bật phát lại một lần');
                console.log(instance)

            }else if( _this.regimeRepeat == 'repeatAll'){
                _this.regimeRepeat = 'repeatOnce'
                btnRepeat.innerHTML = '<i class="fal fa-repeat-1"></i>'
                instance.setContent('Tắt phát lại');
                console.log(instance)

            }else if(_this.regimeRepeat == 'repeatOnce'){
                _this.regimeRepeat = 'off'
                btnRepeat.innerHTML = '<i class="fa-light fa-repeat">'
                btnRepeat.style.removeProperty('color')
                console.log(instance)
                instance.setContent('Bật phát lại tất cả');
            }
           
        }
            instance.setContent('Bật phát lại tất cả');

         
      
    },


    // Render ra cardSinger
    renderCardSinger : function(){
        // Lấy ra những ca sĩ có trong playlist   
        var currentSinger = this.song.map(function(song,index){
            return song.singers
        })
        
        var singerInPLaylist = [...currentSinger].flat(Infinity)

        // Lấy ra card tương ứng từ ca sĩ
        var  currentCard = [],
        _this = this
        singerInPLaylist.map(function(singerInPLaylist){        
            _this.cardSinger.map(function(cardSinger){
                if(singerInPLaylist === cardSinger.name ){
                    if(currentCard.includes(cardSinger) === false){
                        currentCard.push(cardSinger)
                        
                    } 
                }
            })
        })
       
        // render ra code
        var codeSingerCard = currentCard.map(function(currentCard){
            return `
                    <div class="card-artist">      
                        <div class="infomation-artist">
                            <div title="${currentCard.name}" class="picture-artist">
                                <img src="${currentCard.picute}" alt="">
                                <div class="icon-action-artist"><i class="fa-thin fa-shuffle"></i></div>
                            </div>
                            <div class="wrap-name-artist">
                                <p class="singer">${currentCard.name}</p>
                                <span>${currentCard.follower}</span>
                            </div>
                        </div>
                        <div class="follow-singer">
                            <button class="btn-follow">
                                <i class="fa-light fa-user-plus"></i>
                                QUAN TÂM
                            </button>
                        </div>
                    </div>`
        })
        
        wrapArtistCard.innerHTML = codeSingerCard.join('')

    },

    // Render ra card playlist
    renderCardList : function(){
        var codehtml =  this.cardPlaylist.map(function(cardPlaylist){
                return `
                <div class="card-playlist">      
                    <div class="infomation-playlist">
                        <div title="${cardPlaylist.namePlaylist}" class="picture-playlist wrap-picture-hover">
                            <img class="picture-hover" src="${cardPlaylist.piture}" alt="">
                            <div class="icon-feature-playlist">
                                <div class="feature-playlist-item hover-background-feature">
                                    <i class="fa-light fa-heart"></i>
                                </div>                                                     
                                <div class="feature-playlist-item--play "><i class="fa-thin fa-circle-play"></i></div>
                                <div class="feature-playlist-item hover-background-feature">
                                    <i class="fa-regular fa-ellipsis"></i>
                                </div>
                            </div>
                        </div>
                        <div class="wrap-name-playlist">
                            <p class="name-playlist text-hover">${cardPlaylist.namePlaylist}</p>
                            ${cardPlaylist.singers.two ? `<span class="singer" >${cardPlaylist.singers.first}</span>, `:`<span class="singer">${cardPlaylist.singers.first}</span> `}
                            ${cardPlaylist.singers.three ? `<span class="singer" >${cardPlaylist.singers.two}</span>, `:`<span class="singer">${cardPlaylist.singers.two}</span> `}
                            ${cardPlaylist.singers.three ? `<span class="singer" >${cardPlaylist.singers.three}</span>...`: ''}
                        </div>
                    </div>
                </div>
                `
            })

        wrapPlayList.innerHTML = codehtml.join('')
    },

    // Render vpop
    renderVop : function(){
        var codeHtmlListVpop = this.cardVPop.map(function(cardVPop){
            return `
                <div class="card-playlist">      
                    <div class="infomation-playlist">
                        <div title="${cardVPop.nameSongVpop}" class="picture-playlist wrap-picture-hover">
                            <img class="picture-hover" src="${cardVPop.piture}" alt="">
                            <div class="icon-feature-playlist">
                                <div class="feature-playlist-item hover-background-feature">
                                    <i class="fa-light fa-heart"></i>
                                </div>                                                     
                                <div class="feature-playlist-item--play "><i class="fa-thin fa-circle-play"></i></div>
                                <div class="feature-playlist-item hover-background-feature">
                                    <i class="fa-regular fa-ellipsis"></i>
                                </div>
                            </div>
                        </div>
                        <div class="wrap-name-playlist">
                            <p class="name-playlist text-hover">${cardVPop.nameSongVpop}</p>
                            ${cardVPop.singers.two ? `<span class="singer" >${cardVPop.singers.first}</span>, `:`<span class="singer">${cardVPop.singers.first}</span> `}
                            ${cardVPop.singers.three ? `<span class="singer" >${cardVPop.singers.two}</span>, `:`<span class="singer">${cardVPop.singers.two}</span> `}
                            ${cardVPop.singers.three ? `<span class="singer" >${cardVPop.singers.three}</span>...`: ''}
                        </div>
                    </div>
                </div>
                `
        })
        wrapCardVpop.innerHTML = codeHtmlListVpop.join('')
    },

     // nút sắp xếp playlist
     sortSong: function(){
        _this = this
        console.log(_this.currentIndex)
        
        sortSongbtn.onclick = function(){
            listSort.classList.toggle('active')
        }
            
        html.onmousedown = function(){
            listSort.classList.remove('active')
        }
    
  
 
    },

   
    start : function(){
       
        this.dayUpDate()

        this.singerCurrent()

        this.renderCode()

        this.sortSong()

        this.getCurrentSong()

        this.loadCurrentSong()

        this.RenderTimeSongs()

        this.playSong()

        this.effectWhenSongPlay()

        this.btnPlaySong()

        this.adjustmentVolume()

        this.controllTimeSong()

        this.adjustmentSong()

        this.nextWhenEnd()

        this.btnShuffle()

        this.btnRepeat()

        this.renderCardSinger()

        this.renderCardList()

        this.renderVop()

        this.tabNextSong()

            
    }
   

}

// Xu ly tippy
var tippyInWeb = {
    listTippy: function(){
        var tippyTopic = $('#tippy-topic')
        var tippyVip = $('#tippy-vip')
        var tippyUpload = $('#tippy-upload')
        var tippySetting = $('#tippy-setting')
        var tippyMore = $$('#tippy-more')
        var tippyLove = $$('#tippy-love')
        var tippyShowLyric = $('#tippy-show-lyric')
        var tippyWindowMode = $('#tippy-window-mode')
        var tippyPlaylist = $('#tippy-playlist')
        var tippyRandom = $('#tippy-random')
        var tippyPlayWithLyric = $$('#tippy-play-with-lyric')
        var tippyMv = $$('#tippy-MV')
       
  
        
        tippy(tippyTopic,{
            content: 'Chủ đề',
        })
         
        tippy(tippyVip,{
            content: 'Nâng cấp VIP',
            size : 'tiny',
            color: 'black'
            
        })
        
        tippy(tippyUpload,{
            content: 'Tải lên',
            
        })
        
        tippy(tippySetting,{
            content: 'Cài đặt'
        })
        
        tippy(tippyMore,{
            content: 'Khác'
        })
        
        tippy(tippyLove,{
            content: 'Yêu Thích'
        })
        
        tippy(tippyShowLyric,{
            content: 'Xem lời bài hát'
        })
        
        tippy(tippyWindowMode,{
            content: 'Chế độ cửa sổ'
        })
        
        tippy(tippyPlaylist,{
            content: 'Danh sách phát'
        })

        tippy(tippyRandom,{
            content: 'Bật phát ngẫu nhiên'
        })

        tippy(tippyPlayWithLyric,{
            content: 'Phát cùng lời bài hát'
        })

        tippy(tippyMv,{
            content: 'Xem MV'
        })

       
    },

    start:function(){
        this.listTippy()
    }
}


handlerScrollSidebar.start()

headerSreach.start()

handlerCodeWeb.start()

tippyInWeb.start()

var btnExpanded = $('.btn-expanded')
var sidebar =$('.sidebar')
var sidebarItem = $('.sidebar-item ')
var iconExpanded = $('.icon-expanded')
// Nút bật sidebar 
function sidebarExpanded(){
    btnExpanded.onclick = function(){
        sidebar.classList.toggle('is-expanded')
        sidebarItem.classList.toggle('zmp-logo')
        iconExpanded.classList.toggle('ti-angle-left')
    }
}

sidebarExpanded()