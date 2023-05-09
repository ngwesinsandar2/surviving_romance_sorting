const smallContainer = document.querySelector(".smallContainer");
const sortDropdown = document.querySelectorAll(".dropdown-item");

sortDropdown.forEach(element => {
    element.addEventListener("click", (event) => {
        let sortedElementId = event.target.id;

        if (sortedElementId === "ascending") {
            let videoSortedByAscending = videos.sort((a, b) => a.uploadDate.getTime() - b.uploadDate.getTime());
            uploadUI(videoSortedByAscending);
        } else {
            let videoSortedByDescending = videos.sort((a, b) => b.uploadDate.getTime() - a.uploadDate.getTime());
            uploadUI(videoSortedByDescending);
        };
    });
});

const sortDropdown2 = document.querySelectorAll(".item2");

sortDropdown2.forEach(element => {
    element.addEventListener("click", (event) => {
        let sortedElementId2 = event.target.id;

        if (sortedElementId2 === "least") {
            let videoSortedByAscendingOrder = videos.sort((a, b) => a.viewCount - b.viewCount);
            uploadUI(videoSortedByAscendingOrder);
        } else {
            let videoSortedByDescendingOrder = videos.sort((a, b) => b.viewCount - a.viewCount);
            uploadUI(videoSortedByDescendingOrder);
        };
    });
});

let videos = [
    {
        name: "Chaerin Eun",
        thumbnail: "Images/eunchaerin.jpg",
        uploadDate: new Date(2022, 2, 26),
        viewCount: 1000,
    },

    {
        name: "Mihui Yang",
        thumbnail: "Images/yangmihui.jpg",
        uploadDate: new Date(2022, 2, 30),
        viewCount: 2200,
    },

    {
        name: "Jeha Yu",
        thumbnail: "Images/jeha.jpg",
        uploadDate: new Date(2022, 2, 11),
        viewCount: 100,
    },

    {
        name: "Minwoo Ha",
        thumbnail: "Images/haminwoo.jpg",
        uploadDate: new Date(2022, 2, 28),
        viewCount: 1111,
    },

    {
        name: "Cheram Han",
        thumbnail: "Images/hancheram2.jpg",
        uploadDate: new Date(2022, 2, 5),
        viewCount: 800,
    },

    {
        name: "Jinhui Choi",
        thumbnail: "Images/dohui.jpg",
        uploadDate: new Date(2022, 2, 1),
        viewCount: 500000,
    },
];

let uploadUI = (videos) => {
    smallContainer.innerHTML = "";
    videos.forEach(video => {
        let videoTag = `
        <div class="character text-center">
            <div class="character-img">
                <img src="${video.thumbnail}" class="img">
            </div>

            <div class="about">
                <h5>${video.name}</h5>
                <div>${video.uploadDate.toLocaleDateString()}</div>
                <h6>Love - ${video.viewCount}</h6>
            </div>
        </div>
        `

        smallContainer.innerHTML += videoTag;

        // document.querySelectorAll(".img").addEventListener("mouseover", () => {
        //     document.querySelector(".about").classList.add("mt-2");
        //     document.querySelector(".about").transition = "0.3s";
        // })

        // document.querySelectorAll(".img").addEventListener("mouseleave", () => {
        //     document.querySelector(".about").classList.remove("mt-2");
        //     document.querySelector(".about").transition = "0.3s";
        // })

        // const imgC = document.querySelectorAll(".img");
        // const about = document.querySelectorAll(".about");

        // imgC.forEach(element => {
        //     element.addEventListener("mouseover", () => {
        //         about.forEach(element => {
        //             element.classList.add("mt-2");
        //             element.transition = "0.3s";
        //         })
        //     });

        //     element.addEventListener("mouseleave", () => {
        //         about.forEach(element => {
        //             element.classList.remove("mt-2");
        //             element.transition = "0.3s";
        //         })
        //     });
        // });
    });
}

uploadUI(videos);

