function appendLinks() {
  // Tạo một đối tượng thẻ <p>
  var paragraph = document.createElement('p');

  // Các thông tin về các link
  var linksInfo = [
    {
      href: "https://www.taoanhdep.com/2022/03/tinh-diem-tot-nghiep-thpt.html",
      ref: "dofollow",
      title: "Công cụ tính điểm tốt nghiệp THPT 2022 chính xác nhất",
      text: "Công cụ tính điểm tốt nghiệp THPT 2022 chính xác nhất"
    },
    {
      href: "https://snapvideo.io/vi/",
      ref: "dofollow",
      title: "Tải video tiktok không logo, Tải video youtube, facebook, instagram,...",
      text: "Công cụ tải video miễn phí"
    },
    {
      href: "https://phimtat.vn/",
      ref: "dofollow",
      title: "Phím tắt VN - Thư viện phím tắt hữu ích cho IOS",
      text: "Phím tắt VN - Thư viện phím tắt hữu ích cho IOS"
    }
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
  document.body.appendChild(paragraph);
}

// Gọi hàm để thêm các links vào trang web
appendLinks();
