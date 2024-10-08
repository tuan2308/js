function appendLinks() {
  // Tạo một đối tượng thẻ <p>
  var paragraph = document.createElement('p');

  // Các thông tin về các link
  var linksInfo = [
     {
      href: "https://snaptik.me/",
      ref: "dofollow",
      title: "SnapTik - TikTok Video Downloader",
      text: "SnapTik - TikTok Video Downloader"
    },
    {
      href: "https://taoanhdep.com/cong-cu/tinh-diem-tot-nghiep-thpt/",
      ref: "dofollow",
      title: "Công cụ tính điểm tốt nghiệp THPT 2025 chính xác nhất",
      text: "Công cụ tính điểm tốt nghiệp THPT 2025 chính xác nhất"
    },
    {
      href: "https://snapvideo.io/",
      ref: "dofollow",
      title: "Tải video tiktok không logo, Tải video youtube, facebook, instagram,...",
      text: "Công cụ tải video miễn phí"
    },
    {
      href: "https://phimtat.vn/",
      ref: "dofollow",
      title: "Phím tắt VN - Thư viện Apple Shortcuts",
      text: "Phím tắt VN - Thư viện Apple Shortcuts"
    },
    {
      href: "https://taoanhdep.com/lam-net-anh-bang-ai/",
      ref: "dofollow",
      title: "Làm nét ảnh bằng AI",
      text: "Làm nét ảnh bằng AI"
    },
  ];

  // Lặp qua mảng linksInfo để tạo các đối tượng thẻ <a> và thêm vào thẻ <p>
  for (var i = 0; i < linksInfo.length; i++) {
    var link = document.createElement('a');
    link.href = linksInfo[i].href;
    link.setAttribute("ref", linksInfo[i].ref);
    link.title = linksInfo[i].title;
    link.textContent = linksInfo[i].text;
    paragraph.appendChild(link);
  }

  // Thêm thẻ <p> vào thẻ <body> của trang web
  document.head.appendChild(paragraph);
}

// Gọi hàm để thêm các links vào trang web
appendLinks();
