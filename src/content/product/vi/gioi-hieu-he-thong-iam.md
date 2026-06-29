---
title: "Identity và access management trong một hệ thống duy nhất (phần 1)"
description: "Tại sao identity, authorization, và các quyết định per-tenant cần nằm trong một hệ thống duy nhất mà mọi service đọc từ — và năm thành phần của hệ thống đó."
date: 2026-06-29
author: Tuan Nguyen
draft: false
lang: vi
en_url: /product/introduce-iam-system/
---

Một khách hàng không vào được tính năng họ đang trả tiền. Support leo thang lên engineering. Cả hai log đều cho thấy khách hàng có quyền truy cập. Không có lỗi, không có thay đổi gần đây. Bug không tìm được vì mỗi phần của product đang tự lưu câu trả lời riêng cho "đây là ai và họ được làm gì" — và các câu trả lời đó đã lệch nhau.

**Giải pháp là một hệ thống duy nhất sở hữu các quyết định này, và một quy tắc cho tất cả phần còn lại: lấy câu trả lời từ đó, không tự tạo câu trả lời riêng.**

Đây là bài đầu tiên trong series về xây dựng hệ thống đó. Phần này đặt vấn đề và giới thiệu năm thành phần; các phần sau đi sâu vào từng cái.

| | |
|---|---|
| **Vấn đề** | Mỗi phần của product tự lưu bản sao về khách hàng là ai, được làm gì, và được cấu hình như thế nào — và các bản sao đó dần lệch nhau. |
| **Nguyên nhân** | Không có nguồn sự thật duy nhất. Mỗi team tự xây những gì họ cần, và khoảng trống hiện ra dưới dạng bug phía khách hàng. |
| **Mục tiêu** | Một hệ thống duy nhất sở hữu các quyết định này. Mọi phần khác của product đọc từ đó, nên câu trả lời luôn nhất quán. |

## Tại sao điều này quan trọng

Khi các phần của product không đồng thuận về khách hàng, khách hàng cảm nhận được — bị khóa khỏi tính năng đang trả tiền, bị tính sai giá, hoặc onboard vào trạng thái lỗi mà họ không giải thích được và support không sửa được. Nguyên nhân luôn giống nhau: hai nơi cùng lưu "khách hàng này được làm gì," và chúng đã lệch nhau.

Chi phí kinh doanh tăng nhanh. Support ticket tăng. Engineering mất thời gian vào bug không có owner rõ ràng. Ra mắt tính năng mới trở thành công việc phối hợp giữa các team thay vì bật một switch. Onboard khách hàng mới cần N thao tác riêng lẻ — bỏ sót một cái là có thứ hỏng.

Tập trung hóa các quyết định này không thêm complexity. Nó loại bỏ complexity ẩn đã tồn tại, rải rác khắp codebase của từng team.

## Năm thành phần

### Organization — một customer record, mọi thứ theo sau

Khi khách hàng mới đăng ký, mọi phần của product cần biết họ tồn tại: billing, support, access control, analytics. Không có nơi duy nhất sở hữu, mỗi team tự provision bản sao riêng — bất kỳ bước nào thất bại là khách hàng rơi vào trạng thái lỗi khó chẩn đoán và khó sửa.

**Lợi ích:** Một thao tác tạo khách hàng. Mọi hệ thống khác tự động theo sau. Phần 2.

### User — một người, quyền truy cập nhất quán ở mọi nơi

Cùng một người có thể là admin trong tài khoản của họ và là viewer read-only trong tài khoản của đối tác. Không có hệ thống theo dõi điều này rõ ràng, access bug xuất hiện: ai đó thấy thứ không được thấy, hoặc không làm được thứ được phép làm, và không có nơi rõ ràng để sửa.

**Lợi ích:** Một câu trả lời duy nhất có thẩm quyền cho "người này là ai và được làm gì" — bất kể phần nào của product đang hỏi. Phần 3.

### Feature flag — test với khách hàng thực trước khi rollout cho tất cả

Tính năng mới thường ship cho tất cả cùng lúc, hoặc ẩn đi cho đến khi hoàn toàn sẵn sàng. Feature flag thay đổi điều đó: bật tính năng cho một hoặc hai khách hàng để quan sát với real usage, sau đó mở rộng rollout, và tắt trong vài giây nếu có vấn đề.

**Lợi ích:** Launch nhanh hơn và an toàn hơn. Pilot với khách hàng cụ thể trước khi commit cho tất cả. Không cần emergency deploy để tắt tính năng. Phần 4.

### Config — cấu hình của từng khách hàng, trong một nơi có quản lý

Một số khách hàng có pricing, currency, định dạng invoice, hoặc SLA tier khác nhau. Không có nơi quản lý tập trung, các khác biệt đó bị phân tán — trong spreadsheet, trong code exception, trong tribal knowledge. Chúng lệch nhau, xung đột, và gây ra hành vi sai cho khách hàng sai.

**Lợi ích:** Config của từng khách hàng nằm ở một nơi mà toàn bộ product đọc nhất quán, không cần đoán version nào đang hiệu lực. Phần 5.

### Rules — business logic ai cũng có thể thay đổi, không cần deploy

Phí vận chuyển, điều kiện discount, pricing tier: logic này thay đổi theo lịch kinh doanh, không phải lịch engineering. Khi nó nằm trong code, mỗi thay đổi cần developer và một lần deploy. Khi nó nằm trong free-text box, một typo có thể làm hỏng checkout.

**Lợi ích:** Người phù hợp có thể thay đổi business logic trực tiếp — có validation, có audit trail, live ngay không cần deploy. Engineering không còn là bottleneck cho mỗi lần thay đổi rule. Phần 6.

## Đánh đổi: một hệ thống chung đồng nghĩa với một điểm phụ thuộc chung

Tập trung hóa các quyết định này không miễn phí.

| | Mỗi team tự quyết | Một hệ thống chung |
|---|---|---|
| "Khách hàng này có thể làm X không?" | Câu trả lời khác nhau tùy ai hỏi | Một câu trả lời, nhất quán khắp nơi |
| Onboard khách hàng mới | Mỗi team tự provision — dễ bỏ sót một bước | Một thao tác, mọi thứ tự theo |
| Launch cho một số khách hàng | Tự xây lại ở mỗi khu vực product | Một targeting list |
| Nhất quán trong product | Không đảm bảo | Nhất quán khắp nơi |
| Rủi ro khi hệ thống down | Giới hạn trong một khu vực | Ảnh hưởng rộng hơn |

Chi phí thực sự là sự tập trung: nếu hệ thống này có vấn đề, nhiều phần của product bị ảnh hưởng hơn. Đó là rủi ro thực, và được quản lý có chủ đích — không bỏ qua.

Nhưng mô hình phân tán không tránh được chi phí này. Nó ẩn chi phí đó dưới dạng bug phát hiện trong production, từng khách hàng bị ảnh hưởng một. Một owner duy nhất biến câu trả lời thành sự thật thay vì phỏng đoán.

Phần 2 bắt đầu với organization: điều gì thực sự xảy ra khi khách hàng mới được tạo, và tại sao lỗi sai ở đây lại hiện ra muộn như vậy.
