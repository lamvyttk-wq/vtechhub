// V-TECH FOUNDRY landing page: one self-contained React component (Tailwind core classes + lucide-react).
// GENERATED FILE: edit react/template.jsx, react/overlay.mjs or data/*.json, then run `node build-react.mjs`.
import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronRight, ArrowRight, ArrowUpRight, Check, Copy, Phone, Mail, MapPin, Globe, Landmark, Building2, ShieldCheck,
  Shield, ShieldAlert, Database, MailCheck, Scale, Factory, HeartPulse, ShoppingBag, Truck, Clapperboard, GraduationCap, Zap,
  Target, Bot, Filter, FileSearch, Megaphone, Boxes
} from 'lucide-react';

const DATA = {
 "solutions": [
  {
   "id": "ai-agent",
   "icon": "bot",
   "name": "AI Agent SuperSales & Assistant",
   "provider": "DatumBridge",
   "tags": [
    {
     "tag": "#taichinh",
     "en": "Finance",
     "vi": "Tài chính"
    },
    {
     "tag": "#nganhang",
     "en": "Banking",
     "vi": "Ngân hàng"
    },
    {
     "tag": "#thuongmaidientu",
     "en": "E-Commerce",
     "vi": "Thương mại điện tử"
    }
   ],
   "tagline": {
    "en": "Omnichannel consulting, care and sales, automated",
    "vi": "Tư vấn, chăm sóc và bán hàng đa kênh, tự động hóa"
   },
   "description": {
    "en": "AI Agent SuperSales & AI Agent Assistant is a comprehensive enterprise AI solution designed to automate omnichannel customer consultation, care, and sales operations.",
    "vi": "AI Agent SuperSales & AI Agent Assistant là giải pháp AI toàn diện, hỗ trợ tự động hóa tư vấn, chăm sóc khách hàng và bán hàng đa kênh."
   },
   "features": [
    {
     "icon": "zap",
     "en": "Omnichannel 24/7 care",
     "vi": "Chăm sóc đa kênh 24/7"
    },
    {
     "icon": "target",
     "en": "Intelligent personalized recommendations",
     "vi": "Đề xuất cá nhân hóa thông minh"
    },
    {
     "icon": "filter",
     "en": "Automated lead scoring",
     "vi": "Chấm điểm khách hàng tiềm năng tự động"
    },
    {
     "icon": "file-search",
     "en": "Internal process search",
     "vi": "Tra cứu quy trình nội bộ"
    },
    {
     "icon": "megaphone",
     "en": "Full-cycle sales conversion",
     "vi": "Chuyển đổi bán hàng trọn chu trình"
    }
   ],
   "metrics": [
    {
     "value": "< 5s",
     "en": "Processing latency",
     "vi": "Độ trễ xử lý"
    },
    {
     "value": "30%",
     "en": "Lead capture rate",
     "vi": "Tỷ lệ thu thập khách hàng tiềm năng",
     "sub": {
      "en": "2,000+ leads per month",
      "vi": "2.000+ lead mỗi tháng"
     }
    },
    {
     "value": "10M+",
     "en": "Omnichannel reach",
     "vi": "Phạm vi tiếp cận đa kênh",
     "sub": {
      "en": "TikTok, Facebook and more",
      "vi": "TikTok, Facebook và các kênh khác"
     }
    },
    {
     "value": "4.7 / 5",
     "en": "Customer satisfaction",
     "vi": "Mức độ hài lòng của khách hàng",
     "sub": {
      "en": "24/7 on Web, Zalo, Messenger, iOS, Android",
      "vi": "24/7 trên Web, Zalo, Messenger, iOS, Android"
     }
    }
   ],
   "layer": "ai"
  },
  {
   "id": "email-security",
   "icon": "mail-check",
   "layer": "edge",
   "name": "VCLOUD & Email Security",
   "tagline": {
    "en": "Sovereign cloud + email defense",
    "vi": "Đám mây chủ quyền + bảo mật email"
   }
  },
  {
   "id": "anti-ddos-cdn",
   "icon": "zap",
   "layer": "edge",
   "name": "Anti-DDoS & CDN",
   "tagline": {
    "en": "Stay online at peak traffic",
    "vi": "Luôn trực tuyến khi lưu lượng đỉnh điểm"
   }
  },
  {
   "id": "web-waf",
   "icon": "shield",
   "layer": "edge",
   "name": "Web Application Firewall",
   "tagline": {
    "en": "Protect login, cart and checkout",
    "vi": "Bảo vệ đăng nhập, giỏ hàng và thanh toán"
   }
  },
  {
   "id": "cdn",
   "icon": "globe",
   "layer": "edge",
   "name": "CDN",
   "tagline": {
    "en": "Faster content delivery across Vietnam",
    "vi": "Phân phối nội dung nhanh trên toàn Việt Nam"
   }
  },
  {
   "id": "anti-ddos-waf",
   "icon": "shield-alert",
   "layer": "edge",
   "name": "Anti-DDoS & WAF",
   "tagline": {
    "en": "Keep sites up under attack",
    "vi": "Giữ website hoạt động khi bị tấn công"
   }
  },
  {
   "id": "dlp",
   "icon": "shield-check",
   "layer": "data",
   "name": "Data Loss Prevention",
   "tagline": {
    "en": "360° insider & leak protection",
    "vi": "Chống thất thoát dữ liệu 360°"
   }
  },
  {
   "id": "database-security",
   "icon": "database",
   "layer": "data",
   "name": "Database Security",
   "tagline": {
    "en": "Query-level control & real-time masking",
    "vi": "Kiểm soát truy vấn & che giấu dữ liệu thời gian thực"
   }
  },
  {
   "id": "ai-legal",
   "icon": "scale",
   "layer": "ai",
   "name": "AI Legal & Compliance",
   "tagline": {
    "en": "AI assistant for contracts & regulation",
    "vi": "Trợ lý AI cho hợp đồng & quy định"
   }
  }
 ],
 "industries": [
  {
   "id": "bfsi",
   "icon": "landmark",
   "name": {
    "en": "Finance & Banking",
    "vi": "Tài chính & Ngân hàng"
   },
   "bundle": [
    "email-security",
    "database-security",
    "dlp",
    "ai-legal",
    "ai-agent"
   ],
   "image": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
   "banner": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDQyMCIgd2lkdGg9IjEyMDAiIGhlaWdodD0iNDIwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBzbGljZSI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZWZmNmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYmZkYmZlIi8+PC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJnbG93IiBjeD0iMC41IiBjeT0iMC41IiByPSIwLjUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2RiZWFmZSIgc3RvcC1vcGFjaXR5PSIwLjkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkYmVhZmUiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ25kIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuNzUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC45NSIvPjwvbGluZWFyR3JhZGllbnQ+CjxwYXR0ZXJuIGlkPSJkb3RzIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxLjMiIGZpbGw9IiM5NGEzYjgiIG9wYWNpdHk9IjAuNCIvPjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI0MjAiIGZpbGw9InVybCgjYmcpIiAvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQyMCIgZmlsbD0idXJsKCNkb3RzKSIgb3BhY2l0eT0iMC41NSIvPgo8Y2lyY2xlIGN4PSI2NjAiIGN5PSIxOTAiIHI9IjI2MCIgZmlsbD0idXJsKCNnbG93KSIgLz4KPHBvbHlsaW5lIHBvaW50cz0iNjAsMzAwIDYwLDIyMCAxMjAsMTYwIDI1MCwxNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjUiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjMwMCIgcj0iNSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNyIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iMjIwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMTIwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMjUwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTE0MCw5MCAxMDgwLDkwIDEwNDAsNTAgOTYwLDUwIiBmaWxsPSJub25lIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC41Ii8+PGNpcmNsZSBjeD0iOTYwIiBjeT0iNTAiIHI9IjUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMTE0MCIgY3k9IjkwIiByPSI0IiBmaWxsPSIjZGMyNjI2IiAvPgo8cmVjdCB4PSIwIiB5PSIzMzYiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9Ijg0IiBmaWxsPSJ1cmwoI2duZCkiIC8+PHBhdGggZD0iTTAgMzM2SDEyMDAiIHN0cm9rZT0iI2NiZDVlMSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxlbGxpcHNlIGN4PSI2NjAiIGN5PSIzMzYiIHJ4PSIzMzAiIHJ5PSI5IiBmaWxsPSIjMGYxNzJhIiBvcGFjaXR5PSIwLjA4Ii8+CjxyZWN0IHg9IjQ0OCIgeT0iMzE4IiB3aWR0aD0iNDI0IiBoZWlnaHQ9IjEyIiBmaWxsPSIjY2JkNWUxIiAvPjxyZWN0IHg9IjQzMiIgeT0iMzMwIiB3aWR0aD0iNDU2IiBoZWlnaHQ9IjYiIGZpbGw9IiM5NGEzYjgiIC8+PHJlY3QgeD0iNDYwIiB5PSIzMDYiIHdpZHRoPSI0MDAiIGhlaWdodD0iMTIiIGZpbGw9IiNlMmU4ZjAiIC8+CjxyZWN0IHg9IjQ4MCIgeT0iMjA0IiB3aWR0aD0iMzQiIGhlaWdodD0iMTEyIiBmaWxsPSIjZmZmZmZmIiAvPjxyZWN0IHg9IjUwOCIgeT0iMjA0IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMTIiIGZpbGw9IiNlMmU4ZjAiIC8+PHJlY3QgeD0iNTUwIiB5PSIyMDQiIHdpZHRoPSIzNCIgaGVpZ2h0PSIxMTIiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3QgeD0iNTc4IiB5PSIyMDQiIHdpZHRoPSI2IiBoZWlnaHQ9IjExMiIgZmlsbD0iI2UyZThmMCIgLz48cmVjdCB4PSI2MjAiIHk9IjIwNCIgd2lkdGg9IjM0IiBoZWlnaHQ9IjExMiIgZmlsbD0iI2ZmZmZmZiIgLz48cmVjdCB4PSI2NDgiIHk9IjIwNCIgd2lkdGg9IjYiIGhlaWdodD0iMTEyIiBmaWxsPSIjZTJlOGYwIiAvPjxyZWN0IHg9IjY5MCIgeT0iMjA0IiB3aWR0aD0iMzQiIGhlaWdodD0iMTEyIiBmaWxsPSIjZmZmZmZmIiAvPjxyZWN0IHg9IjcxOCIgeT0iMjA0IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMTIiIGZpbGw9IiNlMmU4ZjAiIC8+PHJlY3QgeD0iNzYwIiB5PSIyMDQiIHdpZHRoPSIzNCIgaGVpZ2h0PSIxMTIiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3QgeD0iNzg4IiB5PSIyMDQiIHdpZHRoPSI2IiBoZWlnaHQ9IjExMiIgZmlsbD0iI2UyZThmMCIgLz48cmVjdCB4PSI4MzAiIHk9IjIwNCIgd2lkdGg9IjM0IiBoZWlnaHQ9IjExMiIgZmlsbD0iI2ZmZmZmZiIgLz48cmVjdCB4PSI4NTgiIHk9IjIwNCIgd2lkdGg9IjYiIGhlaWdodD0iMTEyIiBmaWxsPSIjZTJlOGYwIiAvPgo8cmVjdCB4PSI0NDQiIHk9IjE4MCIgd2lkdGg9IjQzMiIgaGVpZ2h0PSIyNCIgZmlsbD0iI2UyZThmMCIgLz48cGF0aCBkPSJNNDMyIDE4MEw2NjAgOTZMODg4IDE4MFoiIGZpbGw9IiNmZmZmZmYiIC8+PHBhdGggZD0iTTQ3NiAxNzJMNjYwIDEwNkw4NDQgMTcyWiIgZmlsbD0iI2RiZWFmZSIgLz48Y2lyY2xlIGN4PSI2NjAiIGN5PSIxNDIiIHI9IjE0IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNkYzI2MjYiIHN0cm9rZS13aWR0aD0iNCIvPgo8Zz48cmVjdCB4PSI5MzQiIHk9IjEwNCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSIxMTAiIGZpbGw9IiMwZjE3MmEiIHJ4PSIxNCIgb3BhY2l0eT0iMC4wOCIvPjxyZWN0IHg9IjkzMCIgeT0iOTYiIHdpZHRoPSIxNDAiIGhlaWdodD0iMTEwIiBmaWxsPSIjZmZmZmZmIiByeD0iMTQiIHN0cm9rZT0iI2UyZThmMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBvbHlsaW5lIHBvaW50cz0iOTQ0LDE5MCA5NzIsMTYwIDk5NiwxNzIgMTAyNCwxMjggMTA1NiwxMTIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzNiODJmNiIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48Y2lyY2xlIGN4PSIxMDU2IiBjeT0iMTEyIiByPSI3IiBmaWxsPSIjZGMyNjI2IiAvPjwvZz4KPGc+PHJlY3QgeD0iMzE0IiB5PSIxMjgiIHdpZHRoPSIxMTIiIGhlaWdodD0iOTYiIGZpbGw9IiMwZjE3MmEiIHJ4PSIxNCIgb3BhY2l0eT0iMC4wOCIvPjxyZWN0IHg9IjMxMCIgeT0iMTIwIiB3aWR0aD0iMTEyIiBoZWlnaHQ9Ijk2IiBmaWxsPSIjZmZmZmZmIiByeD0iMTQiIHN0cm9rZT0iI2UyZThmMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTM2NiAxNDBsMzAgMTJ2MjZjMCAxNi0xMiAyNi0zMCAzNC0xOC04LTMwLTE4LTMwLTM0di0yNnoiIGZpbGw9IiNiZmRiZmUiIC8+PHBvbHlsaW5lIHBvaW50cz0iMzUyLDE3OCAzNjIsMTg4IDM4MiwxNjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L2c+CjxlbGxpcHNlIGN4PSIzNDAiIGN5PSIzMTYiIHJ4PSIzNCIgcnk9IjkiIGZpbGw9IiNmYmJmMjQiLz48ZWxsaXBzZSBjeD0iMzQwIiBjeT0iMzEyIiByeD0iMzQiIHJ5PSI5IiBmaWxsPSIjZmRlNjhhIi8+PGVsbGlwc2UgY3g9IjM0MCIgY3k9IjMwNCIgcng9IjM0IiByeT0iOSIgZmlsbD0iI2ZiYmYyNCIvPjxlbGxpcHNlIGN4PSIzNDAiIGN5PSIzMDAiIHJ4PSIzNCIgcnk9IjkiIGZpbGw9IiNmZGU2OGEiLz48ZWxsaXBzZSBjeD0iMzQwIiBjeT0iMjkyIiByeD0iMzQiIHJ5PSI5IiBmaWxsPSIjZmJiZjI0Ii8+PGVsbGlwc2UgY3g9IjM0MCIgY3k9IjI4OCIgcng9IjM0IiByeT0iOSIgZmlsbD0iI2ZkZTY4YSIvPgo8ZWxsaXBzZSBjeD0iMzk4IiBjeT0iMzE4IiByeD0iMzAiIHJ5PSI4IiBmaWxsPSIjZmJiZjI0Ii8+PGVsbGlwc2UgY3g9IjM5OCIgY3k9IjMxNCIgcng9IjMwIiByeT0iOCIgZmlsbD0iI2ZkZTY4YSIvPjxlbGxpcHNlIGN4PSIzOTgiIGN5PSIzMDYiIHJ4PSIzMCIgcnk9IjgiIGZpbGw9IiNmYmJmMjQiLz48ZWxsaXBzZSBjeD0iMzk4IiBjeT0iMzAyIiByeD0iMzAiIHJ5PSI4IiBmaWxsPSIjZmRlNjhhIi8+Cjwvc3ZnPg==",
   "story": {
    "context": {
     "title": {
      "en": "Salary day: the core system buckles at peak traffic",
      "vi": "Ngày trả lương: hệ thống lõi quá tải ở giờ cao điểm"
     },
     "body": {
      "en": "At 8 a.m. transfers and card payments spike while heavy privileged queries and noisy logs hit the same Core Banking database. Transactions time out, the app slows down and the call center fills up with customers asking what happened.",
      "vi": "Lúc 8 giờ sáng, giao dịch chuyển khoản và thanh toán thẻ tăng vọt, trong khi các truy vấn đặc quyền nặng và log rác cùng đổ vào cơ sở dữ liệu Core Banking. Giao dịch quá hạn, ứng dụng chậm lại và tổng đài ngập trong cuộc gọi hỏi chuyện gì đã xảy ra."
     }
    },
    "entry": {
     "title": {
      "en": "Stop the entry point before it reaches the core network",
      "vi": "Chặn cửa ngõ trước khi vào mạng lõi"
     },
     "body": {
      "en": "Query-level control keeps unauthorized and junk requests off Core Banking, so live transactions stay fast. AI Agents absorb the customer questions instantly instead of the call center.",
      "vi": "Kiểm soát ở mức truy vấn giữ các yêu cầu trái phép và log rác khỏi Core Banking, nhờ vậy giao dịch trực tiếp luôn nhanh. AI Agent trả lời ngay câu hỏi của khách hàng thay cho tổng đài."
     }
    }
   },
   "outcomes": [
    {
     "en": "Protect Customer Data & Trust",
     "vi": "Bảo vệ dữ liệu & niềm tin khách hàng"
    },
    {
     "en": "Stay Ahead of Compliance",
     "vi": "Đi trước yêu cầu tuân thủ"
    },
    {
     "en": "Optimize Operations & Cost",
     "vi": "Tối ưu vận hành & chi phí"
    }
   ]
  },
  {
   "id": "government",
   "icon": "building-2",
   "name": {
    "en": "Government & Public Sector",
    "vi": "Chính phủ & Khu vực công"
   },
   "bundle": [
    "email-security",
    "dlp",
    "database-security",
    "ai-legal"
   ],
   "image": null,
   "banner": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDQyMCIgd2lkdGg9IjEyMDAiIGhlaWdodD0iNDIwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBzbGljZSI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZWVmMmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzdkMmZlIi8+PC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJnbG93IiBjeD0iMC41IiBjeT0iMC41IiByPSIwLjUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2UwZTdmZiIgc3RvcC1vcGFjaXR5PSIwLjkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlMGU3ZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ25kIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuNzUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC45NSIvPjwvbGluZWFyR3JhZGllbnQ+CjxwYXR0ZXJuIGlkPSJkb3RzIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxLjMiIGZpbGw9IiM5NGEzYjgiIG9wYWNpdHk9IjAuNCIvPjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI0MjAiIGZpbGw9InVybCgjYmcpIiAvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQyMCIgZmlsbD0idXJsKCNkb3RzKSIgb3BhY2l0eT0iMC41NSIvPgo8Y2lyY2xlIGN4PSI2NjAiIGN5PSIxOTAiIHI9IjI2MCIgZmlsbD0idXJsKCNnbG93KSIgLz4KPHBvbHlsaW5lIHBvaW50cz0iNjAsMzAwIDYwLDIyMCAxMjAsMTYwIDI1MCwxNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjUiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjMwMCIgcj0iNSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNyIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iMjIwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMTIwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMjUwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTE0MCw5MCAxMDgwLDkwIDEwNDAsNTAgOTYwLDUwIiBmaWxsPSJub25lIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC41Ii8+PGNpcmNsZSBjeD0iOTYwIiBjeT0iNTAiIHI9IjUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMTE0MCIgY3k9IjkwIiByPSI0IiBmaWxsPSIjZGMyNjI2IiAvPgo8cmVjdCB4PSIwIiB5PSIzMzYiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9Ijg0IiBmaWxsPSJ1cmwoI2duZCkiIC8+PHBhdGggZD0iTTAgMzM2SDEyMDAiIHN0cm9rZT0iI2NiZDVlMSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxlbGxpcHNlIGN4PSI2NTAiIGN5PSIzMzYiIHJ4PSIzNDAiIHJ5PSI5IiBmaWxsPSIjMGYxNzJhIiBvcGFjaXR5PSIwLjA4Ii8+CjxyZWN0IHg9IjMzMCIgeT0iMjMyIiB3aWR0aD0iMTIwIiBoZWlnaHQ9Ijk4IiBmaWxsPSIjZjFmNWY5IiAvPjxyZWN0IHg9Ijg3MCIgeT0iMjMyIiB3aWR0aD0iMTIwIiBoZWlnaHQ9Ijk4IiBmaWxsPSIjZjFmNWY5IiAvPjxyZWN0IHg9IjM1MCIgeT0iMjUyIiB3aWR0aD0iMjQiIGhlaWdodD0iMjgiIGZpbGw9IiNjN2QyZmUiIC8+PHJlY3QgeD0iMzUwIiB5PSIyOTIiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyOCIgZmlsbD0iI2M3ZDJmZSIgLz48cmVjdCB4PSIzODYiIHk9IjI1MiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI4IiBmaWxsPSIjYzdkMmZlIiAvPjxyZWN0IHg9IjM4NiIgeT0iMjkyIiB3aWR0aD0iMjQiIGhlaWdodD0iMjgiIGZpbGw9IiNjN2QyZmUiIC8+PHJlY3QgeD0iNDIyIiB5PSIyNTIiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyOCIgZmlsbD0iI2M3ZDJmZSIgLz48cmVjdCB4PSI0MjIiIHk9IjI5MiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI4IiBmaWxsPSIjYzdkMmZlIiAvPjxyZWN0IHg9Ijg5MCIgeT0iMjUyIiB3aWR0aD0iMjQiIGhlaWdodD0iMjgiIGZpbGw9IiNjN2QyZmUiIC8+PHJlY3QgeD0iODkwIiB5PSIyOTIiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyOCIgZmlsbD0iI2M3ZDJmZSIgLz48cmVjdCB4PSI5MjYiIHk9IjI1MiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI4IiBmaWxsPSIjYzdkMmZlIiAvPjxyZWN0IHg9IjkyNiIgeT0iMjkyIiB3aWR0aD0iMjQiIGhlaWdodD0iMjgiIGZpbGw9IiNjN2QyZmUiIC8+PHJlY3QgeD0iOTYyIiB5PSIyNTIiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyOCIgZmlsbD0iI2M3ZDJmZSIgLz48cmVjdCB4PSI5NjIiIHk9IjI5MiIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI4IiBmaWxsPSIjYzdkMmZlIiAvPgo8cmVjdCB4PSI0NDAiIHk9IjMxNiIgd2lkdGg9IjQ0MCIgaGVpZ2h0PSIxNCIgZmlsbD0iI2NiZDVlMSIgLz48cmVjdCB4PSI0NTIiIHk9IjMwNCIgd2lkdGg9IjQxNiIgaGVpZ2h0PSIxMiIgZmlsbD0iI2UyZThmMCIgLz4KPHJlY3QgeD0iNDU4IiB5PSIyMTYiIHdpZHRoPSIyNiIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3QgeD0iNDgwIiB5PSIyMTYiIHdpZHRoPSI1IiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2UyZThmMCIgLz48cmVjdCB4PSI1MTYiIHk9IjIxNiIgd2lkdGg9IjI2IiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZmZmZiIgLz48cmVjdCB4PSI1MzgiIHk9IjIxNiIgd2lkdGg9IjUiIGhlaWdodD0iMTAwIiBmaWxsPSIjZTJlOGYwIiAvPjxyZWN0IHg9IjU3NCIgeT0iMjE2IiB3aWR0aD0iMjYiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmZmZmZmIiAvPjxyZWN0IHg9IjU5NiIgeT0iMjE2IiB3aWR0aD0iNSIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNlMmU4ZjAiIC8+PHJlY3QgeD0iNjMyIiB5PSIyMTYiIHdpZHRoPSIyNiIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3QgeD0iNjU0IiB5PSIyMTYiIHdpZHRoPSI1IiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2UyZThmMCIgLz48cmVjdCB4PSI2OTAiIHk9IjIxNiIgd2lkdGg9IjI2IiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZmZmZiIgLz48cmVjdCB4PSI3MTIiIHk9IjIxNiIgd2lkdGg9IjUiIGhlaWdodD0iMTAwIiBmaWxsPSIjZTJlOGYwIiAvPjxyZWN0IHg9Ijc0OCIgeT0iMjE2IiB3aWR0aD0iMjYiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmZmZmZmIiAvPjxyZWN0IHg9Ijc3MCIgeT0iMjE2IiB3aWR0aD0iNSIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNlMmU4ZjAiIC8+PHJlY3QgeD0iODA2IiB5PSIyMTYiIHdpZHRoPSIyNiIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3QgeD0iODI4IiB5PSIyMTYiIHdpZHRoPSI1IiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2UyZThmMCIgLz4KPHJlY3QgeD0iNDQ0IiB5PSIxOTIiIHdpZHRoPSI0MzIiIGhlaWdodD0iMjQiIGZpbGw9IiNlMmU4ZjAiIC8+PHJlY3QgeD0iNDMwIiB5PSIxODAiIHdpZHRoPSI0NjAiIGhlaWdodD0iMTIiIGZpbGw9IiNjYmQ1ZTEiIC8+CjxyZWN0IHg9IjU4NiIgeT0iMTI2IiB3aWR0aD0iMTQ4IiBoZWlnaHQ9IjU0IiBmaWxsPSIjZTJlOGYwIiAvPjxwYXRoIGQ9Ik01ODAgMTI2YTgwIDY2IDAgMCAxIDE2MCAweiIgZmlsbD0iI2ZmZmZmZiIgLz48cGF0aCBkPSJNNjAwIDEyNmE2MCA1MCAwIDAgMSAxMjAgMHoiIGZpbGw9IiNjN2QyZmUiIC8+PHJlY3QgeD0iNjU0IiB5PSI0MCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjI4IiBmaWxsPSIjOTRhM2I4IiAvPjxjaXJjbGUgY3g9IjY2MCIgY3k9IjM4IiByPSI4IiBmaWxsPSIjZGMyNjI2IiAvPgo8cmVjdCB4PSI2NjAiIHk9IjI0IiB3aWR0aD0iMzYiIGhlaWdodD0iMTgiIGZpbGw9IiNkYzI2MjYiIHJ4PSIyIi8+CjxnPjxyZWN0IHg9IjMwNCIgeT0iMTA4IiB3aWR0aD0iMTE4IiBoZWlnaHQ9Ijk4IiBmaWxsPSIjMGYxNzJhIiByeD0iMTQiIG9wYWNpdHk9IjAuMDgiLz48cmVjdCB4PSIzMDAiIHk9IjEwMCIgd2lkdGg9IjExOCIgaGVpZ2h0PSI5OCIgZmlsbD0iI2ZmZmZmZiIgcng9IjE0IiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMiIvPjxyZWN0IHg9IjMyMCIgeT0iMTIyIiB3aWR0aD0iNzgiIGhlaWdodD0iOCIgZmlsbD0iI2NiZDVlMSIgcng9IjQiLz48cmVjdCB4PSIzMjAiIHk9IjE0MiIgd2lkdGg9Ijc4IiBoZWlnaHQ9IjgiIGZpbGw9IiNlMmU4ZjAiIHJ4PSI0Ii8+PHJlY3QgeD0iMzIwIiB5PSIxNjIiIHdpZHRoPSI1MiIgaGVpZ2h0PSI4IiBmaWxsPSIjZTJlOGYwIiByeD0iNCIvPjxjaXJjbGUgY3g9IjM4OCIgY3k9IjE3NiIgcj0iMTIiIGZpbGw9IiM2MzY2ZjEiIC8+PHBvbHlsaW5lIHBvaW50cz0iMzgyLDE3NiAzODcsMTgxIDM5NSwxNzEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L2c+CjxnPjxyZWN0IHg9Ijk2NCIgeT0iMTIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjkyIiBmaWxsPSIjMGYxNzJhIiByeD0iMTQiIG9wYWNpdHk9IjAuMDgiLz48cmVjdCB4PSI5NjAiIHk9IjExMiIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI5MiIgZmlsbD0iI2ZmZmZmZiIgcng9IjE0IiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xMDEwIDEzMGwzMCAxMnYyNGMwIDE0LTEyIDI0LTMwIDMwLTE4LTYtMzAtMTYtMzAtMzB2LTI0eiIgZmlsbD0iI2M3ZDJmZSIgLz48L2c+Cjwvc3ZnPg==",
   "story": {
    "context": {
     "title": {
      "en": "A fake notice from a \"superior agency\" opens the door",
      "vi": "Một công văn giả danh \"cơ quan cấp trên\" mở cửa cho kẻ tấn công"
     },
     "body": {
      "en": "An officer opens an urgent notice that appears to come from a higher agency. The attacker gains a foothold, moves toward the citizen database and starts reading records that were never meant to leave the agency.",
      "vi": "Một cán bộ mở công văn khẩn có vẻ đến từ cơ quan cấp trên. Kẻ tấn công có chỗ đứng trong hệ thống, tiến dần tới cơ sở dữ liệu công dân và đọc những hồ sơ vốn không được rời khỏi cơ quan."
     }
    },
    "entry": {
     "title": {
      "en": "Stop the entry point before it reaches the agency network",
      "vi": "Chặn cửa ngõ trước khi vào mạng nội bộ cơ quan"
     },
     "body": {
      "en": "Sovereign email defense filters impersonation at the gateway, while DLP and Database Security protect citizen data if an account is ever compromised.",
      "vi": "Bảo vệ email chủ quyền lọc giả mạo ngay tại cổng, còn DLP và Bảo mật cơ sở dữ liệu bảo vệ dữ liệu công dân nếu có tài khoản bị chiếm quyền."
     }
    }
   },
   "outcomes": [
    {
     "en": "Protect Citizen Data & Public Trust",
     "vi": "Bảo vệ dữ liệu công dân & niềm tin xã hội"
    },
    {
     "en": "Be Ready for Inspection",
     "vi": "Sẵn sàng cho thanh tra, kiểm tra"
    },
    {
     "en": "Do More with Lean IT Teams",
     "vi": "Làm nhiều hơn với đội CNTT tinh gọn"
    }
   ]
  },
  {
   "id": "healthcare",
   "icon": "heart-pulse",
   "name": {
    "en": "Healthcare",
    "vi": "Y tế"
   },
   "bundle": [
    "email-security",
    "database-security",
    "dlp",
    "ai-legal"
   ],
   "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
   "banner": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDQyMCIgd2lkdGg9IjEyMDAiIGhlaWdodD0iNDIwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBzbGljZSI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjBmZGZhIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTlmNmU0Ii8+PC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJnbG93IiBjeD0iMC41IiBjeT0iMC41IiByPSIwLjUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2NjZmJmMSIgc3RvcC1vcGFjaXR5PSIwLjkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNjY2ZiZjEiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ25kIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuNzUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC45NSIvPjwvbGluZWFyR3JhZGllbnQ+CjxwYXR0ZXJuIGlkPSJkb3RzIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxLjMiIGZpbGw9IiM5NGEzYjgiIG9wYWNpdHk9IjAuNCIvPjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI0MjAiIGZpbGw9InVybCgjYmcpIiAvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQyMCIgZmlsbD0idXJsKCNkb3RzKSIgb3BhY2l0eT0iMC41NSIvPgo8Y2lyY2xlIGN4PSI2NjAiIGN5PSIxOTAiIHI9IjI2MCIgZmlsbD0idXJsKCNnbG93KSIgLz4KPHBvbHlsaW5lIHBvaW50cz0iNjAsMzAwIDYwLDIyMCAxMjAsMTYwIDI1MCwxNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjUiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjMwMCIgcj0iNSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNyIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iMjIwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMTIwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMjUwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTE0MCw5MCAxMDgwLDkwIDEwNDAsNTAgOTYwLDUwIiBmaWxsPSJub25lIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC41Ii8+PGNpcmNsZSBjeD0iOTYwIiBjeT0iNTAiIHI9IjUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMTE0MCIgY3k9IjkwIiByPSI0IiBmaWxsPSIjZGMyNjI2IiAvPgo8cmVjdCB4PSIwIiB5PSIzMzYiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9Ijg0IiBmaWxsPSJ1cmwoI2duZCkiIC8+PHBhdGggZD0iTTAgMzM2SDEyMDAiIHN0cm9rZT0iI2NiZDVlMSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxlbGxpcHNlIGN4PSI2NTAiIGN5PSIzMzYiIHJ4PSIzMDAiIHJ5PSI5IiBmaWxsPSIjMGYxNzJhIiBvcGFjaXR5PSIwLjA4Ii8+CjxyZWN0IHg9IjQyMCIgeT0iMTkyIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEzOCIgZmlsbD0iI2YxZjVmOSIgLz48cmVjdCB4PSI3NDAiIHk9IjE2MiIgd2lkdGg9IjEzMCIgaGVpZ2h0PSIxNjgiIGZpbGw9IiNlMmU4ZjAiIC8+PHJlY3QgeD0iNTQwIiB5PSIxMDQiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjI2IiBmaWxsPSIjZmZmZmZmIiAvPjxyZWN0IHg9IjU0MCIgeT0iMTA0IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyIiBmaWxsPSIjZTJlOGYwIiAvPgo8cmVjdCB4PSI0NDAiIHk9IjIxNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI2IiBmaWxsPSIjOTlmNmU0IiAvPjxyZWN0IHg9IjQ0MCIgeT0iMjU0IiB3aWR0aD0iMjQiIGhlaWdodD0iMjYiIGZpbGw9IiM5OWY2ZTQiIC8+PHJlY3QgeD0iNDQwIiB5PSIyOTQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNiIgZmlsbD0iIzk5ZjZlNCIgLz48cmVjdCB4PSI0NzYiIHk9IjIxNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI2IiBmaWxsPSIjOTlmNmU0IiAvPjxyZWN0IHg9IjQ3NiIgeT0iMjU0IiB3aWR0aD0iMjQiIGhlaWdodD0iMjYiIGZpbGw9IiM5OWY2ZTQiIC8+PHJlY3QgeD0iNDc2IiB5PSIyOTQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNiIgZmlsbD0iIzk5ZjZlNCIgLz48cmVjdCB4PSI1MTIiIHk9IjIxNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI2IiBmaWxsPSIjOTlmNmU0IiAvPjxyZWN0IHg9IjUxMiIgeT0iMjU0IiB3aWR0aD0iMjQiIGhlaWdodD0iMjYiIGZpbGw9IiM5OWY2ZTQiIC8+PHJlY3QgeD0iNTEyIiB5PSIyOTQiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNiIgZmlsbD0iIzk5ZjZlNCIgLz48cmVjdCB4PSI3NjAiIHk9IjE4NCIgd2lkdGg9IjI2IiBoZWlnaHQ9IjI2IiBmaWxsPSIjOTlmNmU0IiAvPjxyZWN0IHg9Ijc2MCIgeT0iMjI0IiB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIGZpbGw9IiM5OWY2ZTQiIC8+PHJlY3QgeD0iNzYwIiB5PSIyNjQiIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgZmlsbD0iIzk5ZjZlNCIgLz48cmVjdCB4PSI3NjAiIHk9IjMwNCIgd2lkdGg9IjI2IiBoZWlnaHQ9IjI2IiBmaWxsPSIjOTlmNmU0IiAvPjxyZWN0IHg9IjgwMCIgeT0iMTg0IiB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIGZpbGw9IiM5OWY2ZTQiIC8+PHJlY3QgeD0iODAwIiB5PSIyMjQiIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgZmlsbD0iIzk5ZjZlNCIgLz48cmVjdCB4PSI4MDAiIHk9IjI2NCIgd2lkdGg9IjI2IiBoZWlnaHQ9IjI2IiBmaWxsPSIjOTlmNmU0IiAvPjxyZWN0IHg9IjgwMCIgeT0iMzA0IiB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIGZpbGw9IiM5OWY2ZTQiIC8+PHJlY3QgeD0iODQwIiB5PSIxODQiIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgZmlsbD0iIzk5ZjZlNCIgLz48cmVjdCB4PSI4NDAiIHk9IjIyNCIgd2lkdGg9IjI2IiBoZWlnaHQ9IjI2IiBmaWxsPSIjOTlmNmU0IiAvPjxyZWN0IHg9Ijg0MCIgeT0iMjY0IiB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIGZpbGw9IiM5OWY2ZTQiIC8+PHJlY3QgeD0iODQwIiB5PSIzMDQiIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgZmlsbD0iIzk5ZjZlNCIgLz48cmVjdCB4PSI1NjYiIHk9IjEzNiIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4IiBmaWxsPSIjOTlmNmU0IiAvPjxyZWN0IHg9IjU2NiIgeT0iMTc4IiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9IiM5OWY2ZTQiIC8+PHJlY3QgeD0iNTY2IiB5PSIyMjAiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0iIzk5ZjZlNCIgLz48cmVjdCB4PSI1NjYiIHk9IjI2MiIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4IiBmaWxsPSIjOTlmNmU0IiAvPjxyZWN0IHg9IjYwOCIgeT0iMTM2IiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9IiM5OWY2ZTQiIC8+PHJlY3QgeD0iNjA4IiB5PSIxNzgiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0iIzk5ZjZlNCIgLz48cmVjdCB4PSI2MDgiIHk9IjIyMCIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4IiBmaWxsPSIjOTlmNmU0IiAvPjxyZWN0IHg9IjYwOCIgeT0iMjYyIiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9IiM5OWY2ZTQiIC8+PHJlY3QgeD0iNjUwIiB5PSIxMzYiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0iIzk5ZjZlNCIgLz48cmVjdCB4PSI2NTAiIHk9IjE3OCIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4IiBmaWxsPSIjOTlmNmU0IiAvPjxyZWN0IHg9IjY1MCIgeT0iMjIwIiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9IiM5OWY2ZTQiIC8+PHJlY3QgeD0iNjUwIiB5PSIyNjIiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0iIzk5ZjZlNCIgLz48cmVjdCB4PSI2OTIiIHk9IjEzNiIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4IiBmaWxsPSIjOTlmNmU0IiAvPjxyZWN0IHg9IjY5MiIgeT0iMTc4IiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9IiM5OWY2ZTQiIC8+PHJlY3QgeD0iNjkyIiB5PSIyMjAiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0iIzk5ZjZlNCIgLz48cmVjdCB4PSI2OTIiIHk9IjI2MiIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4IiBmaWxsPSIjOTlmNmU0IiAvPgo8cmVjdCB4PSI2MDYiIHk9IjI3NCIgd2lkdGg9IjY4IiBoZWlnaHQ9IjU2IiBmaWxsPSIjNWVlYWQ0IiAvPjxyZWN0IHg9IjU5NCIgeT0iMjY0IiB3aWR0aD0iOTIiIGhlaWdodD0iMTAiIGZpbGw9IiMxNGI4YTYiIC8+PHJlY3QgeD0iNjM5IiB5PSIyNzQiIHdpZHRoPSIyIiBoZWlnaHQ9IjU2IiBmaWxsPSIjZmZmZmZmIiAvPgo8Y2lyY2xlIGN4PSI2NDAiIGN5PSI3MiIgcj0iMzQiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2RjMjYyNiIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHJlY3QgeD0iNjMwIiB5PSI1MiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZGMyNjI2IiAvPjxyZWN0IHg9IjYyMCIgeT0iNjIiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2RjMjYyNiIgLz4KPGNpcmNsZSBjeD0iOTAwIiBjeT0iMjk2IiByPSIzMCIgZmlsbD0iIzg2ZWZhYyIgLz48Y2lyY2xlIGN4PSI5MzAiIGN5PSIzMDgiIHI9IjIyIiBmaWxsPSIjNGFkZTgwIiAvPjxyZWN0IHg9Ijg5NiIgeT0iMzE2IiB3aWR0aD0iOCIgaGVpZ2h0PSIxOCIgZmlsbD0iIzY0NzQ4YiIgLz4KPGNpcmNsZSBjeD0iMzQwIiBjeT0iMzAwIiByPSIyNiIgZmlsbD0iIzg2ZWZhYyIgLz48Y2lyY2xlIGN4PSIzMTgiIGN5PSIzMTIiIHI9IjE4IiBmaWxsPSIjNGFkZTgwIiAvPjxyZWN0IHg9IjMzNiIgeT0iMzE4IiB3aWR0aD0iOCIgaGVpZ2h0PSIxNiIgZmlsbD0iIzY0NzQ4YiIgLz4KPGc+PHJlY3QgeD0iOTA0IiB5PSIxMDQiIHdpZHRoPSIxMzAiIGhlaWdodD0iNzgiIGZpbGw9IiMwZjE3MmEiIHJ4PSIxNCIgb3BhY2l0eT0iMC4wOCIvPjxyZWN0IHg9IjkwMCIgeT0iOTYiIHdpZHRoPSIxMzAiIGhlaWdodD0iNzgiIGZpbGw9IiNmZmZmZmYiIHJ4PSIxNCIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNOTY1IDE1MkM5NDUgMTM4IDkzNiAxMjggOTM2IDExOGExMCAxMCAwIDAgMSAxNy03bDEyIDkgMTItOWExMCAxMCAwIDAgMSAxNyA3YzAgMTAtOSAyMC0yOSAzNHoiIGZpbGw9IiNkYzI2MjYiIC8+PC9nPgo8cG9seWxpbmUgcG9pbnRzPSIyNTAsMzcyIDUyMCwzNzIgNTQ4LDM3MiA1NjYsMzQ2IDU5MCwzOTYgNjEyLDM2MCA2MjgsMzcyIDEwMDAsMzcyIiBmaWxsPSJub25lIiBzdHJva2U9IiNkYzI2MjYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIwLjkiLz4KPC9zdmc+",
   "story": {
    "context": {
     "title": {
      "en": "A phishing email, and patient records leave the hospital",
      "vi": "Một email lừa đảo, và hồ sơ bệnh nhân bị đưa ra ngoài"
     },
     "body": {
      "en": "A clerk in medical records clicks a fake insurance notice. The attacker signs in with that account and quietly copies patient files while wards fall back to paper charts. The hospital learns about it from the outside, after trust is already damaged.",
      "vi": "Một nhân viên hồ sơ bệnh án bấm vào thông báo bảo hiểm giả. Kẻ tấn công đăng nhập bằng tài khoản đó và âm thầm sao chép hồ sơ bệnh nhân, trong khi các khoa phải quay lại bệnh án giấy. Bệnh viện biết chuyện từ bên ngoài, khi niềm tin đã bị tổn hại."
     }
    },
    "entry": {
     "title": {
      "en": "Stop the entry point before it reaches patient records",
      "vi": "Chặn cửa ngõ trước khi chạm tới hồ sơ bệnh nhân"
     },
     "body": {
      "en": "Email defense blocks the lure at the gateway. Database Security and DLP add a second line, masking sensitive fields and flagging records that try to leave.",
      "vi": "Bảo vệ email chặn mồi nhử ngay tại cổng. Bảo mật cơ sở dữ liệu và DLP tạo lớp phòng thủ thứ hai, che các trường nhạy cảm và cảnh báo hồ sơ có dấu hiệu bị đưa ra ngoài."
     }
    }
   },
   "outcomes": [
    {
     "en": "Keep Care Running",
     "vi": "Giữ vận hành khám chữa bệnh liên tục"
    },
    {
     "en": "Protect Patient Trust",
     "vi": "Bảo vệ niềm tin người bệnh"
    },
    {
     "en": "Prepare for Compliance",
     "vi": "Chuẩn bị cho tuân thủ"
    }
   ]
  },
  {
   "id": "retail",
   "icon": "shopping-bag",
   "name": {
    "en": "E-Commerce & Retail",
    "vi": "Thương mại điện tử & Bán lẻ"
   },
   "bundle": [
    "anti-ddos-cdn",
    "web-waf",
    "email-security",
    "dlp",
    "ai-legal",
    "ai-agent"
   ],
   "image": "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80",
   "banner": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDQyMCIgd2lkdGg9IjEyMDAiIGhlaWdodD0iNDIwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBzbGljZSI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmMWYyIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmVjZGQzIi8+PC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJnbG93IiBjeD0iMC41IiBjeT0iMC41IiByPSIwLjUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZTRlNiIgc3RvcC1vcGFjaXR5PSIwLjkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmU0ZTYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ25kIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuNzUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC45NSIvPjwvbGluZWFyR3JhZGllbnQ+CjxwYXR0ZXJuIGlkPSJkb3RzIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxLjMiIGZpbGw9IiM5NGEzYjgiIG9wYWNpdHk9IjAuNCIvPjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI0MjAiIGZpbGw9InVybCgjYmcpIiAvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQyMCIgZmlsbD0idXJsKCNkb3RzKSIgb3BhY2l0eT0iMC41NSIvPgo8Y2lyY2xlIGN4PSI2NjAiIGN5PSIxOTAiIHI9IjI2MCIgZmlsbD0idXJsKCNnbG93KSIgLz4KPHBvbHlsaW5lIHBvaW50cz0iNjAsMzAwIDYwLDIyMCAxMjAsMTYwIDI1MCwxNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjUiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjMwMCIgcj0iNSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNyIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iMjIwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMTIwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMjUwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTE0MCw5MCAxMDgwLDkwIDEwNDAsNTAgOTYwLDUwIiBmaWxsPSJub25lIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC41Ii8+PGNpcmNsZSBjeD0iOTYwIiBjeT0iNTAiIHI9IjUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMTE0MCIgY3k9IjkwIiByPSI0IiBmaWxsPSIjZGMyNjI2IiAvPgo8cmVjdCB4PSIwIiB5PSIzMzYiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9Ijg0IiBmaWxsPSJ1cmwoI2duZCkiIC8+PHBhdGggZD0iTTAgMzM2SDEyMDAiIHN0cm9rZT0iI2NiZDVlMSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxlbGxpcHNlIGN4PSI2NTAiIGN5PSIzMzYiIHJ4PSIzMDAiIHJ5PSI5IiBmaWxsPSIjMGYxNzJhIiBvcGFjaXR5PSIwLjA4Ii8+CjxyZWN0IHg9IjQ3MCIgeT0iMTcwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE2MCIgZmlsbD0iI2ZmZmZmZiIgLz48cmVjdCB4PSI0NTUiIHk9IjEzOCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjM2IiBmaWxsPSIjZGMyNjI2IiAvPjxjaXJjbGUgY3g9IjQ3MCIgY3k9IjE3NCIgcj0iMTUiIGZpbGw9IiNkYzI2MjYiIC8+PHJlY3QgeD0iNDg1IiB5PSIxMzgiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzNiIgZmlsbD0iI2ZmZmZmZiIgLz48Y2lyY2xlIGN4PSI1MDAiIGN5PSIxNzQiIHI9IjE1IiBmaWxsPSIjZmZmZmZmIiAvPjxyZWN0IHg9IjUxNSIgeT0iMTM4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzYiIGZpbGw9IiNkYzI2MjYiIC8+PGNpcmNsZSBjeD0iNTMwIiBjeT0iMTc0IiByPSIxNSIgZmlsbD0iI2RjMjYyNiIgLz48cmVjdCB4PSI1NDUiIHk9IjEzOCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjM2IiBmaWxsPSIjZmZmZmZmIiAvPjxjaXJjbGUgY3g9IjU2MCIgY3k9IjE3NCIgcj0iMTUiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3QgeD0iNTc1IiB5PSIxMzgiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzNiIgZmlsbD0iI2RjMjYyNiIgLz48Y2lyY2xlIGN4PSI1OTAiIGN5PSIxNzQiIHI9IjE1IiBmaWxsPSIjZGMyNjI2IiAvPjxyZWN0IHg9IjYwNSIgeT0iMTM4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzYiIGZpbGw9IiNmZmZmZmYiIC8+PGNpcmNsZSBjeD0iNjIwIiBjeT0iMTc0IiByPSIxNSIgZmlsbD0iI2ZmZmZmZiIgLz48cmVjdCB4PSI2MzUiIHk9IjEzOCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjM2IiBmaWxsPSIjZGMyNjI2IiAvPjxjaXJjbGUgY3g9IjY1MCIgY3k9IjE3NCIgcj0iMTUiIGZpbGw9IiNkYzI2MjYiIC8+PHJlY3QgeD0iNjY1IiB5PSIxMzgiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzNiIgZmlsbD0iI2ZmZmZmZiIgLz48Y2lyY2xlIGN4PSI2ODAiIGN5PSIxNzQiIHI9IjE1IiBmaWxsPSIjZmZmZmZmIiAvPjxyZWN0IHg9IjY5NSIgeT0iMTM4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzYiIGZpbGw9IiNkYzI2MjYiIC8+PGNpcmNsZSBjeD0iNzEwIiBjeT0iMTc0IiByPSIxNSIgZmlsbD0iI2RjMjYyNiIgLz48cmVjdCB4PSI3MjUiIHk9IjEzOCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjM2IiBmaWxsPSIjZmZmZmZmIiAvPjxjaXJjbGUgY3g9Ijc0MCIgY3k9IjE3NCIgcj0iMTUiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3QgeD0iNzU1IiB5PSIxMzgiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzNiIgZmlsbD0iI2RjMjYyNiIgLz48Y2lyY2xlIGN4PSI3NzAiIGN5PSIxNzQiIHI9IjE1IiBmaWxsPSIjZGMyNjI2IiAvPgo8cmVjdCB4PSI1NDAiIHk9IjEwNCIgd2lkdGg9IjE2MCIgaGVpZ2h0PSIyNiIgZmlsbD0iI2ZmZmZmZiIgcng9IjgiIHN0cm9rZT0iI2UyZThmMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iNTYwIiBjeT0iMTE3IiByPSI2IiBmaWxsPSIjZGMyNjI2IiAvPjxyZWN0IHg9IjU3NiIgeT0iMTEyIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjY2JkNWUxIiByeD0iNSIvPgo8cmVjdCB4PSI0OTAiIHk9IjIwOCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSI5OCIgZmlsbD0iI2UwZjJmZSIgc3Ryb2tlPSIjY2JkNWUxIiBzdHJva2Utd2lkdGg9IjMiLz48cmVjdCB4PSI1MDIiIHk9IjI2NiIgd2lkdGg9IjEyNiIgaGVpZ2h0PSI2IiBmaWxsPSIjY2JkNWUxIiAvPjxyZWN0IHg9IjUwMiIgeT0iMjI2IiB3aWR0aD0iMTI2IiBoZWlnaHQ9IjYiIGZpbGw9IiNjYmQ1ZTEiIC8+CjxyZWN0IHg9IjUxMiIgeT0iMjQyIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IiNmZGE0YWYiIHJ4PSI0Ii8+PHJlY3QgeD0iNTQ4IiB5PSIyNTAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIxNiIgZmlsbD0iI2ZjZDM0ZCIgcng9IjQiLz48cmVjdCB4PSI1ODQiIHk9IjIzOCIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4IiBmaWxsPSIjYTViNGZjIiByeD0iNCIvPjxyZWN0IHg9IjUyMCIgeT0iMjAwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjYiIGZpbGw9IiNmZGE0YWYiIHJ4PSI0Ii8+PHJlY3QgeD0iNTcyIiB5PSIyMDAiIHdpZHRoPSIyOCIgaGVpZ2h0PSIyNiIgZmlsbD0iI2JiZjdkMCIgcng9IjQiLz4KPHJlY3QgeD0iNjYyIiB5PSIyMTgiIHdpZHRoPSI4MiIgaGVpZ2h0PSIxMTIiIGZpbGw9IiNlMmU4ZjAiIC8+PHJlY3QgeD0iNjcyIiB5PSIyMjgiIHdpZHRoPSI2MiIgaGVpZ2h0PSIxMDIiIGZpbGw9IiNlMGYyZmUiIC8+PGNpcmNsZSBjeD0iNzI0IiBjeT0iMjgyIiByPSI0IiBmaWxsPSIjNjQ3NDhiIiAvPgo8Zz48cmVjdCB4PSI4MzQiIHk9IjEwMCIgd2lkdGg9Ijk2IiBoZWlnaHQ9IjE4OCIgZmlsbD0iIzBmMTcyYSIgcng9IjE0IiBvcGFjaXR5PSIwLjA4Ii8+PHJlY3QgeD0iODMwIiB5PSI5MiIgd2lkdGg9Ijk2IiBoZWlnaHQ9IjE4OCIgZmlsbD0iI2ZmZmZmZiIgcng9IjE0IiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMiIvPjxyZWN0IHg9Ijg0NiIgeT0iMTEyIiB3aWR0aD0iNjQiIGhlaWdodD0iMzYiIGZpbGw9IiNmZWNkZDMiIHJ4PSI4Ii8+PHJlY3QgeD0iODQ2IiB5PSIxNTgiIHdpZHRoPSI2NCIgaGVpZ2h0PSIxNCIgZmlsbD0iI2UyZThmMCIgcng9IjYiLz48cmVjdCB4PSI4NDYiIHk9IjE4MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjE0IiBmaWxsPSIjZTJlOGYwIiByeD0iNiIvPjxjaXJjbGUgY3g9Ijg5MCIgY3k9IjIzOCIgcj0iMjIiIGZpbGw9IiMyMmM1NWUiIC8+PHBvbHlsaW5lIHBvaW50cz0iODgwLDIzOCA4ODgsMjQ3IDkwMiwyMzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L2c+CjxyZWN0IHg9IjM1MCIgeT0iMjc4IiB3aWR0aD0iNjQiIGhlaWdodD0iNTIiIGZpbGw9IiNmYmJmMjQiIC8+PHJlY3QgeD0iMzUwIiB5PSIyNzgiIHdpZHRoPSI2NCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2Q5NzcwNiIgLz48cmVjdCB4PSIzNzYiIHk9IjI3OCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjUyIiBmaWxsPSIjZmRlNjhhIiAvPjxyZWN0IHg9IjM4NiIgeT0iMjQ0IiB3aWR0aD0iNTIiIGhlaWdodD0iMzQiIGZpbGw9IiNmNTllMGIiIC8+PHJlY3QgeD0iMzg2IiB5PSIyNDQiIHdpZHRoPSI1MiIgaGVpZ2h0PSI4IiBmaWxsPSIjZDk3NzA2IiAvPgo8cGF0aCBkPSJNOTYwIDI1MGg3MGwtOCA4MGgtNTR6IiBmaWxsPSIjZGMyNjI2IiAvPjxwYXRoIGQ9Ik05NzggMjUwYzAtMjQgMzQtMjQgMzQgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDc1NTY5IiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4=",
   "story": {
    "context": {
     "title": {
      "en": "Flash-sale night: shoppers and bots arrive together",
      "vi": "Đêm flash sale: khách mua và bot cùng đổ về"
     },
     "body": {
      "en": "Traffic surges at midnight. Genuine buyers and malicious bots hit login, cart and checkout at the same moment, pages slow down, carts expire and the support inbox fills with \"where is my order?\".",
      "vi": "Lưu lượng tăng vọt lúc nửa đêm. Khách mua thật và bot độc hại cùng đổ vào đăng nhập, giỏ hàng và thanh toán, trang chậm dần, giỏ hàng hết hạn và hộp thư hỗ trợ ngập câu hỏi \"đơn hàng của tôi đâu?\"."
     }
    },
    "entry": {
     "title": {
      "en": "Stop the entry point at the edge, before it reaches checkout",
      "vi": "Chặn cửa ngõ ngay ở biên, trước khi vào thanh toán"
     },
     "body": {
      "en": "Anti-DDoS and CDN absorb the flood, the WAF protects login, cart and checkout, and an AI Agent answers shoppers instantly across channels.",
      "vi": "Anti-DDoS và CDN hấp thụ lưu lượng đột biến, WAF bảo vệ đăng nhập, giỏ hàng và thanh toán, còn AI Agent trả lời khách ngay lập tức trên mọi kênh."
     }
    }
   },
   "outcomes": [
    {
     "en": "Sell Without Interruption",
     "vi": "Bán hàng không gián đoạn"
    },
    {
     "en": "Protect Customer Trust and Compliance",
     "vi": "Bảo vệ niềm tin khách hàng và tuân thủ"
    },
    {
     "en": "Lower Risk and Operating Cost",
     "vi": "Giảm rủi ro và chi phí vận hành"
    }
   ]
  },
  {
   "id": "manufacturing",
   "icon": "factory",
   "name": {
    "en": "Manufacturing",
    "vi": "Sản xuất"
   },
   "bundle": [
    "email-security",
    "database-security",
    "dlp"
   ],
   "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
   "banner": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDQyMCIgd2lkdGg9IjEyMDAiIGhlaWdodD0iNDIwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBzbGljZSI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmYmViIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmRlNjhhIi8+PC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJnbG93IiBjeD0iMC41IiBjeT0iMC41IiByPSIwLjUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZlZjNjNyIgc3RvcC1vcGFjaXR5PSIwLjkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZWYzYzciIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ25kIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuNzUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC45NSIvPjwvbGluZWFyR3JhZGllbnQ+CjxwYXR0ZXJuIGlkPSJkb3RzIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxLjMiIGZpbGw9IiM5NGEzYjgiIG9wYWNpdHk9IjAuNCIvPjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI0MjAiIGZpbGw9InVybCgjYmcpIiAvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQyMCIgZmlsbD0idXJsKCNkb3RzKSIgb3BhY2l0eT0iMC41NSIvPgo8Y2lyY2xlIGN4PSI2NjAiIGN5PSIxOTAiIHI9IjI2MCIgZmlsbD0idXJsKCNnbG93KSIgLz4KPHBvbHlsaW5lIHBvaW50cz0iNjAsMzAwIDYwLDIyMCAxMjAsMTYwIDI1MCwxNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjUiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjMwMCIgcj0iNSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNyIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iMjIwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMTIwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMjUwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTE0MCw5MCAxMDgwLDkwIDEwNDAsNTAgOTYwLDUwIiBmaWxsPSJub25lIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC41Ii8+PGNpcmNsZSBjeD0iOTYwIiBjeT0iNTAiIHI9IjUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMTE0MCIgY3k9IjkwIiByPSI0IiBmaWxsPSIjZGMyNjI2IiAvPgo8cmVjdCB4PSIwIiB5PSIzMzYiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9Ijg0IiBmaWxsPSJ1cmwoI2duZCkiIC8+PHBhdGggZD0iTTAgMzM2SDEyMDAiIHN0cm9rZT0iI2NiZDVlMSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxlbGxpcHNlIGN4PSI2NTAiIGN5PSIzMzYiIHJ4PSIzMzAiIHJ5PSI5IiBmaWxsPSIjMGYxNzJhIiBvcGFjaXR5PSIwLjA4Ii8+CjxyZWN0IHg9IjQzMCIgeT0iMjE0IiB3aWR0aD0iMzMwIiBoZWlnaHQ9IjExNiIgZmlsbD0iI2ZmZmZmZiIgLz48cmVjdCB4PSI0MzAiIHk9IjI5MCIgd2lkdGg9IjMzMCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2UyZThmMCIgLz48cGF0aCBkPSJNNDMwIDIxNEw0MzAgMTcwTDUxMiAyMTRaIiBmaWxsPSIjZTJlOGYwIiAvPjxwYXRoIGQ9Ik00MzggMjA1TDQzOCAxODNMNDkyIDIwNVoiIGZpbGw9IiNiYWU2ZmQiIG9wYWNpdHk9IjAuOTUiLz48cGF0aCBkPSJNNTEyIDIxNEw1MTIgMTcwTDU5NCAyMTRaIiBmaWxsPSIjZTJlOGYwIiAvPjxwYXRoIGQ9Ik01MjAgMjA1TDUyMCAxODNMNTc0IDIwNVoiIGZpbGw9IiNiYWU2ZmQiIG9wYWNpdHk9IjAuOTUiLz48cGF0aCBkPSJNNTk0IDIxNEw1OTQgMTcwTDY3NiAyMTRaIiBmaWxsPSIjZTJlOGYwIiAvPjxwYXRoIGQ9Ik02MDIgMjA1TDYwMiAxODNMNjU2IDIwNVoiIGZpbGw9IiNiYWU2ZmQiIG9wYWNpdHk9IjAuOTUiLz48cGF0aCBkPSJNNjc2IDIxNEw2NzYgMTcwTDc1OCAyMTRaIiBmaWxsPSIjZTJlOGYwIiAvPjxwYXRoIGQ9Ik02ODQgMjA1TDY4NCAxODNMNzM4IDIwNVoiIGZpbGw9IiNiYWU2ZmQiIG9wYWNpdHk9IjAuOTUiLz4KPHJlY3QgeD0iNzYwIiB5PSIyNTIiIHdpZHRoPSIxNTAiIGhlaWdodD0iNzgiIGZpbGw9IiNmMWY1ZjkiIC8+PHJlY3QgeD0iNzYwIiB5PSIyNTIiIHdpZHRoPSIxNTAiIGhlaWdodD0iOCIgZmlsbD0iI2NiZDVlMSIgLz4KPHJlY3QgeD0iNDUyIiB5PSIyMzgiIHdpZHRoPSI0NCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2JhZTZmZCIgLz48cmVjdCB4PSI1MTQiIHk9IjIzOCIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMwIiBmaWxsPSIjYmFlNmZkIiAvPjxyZWN0IHg9IjU3NiIgeT0iMjM4IiB3aWR0aD0iNDQiIGhlaWdodD0iMzAiIGZpbGw9IiNiYWU2ZmQiIC8+PHJlY3QgeD0iNjM4IiB5PSIyMzgiIHdpZHRoPSI0NCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2JhZTZmZCIgLz48cmVjdCB4PSI3MDAiIHk9IjIzOCIgd2lkdGg9IjQ0IiBoZWlnaHQ9IjMwIiBmaWxsPSIjYmFlNmZkIiAvPgo8cmVjdCB4PSI0NTgiIHk9IjI5MiIgd2lkdGg9IjcwIiBoZWlnaHQ9IjM4IiBmaWxsPSIjOTRhM2I4IiAvPjxyZWN0IHg9IjU2OCIgeT0iMjkyIiB3aWR0aD0iNzAiIGhlaWdodD0iMzgiIGZpbGw9IiM5NGEzYjgiIC8+PHJlY3QgeD0iNjc4IiB5PSIyOTIiIHdpZHRoPSI3MCIgaGVpZ2h0PSIzOCIgZmlsbD0iIzk0YTNiOCIgLz4KPHJlY3QgeD0iNzkwIiB5PSIxMDgiIHdpZHRoPSIzNCIgaGVpZ2h0PSIyMjIiIGZpbGw9IiNjYmQ1ZTEiIC8+PHJlY3QgeD0iNzkwIiB5PSIxMzAiIHdpZHRoPSIzNCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2RjMjYyNiIgLz48cmVjdCB4PSI3OTAiIHk9IjE1MiIgd2lkdGg9IjM0IiBoZWlnaHQ9IjEwIiBmaWxsPSIjZGMyNjI2IiAvPjxyZWN0IHg9Ijg0MiIgeT0iMTUwIiB3aWR0aD0iMjgiIGhlaWdodD0iMTgwIiBmaWxsPSIjY2JkNWUxIiAvPjxyZWN0IHg9Ijg0MiIgeT0iMTcwIiB3aWR0aD0iMjgiIGhlaWdodD0iOCIgZmlsbD0iI2RjMjYyNiIgLz4KPGNpcmNsZSBjeD0iODA4IiBjeT0iODgiIHI9IjIyIiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjkiLz48Y2lyY2xlIGN4PSI4MzQiIGN5PSI2MCIgcj0iMjgiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuOCIvPjxjaXJjbGUgY3g9Ijg2OCIgY3k9IjM4IiByPSIyMCIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC43Ii8+CjxyZWN0IHg9IjI5MCIgeT0iMzE4IiB3aWR0aD0iNTYwIiBoZWlnaHQ9IjEyIiBmaWxsPSIjNDc1NTY5IiAvPjxjaXJjbGUgY3g9IjMxMCIgY3k9IjMyNCIgcj0iMyIgZmlsbD0iIzk0YTNiOCIgLz48Y2lyY2xlIGN4PSIzNTAiIGN5PSIzMjQiIHI9IjMiIGZpbGw9IiM5NGEzYjgiIC8+PGNpcmNsZSBjeD0iMzkwIiBjeT0iMzI0IiByPSIzIiBmaWxsPSIjOTRhM2I4IiAvPjxjaXJjbGUgY3g9IjQzMCIgY3k9IjMyNCIgcj0iMyIgZmlsbD0iIzk0YTNiOCIgLz48Y2lyY2xlIGN4PSI0NzAiIGN5PSIzMjQiIHI9IjMiIGZpbGw9IiM5NGEzYjgiIC8+PGNpcmNsZSBjeD0iNTEwIiBjeT0iMzI0IiByPSIzIiBmaWxsPSIjOTRhM2I4IiAvPjxjaXJjbGUgY3g9IjU1MCIgY3k9IjMyNCIgcj0iMyIgZmlsbD0iIzk0YTNiOCIgLz48Y2lyY2xlIGN4PSI1OTAiIGN5PSIzMjQiIHI9IjMiIGZpbGw9IiM5NGEzYjgiIC8+PGNpcmNsZSBjeD0iNjMwIiBjeT0iMzI0IiByPSIzIiBmaWxsPSIjOTRhM2I4IiAvPjxjaXJjbGUgY3g9IjY3MCIgY3k9IjMyNCIgcj0iMyIgZmlsbD0iIzk0YTNiOCIgLz48Y2lyY2xlIGN4PSI3MTAiIGN5PSIzMjQiIHI9IjMiIGZpbGw9IiM5NGEzYjgiIC8+PGNpcmNsZSBjeD0iNzUwIiBjeT0iMzI0IiByPSIzIiBmaWxsPSIjOTRhM2I4IiAvPjxjaXJjbGUgY3g9Ijc5MCIgY3k9IjMyNCIgcj0iMyIgZmlsbD0iIzk0YTNiOCIgLz48Y2lyY2xlIGN4PSI4MzAiIGN5PSIzMjQiIHI9IjMiIGZpbGw9IiM5NGEzYjgiIC8+CjxyZWN0IHg9IjMzMCIgeT0iMjkyIiB3aWR0aD0iMzQiIGhlaWdodD0iMjYiIGZpbGw9IiNmNTllMGIiIC8+PHJlY3QgeD0iMzMwIiB5PSIyOTIiIHdpZHRoPSIzNCIgaGVpZ2h0PSI3IiBmaWxsPSIjZDk3NzA2IiAvPjxyZWN0IHg9IjM0NSIgeT0iMjkyIiB3aWR0aD0iNCIgaGVpZ2h0PSIyNiIgZmlsbD0iI2ZkZTY4YSIgLz48cmVjdCB4PSI0MDAiIHk9IjI5MiIgd2lkdGg9IjM0IiBoZWlnaHQ9IjI2IiBmaWxsPSIjZjU5ZTBiIiAvPjxyZWN0IHg9IjQwMCIgeT0iMjkyIiB3aWR0aD0iMzQiIGhlaWdodD0iNyIgZmlsbD0iI2Q5NzcwNiIgLz48cmVjdCB4PSI0MTUiIHk9IjI5MiIgd2lkdGg9IjQiIGhlaWdodD0iMjYiIGZpbGw9IiNmZGU2OGEiIC8+PHJlY3QgeD0iNDgwIiB5PSIyOTIiIHdpZHRoPSIzNCIgaGVpZ2h0PSIyNiIgZmlsbD0iI2Y1OWUwYiIgLz48cmVjdCB4PSI0ODAiIHk9IjI5MiIgd2lkdGg9IjM0IiBoZWlnaHQ9IjciIGZpbGw9IiNkOTc3MDYiIC8+PHJlY3QgeD0iNDk1IiB5PSIyOTIiIHdpZHRoPSI0IiBoZWlnaHQ9IjI2IiBmaWxsPSIjZmRlNjhhIiAvPjxyZWN0IHg9IjU4MCIgeT0iMjkyIiB3aWR0aD0iMzQiIGhlaWdodD0iMjYiIGZpbGw9IiNmNTllMGIiIC8+PHJlY3QgeD0iNTgwIiB5PSIyOTIiIHdpZHRoPSIzNCIgaGVpZ2h0PSI3IiBmaWxsPSIjZDk3NzA2IiAvPjxyZWN0IHg9IjU5NSIgeT0iMjkyIiB3aWR0aD0iNCIgaGVpZ2h0PSIyNiIgZmlsbD0iI2ZkZTY4YSIgLz48cmVjdCB4PSI2OTAiIHk9IjI5MiIgd2lkdGg9IjM0IiBoZWlnaHQ9IjI2IiBmaWxsPSIjZjU5ZTBiIiAvPjxyZWN0IHg9IjY5MCIgeT0iMjkyIiB3aWR0aD0iMzQiIGhlaWdodD0iNyIgZmlsbD0iI2Q5NzcwNiIgLz48cmVjdCB4PSI3MDUiIHk9IjI5MiIgd2lkdGg9IjQiIGhlaWdodD0iMjYiIGZpbGw9IiNmZGU2OGEiIC8+CjxyZWN0IHg9IjM0MCIgeT0iMjk2IiB3aWR0aD0iNDQiIGhlaWdodD0iMjIiIGZpbGw9IiM0NzU1NjkiIC8+PHBhdGggZD0iTTM2MiAyOTZMMzUwIDI0MEw0MDIgMjE0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NDc0OGIiIHN0cm9rZS13aWR0aD0iMTIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjM1MCIgY3k9IjI0MCIgcj0iMTIiIGZpbGw9IiNkYzI2MjYiIC8+PGNpcmNsZSBjeD0iNDAyIiBjeT0iMjE0IiByPSI4IiBmaWxsPSIjNDc1NTY5IiAvPjxwYXRoIGQ9Ik00MDIgMjA2TDQyNCAxOTZNNDAyIDIyMkw0MjQgMjMyIiBmaWxsPSJub25lIiBzdHJva2U9IiM0NzU1NjkiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik05ODQuMCAyNjQuMEw5NzQuMyAyNzUuMUw5NzUuNiAyODkuOUw5NjEuMiAyOTMuMkw5NTMuNiAzMDUuOEw5NDAuMCAzMDAuMUw5MjYuNCAzMDUuOEw5MTguOCAyOTMuMkw5MDQuNCAyODkuOUw5MDUuNyAyNzUuMUw4OTYuMCAyNjQuMEw5MDUuNyAyNTIuOUw5MDQuNCAyMzguMUw5MTguOCAyMzQuOEw5MjYuNCAyMjIuMkw5NDAuMCAyMjcuOUw5NTMuNiAyMjIuMkw5NjEuMiAyMzQuOEw5NzUuNiAyMzguMUw5NzQuMyAyNTIuOVoiIGZpbGw9IiM5NGEzYjgiLz48Y2lyY2xlIGN4PSI5NDAiIGN5PSIyNjQiIHI9IjE1LjM5OTk5OTk5OTk5OTk5OSIgZmlsbD0iI2ZmZmZmZiIgLz48cGF0aCBkPSJNMTAyOC4wIDIyNC4wTDEwMjEuMiAyMzIuOEwxMDE5LjggMjQzLjhMMTAwOC44IDI0NS4yTDEwMDAuMCAyNTIuMEw5OTEuMiAyNDUuMkw5ODAuMiAyNDMuOEw5NzguOCAyMzIuOEw5NzIuMCAyMjQuMEw5NzguOCAyMTUuMkw5ODAuMiAyMDQuMkw5OTEuMiAyMDIuOEwxMDAwLjAgMTk2LjBMMTAwOC44IDIwMi44TDEwMTkuOCAyMDQuMkwxMDIxLjIgMjE1LjJaIiBmaWxsPSIjY2JkNWUxIi8+PGNpcmNsZSBjeD0iMTAwMCIgY3k9IjIyNCIgcj0iOS43OTk5OTk5OTk5OTk5OTkiIGZpbGw9IiNmZmZmZmYiIC8+Cjwvc3ZnPg==",
   "story": {
    "context": {
     "title": {
      "en": "One supplier invoice, and the production line stops",
      "vi": "Một email hóa đơn nhà cung cấp, và dây chuyền ngừng chạy"
     },
     "body": {
      "en": "At 7:40 a.m. a planner opens an invoice that looks like it came from a regular supplier. By mid-morning the ransomware has moved from the office network into ERP and MES. Orders freeze, shipments slip and every hour of downtime turns into penalties.",
      "vi": "Lúc 7:40 sáng, nhân viên kế hoạch mở một hóa đơn trông như của nhà cung cấp quen thuộc. Đến giữa buổi, ransomware đã lan từ mạng văn phòng sang ERP và MES. Đơn hàng đứng yên, lô hàng trễ hạn và mỗi giờ ngừng trệ đều trở thành tiền phạt."
     }
    },
    "entry": {
     "title": {
      "en": "Stop the entry point before it reaches the office network",
      "vi": "Chặn cửa ngõ trước khi vào mạng văn phòng"
     },
     "body": {
      "en": "Email defense on sovereign VCLOUD filters spoofed invoices and ransomware at the gateway, so nothing malicious reaches the systems that run the line.",
      "vi": "Bảo vệ email trên VCLOUD chủ quyền lọc hóa đơn giả mạo và ransomware ngay tại cổng, để không gì độc hại chạm tới các hệ thống vận hành dây chuyền."
     }
    }
   },
   "outcomes": [
    {
     "en": "Keep Production Running",
     "vi": "Giữ sản xuất vận hành liên tục"
    },
    {
     "en": "Protect Intellectual Property",
     "vi": "Bảo vệ tài sản trí tuệ"
    },
    {
     "en": "Win and Keep Customers",
     "vi": "Giành và giữ khách hàng"
    }
   ]
  },
  {
   "id": "logistics",
   "icon": "truck",
   "name": {
    "en": "Logistics",
    "vi": "Logistics - Vận tải - Kho vận"
   },
   "bundle": [
    "email-security",
    "database-security",
    "dlp",
    "ai-legal"
   ],
   "image": null,
   "banner": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDQyMCIgd2lkdGg9IjEyMDAiIGhlaWdodD0iNDIwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBzbGljZSI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZWNmZWZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYTVmM2ZjIi8+PC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJnbG93IiBjeD0iMC41IiBjeT0iMC41IiByPSIwLjUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2NmZmFmZSIgc3RvcC1vcGFjaXR5PSIwLjkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNjZmZhZmUiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ25kIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuNzUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC45NSIvPjwvbGluZWFyR3JhZGllbnQ+CjxwYXR0ZXJuIGlkPSJkb3RzIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxLjMiIGZpbGw9IiM5NGEzYjgiIG9wYWNpdHk9IjAuNCIvPjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI0MjAiIGZpbGw9InVybCgjYmcpIiAvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQyMCIgZmlsbD0idXJsKCNkb3RzKSIgb3BhY2l0eT0iMC41NSIvPgo8Y2lyY2xlIGN4PSI2NjAiIGN5PSIxOTAiIHI9IjI2MCIgZmlsbD0idXJsKCNnbG93KSIgLz4KPHBvbHlsaW5lIHBvaW50cz0iNjAsMzAwIDYwLDIyMCAxMjAsMTYwIDI1MCwxNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjUiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjMwMCIgcj0iNSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNyIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iMjIwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMTIwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMjUwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTE0MCw5MCAxMDgwLDkwIDEwNDAsNTAgOTYwLDUwIiBmaWxsPSJub25lIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC41Ii8+PGNpcmNsZSBjeD0iOTYwIiBjeT0iNTAiIHI9IjUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMTE0MCIgY3k9IjkwIiByPSI0IiBmaWxsPSIjZGMyNjI2IiAvPgo8cmVjdCB4PSIwIiB5PSIzMzYiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9Ijg0IiBmaWxsPSJ1cmwoI2duZCkiIC8+PHBhdGggZD0iTTAgMzM2SDEyMDAiIHN0cm9rZT0iI2NiZDVlMSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxlbGxpcHNlIGN4PSI2NTAiIGN5PSIzMzYiIHJ4PSIzNDAiIHJ5PSI5IiBmaWxsPSIjMGYxNzJhIiBvcGFjaXR5PSIwLjA4Ii8+CjxyZWN0IHg9IjM4MCIgeT0iMjAwIiB3aWR0aD0iMjcwIiBoZWlnaHQ9IjEzMCIgZmlsbD0iI2ZmZmZmZiIgLz48cGF0aCBkPSJNMzcwIDIwMEw2NDAgMjAwTDY1MCAxODRMMzgwIDE4NFoiIGZpbGw9IiNlMmU4ZjAiIC8+PHJlY3QgeD0iMzgwIiB5PSIxODQiIHdpZHRoPSIyNzAiIGhlaWdodD0iOCIgZmlsbD0iI2NiZDVlMSIgLz4KPHJlY3QgeD0iNDAwIiB5PSIyNTAiIHdpZHRoPSI2NiIgaGVpZ2h0PSI4MCIgZmlsbD0iI2NiZDVlMSIgLz48cmVjdCB4PSI0MDAiIHk9IjI1NCIgd2lkdGg9IjY2IiBoZWlnaHQ9IjIiIGZpbGw9IiM5NGEzYjgiIC8+PHJlY3QgeD0iNDAwIiB5PSIyNjkiIHdpZHRoPSI2NiIgaGVpZ2h0PSIyIiBmaWxsPSIjOTRhM2I4IiAvPjxyZWN0IHg9IjQwMCIgeT0iMjg0IiB3aWR0aD0iNjYiIGhlaWdodD0iMiIgZmlsbD0iIzk0YTNiOCIgLz48cmVjdCB4PSI0MDAiIHk9IjI5OSIgd2lkdGg9IjY2IiBoZWlnaHQ9IjIiIGZpbGw9IiM5NGEzYjgiIC8+PHJlY3QgeD0iNDAwIiB5PSIzMTQiIHdpZHRoPSI2NiIgaGVpZ2h0PSIyIiBmaWxsPSIjOTRhM2I4IiAvPjxyZWN0IHg9IjQ4MiIgeT0iMjUwIiB3aWR0aD0iNjYiIGhlaWdodD0iODAiIGZpbGw9IiNjYmQ1ZTEiIC8+PHJlY3QgeD0iNDgyIiB5PSIyNTQiIHdpZHRoPSI2NiIgaGVpZ2h0PSIyIiBmaWxsPSIjOTRhM2I4IiAvPjxyZWN0IHg9IjQ4MiIgeT0iMjY5IiB3aWR0aD0iNjYiIGhlaWdodD0iMiIgZmlsbD0iIzk0YTNiOCIgLz48cmVjdCB4PSI0ODIiIHk9IjI4NCIgd2lkdGg9IjY2IiBoZWlnaHQ9IjIiIGZpbGw9IiM5NGEzYjgiIC8+PHJlY3QgeD0iNDgyIiB5PSIyOTkiIHdpZHRoPSI2NiIgaGVpZ2h0PSIyIiBmaWxsPSIjOTRhM2I4IiAvPjxyZWN0IHg9IjQ4MiIgeT0iMzE0IiB3aWR0aD0iNjYiIGhlaWdodD0iMiIgZmlsbD0iIzk0YTNiOCIgLz48cmVjdCB4PSI1NjQiIHk9IjI1MCIgd2lkdGg9IjY2IiBoZWlnaHQ9IjgwIiBmaWxsPSIjY2JkNWUxIiAvPjxyZWN0IHg9IjU2NCIgeT0iMjU0IiB3aWR0aD0iNjYiIGhlaWdodD0iMiIgZmlsbD0iIzk0YTNiOCIgLz48cmVjdCB4PSI1NjQiIHk9IjI2OSIgd2lkdGg9IjY2IiBoZWlnaHQ9IjIiIGZpbGw9IiM5NGEzYjgiIC8+PHJlY3QgeD0iNTY0IiB5PSIyODQiIHdpZHRoPSI2NiIgaGVpZ2h0PSIyIiBmaWxsPSIjOTRhM2I4IiAvPjxyZWN0IHg9IjU2NCIgeT0iMjk5IiB3aWR0aD0iNjYiIGhlaWdodD0iMiIgZmlsbD0iIzk0YTNiOCIgLz48cmVjdCB4PSI1NjQiIHk9IjMxNCIgd2lkdGg9IjY2IiBoZWlnaHQ9IjIiIGZpbGw9IiM5NGEzYjgiIC8+CjxyZWN0IHg9IjY3NiIgeT0iMjM2IiB3aWR0aD0iMTkwIiBoZWlnaHQ9Ijk0IiBmaWxsPSIjZmZmZmZmIiAvPjxyZWN0IHg9IjY3NiIgeT0iMjM2IiB3aWR0aD0iMTkwIiBoZWlnaHQ9IjgiIGZpbGw9IiNlMmU4ZjAiIC8+PHJlY3QgeD0iNjc2IiB5PSIyODAiIHdpZHRoPSIxOTAiIGhlaWdodD0iMTAiIGZpbGw9IiNkYzI2MjYiIC8+CjxwYXRoIGQ9Ik04NjYgMjYyaDQybDI0IDMwdjM4aC02NnoiIGZpbGw9IiNmZmZmZmYiIC8+PHBhdGggZD0iTTg3NiAyNzBoMjhsMTYgMjBoLTQ0eiIgZmlsbD0iI2JhZTZmZCIgLz4KPGNpcmNsZSBjeD0iNzIyIiBjeT0iMzMyIiByPSIyMCIgZmlsbD0iIzFlMjkzYiIgLz48Y2lyY2xlIGN4PSI3MjIiIGN5PSIzMzIiIHI9IjgiIGZpbGw9IiNjYmQ1ZTEiIC8+PGNpcmNsZSBjeD0iODMwIiBjeT0iMzMyIiByPSIyMCIgZmlsbD0iIzFlMjkzYiIgLz48Y2lyY2xlIGN4PSI4MzAiIGN5PSIzMzIiIHI9IjgiIGZpbGw9IiNjYmQ1ZTEiIC8+PGNpcmNsZSBjeD0iOTA0IiBjeT0iMzMyIiByPSIyMCIgZmlsbD0iIzFlMjkzYiIgLz48Y2lyY2xlIGN4PSI5MDQiIGN5PSIzMzIiIHI9IjgiIGZpbGw9IiNjYmQ1ZTEiIC8+CjxyZWN0IHg9Ijk1MCIgeT0iMjcwIiB3aWR0aD0iNzAiIGhlaWdodD0iNjAiIGZpbGw9IiNkYzI2MjYiIC8+PHJlY3QgeD0iOTUwIiB5PSIyMTAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzM4YmRmOCIgLz48cmVjdCB4PSI5NTAiIHk9IjE1MCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjNjQ3NDhiIiAvPgo8cmVjdCB4PSI5NTgiIHk9IjE1NiIgd2lkdGg9IjMiIGhlaWdodD0iNDgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC40NSkiIC8+PHJlY3QgeD0iOTc0IiB5PSIxNTYiIHdpZHRoPSIzIiBoZWlnaHQ9IjQ4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuNDUpIiAvPjxyZWN0IHg9Ijk5MCIgeT0iMTU2IiB3aWR0aD0iMyIgaGVpZ2h0PSI0OCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjQ1KSIgLz48cmVjdCB4PSIxMDA2IiB5PSIxNTYiIHdpZHRoPSIzIiBoZWlnaHQ9IjQ4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuNDUpIiAvPjxyZWN0IHg9Ijk1OCIgeT0iMjE2IiB3aWR0aD0iMyIgaGVpZ2h0PSI0OCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjQ1KSIgLz48cmVjdCB4PSI5NzQiIHk9IjIxNiIgd2lkdGg9IjMiIGhlaWdodD0iNDgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC40NSkiIC8+PHJlY3QgeD0iOTkwIiB5PSIyMTYiIHdpZHRoPSIzIiBoZWlnaHQ9IjQ4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuNDUpIiAvPjxyZWN0IHg9IjEwMDYiIHk9IjIxNiIgd2lkdGg9IjMiIGhlaWdodD0iNDgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC40NSkiIC8+PHJlY3QgeD0iOTU4IiB5PSIyNzYiIHdpZHRoPSIzIiBoZWlnaHQ9IjQ4IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuNDUpIiAvPjxyZWN0IHg9Ijk3NCIgeT0iMjc2IiB3aWR0aD0iMyIgaGVpZ2h0PSI0OCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjQ1KSIgLz48cmVjdCB4PSI5OTAiIHk9IjI3NiIgd2lkdGg9IjMiIGhlaWdodD0iNDgiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC40NSkiIC8+PHJlY3QgeD0iMTAwNiIgeT0iMjc2IiB3aWR0aD0iMyIgaGVpZ2h0PSI0OCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjQ1KSIgLz4KPHBhdGggZD0iTTI1MCAzODBDMzgwIDM4MCA0NDAgMTUwIDYwMCAxMzBTODYwIDExMCAxMDAwIDk2IiBmaWxsPSJub25lIiBzdHJva2U9IiNkYzI2MjYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWRhc2hhcnJheT0iMyAxMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxjaXJjbGUgY3g9IjI1MCIgY3k9IjM4MCIgcj0iOSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZGMyNjI2IiBzdHJva2Utd2lkdGg9IjQiLz48Y2lyY2xlIGN4PSIxMDAwIiBjeT0iOTYiIHI9IjkiIGZpbGw9IiNkYzI2MjYiIC8+PHBhdGggZD0iTTEwMDAgNjJsMTQgMjJoLTI4eiIgZmlsbD0iIzQ3NTU2OSIgLz4KPC9zdmc+",
   "story": {
    "context": {
     "title": {
      "en": "A \"changed bank account\" email redirects a freight payment",
      "vi": "Email \"đổi số tài khoản\" chuyển hướng khoản thanh toán cước"
     },
     "body": {
      "en": "In peak season a message from a carrier partner asks finance to update bank details. The payment goes to the wrong account just as tracking systems slow down and drivers wait for dispatch data.",
      "vi": "Vào mùa cao điểm, một email từ đối tác vận tải đề nghị kế toán cập nhật tài khoản ngân hàng. Khoản thanh toán chuyển nhầm tài khoản đúng lúc hệ thống theo dõi chậm lại và tài xế chờ dữ liệu điều phối."
     }
    },
    "entry": {
     "title": {
      "en": "Stop the entry point before it reaches finance and dispatch",
      "vi": "Chặn cửa ngõ trước khi vào kế toán và điều phối"
     },
     "body": {
      "en": "Email defense on VCLOUD catches spoofed partner messages at the gateway, and Database Security keeps shipment and partner data under query-level control.",
      "vi": "Bảo vệ email trên VCLOUD phát hiện email giả mạo đối tác ngay tại cổng, còn Bảo mật cơ sở dữ liệu giữ dữ liệu vận đơn và đối tác dưới sự kiểm soát mức truy vấn."
     }
    }
   },
   "outcomes": [
    {
     "en": "Protect Cash and Cargo Flow",
     "vi": "Bảo vệ dòng tiền và dòng hàng"
    },
    {
     "en": "Protect Customer, Partner and Driver Data",
     "vi": "Bảo vệ dữ liệu khách hàng, đối tác và tài xế"
    },
    {
     "en": "Cut Manual Document Work",
     "vi": "Giảm công việc chứng từ thủ công"
    }
   ]
  },
  {
   "id": "media",
   "icon": "clapperboard",
   "name": {
    "en": "Media & Digital Content",
    "vi": "Truyền thông & Nội dung số"
   },
   "bundle": [
    "cdn",
    "anti-ddos-waf",
    "email-security",
    "dlp",
    "ai-legal"
   ],
   "image": null,
   "banner": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDQyMCIgd2lkdGg9IjEyMDAiIGhlaWdodD0iNDIwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBzbGljZSI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmRmNGZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmJjZmU4Ii8+PC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJnbG93IiBjeD0iMC41IiBjeT0iMC41IiByPSIwLjUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZjZTdmMyIgc3RvcC1vcGFjaXR5PSIwLjkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmY2U3ZjMiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ25kIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuNzUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC45NSIvPjwvbGluZWFyR3JhZGllbnQ+CjxwYXR0ZXJuIGlkPSJkb3RzIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxLjMiIGZpbGw9IiM5NGEzYjgiIG9wYWNpdHk9IjAuNCIvPjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI0MjAiIGZpbGw9InVybCgjYmcpIiAvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQyMCIgZmlsbD0idXJsKCNkb3RzKSIgb3BhY2l0eT0iMC41NSIvPgo8Y2lyY2xlIGN4PSI2NjAiIGN5PSIxOTAiIHI9IjI2MCIgZmlsbD0idXJsKCNnbG93KSIgLz4KPHBvbHlsaW5lIHBvaW50cz0iNjAsMzAwIDYwLDIyMCAxMjAsMTYwIDI1MCwxNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjUiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjMwMCIgcj0iNSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNyIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iMjIwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMTIwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMjUwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTE0MCw5MCAxMDgwLDkwIDEwNDAsNTAgOTYwLDUwIiBmaWxsPSJub25lIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC41Ii8+PGNpcmNsZSBjeD0iOTYwIiBjeT0iNTAiIHI9IjUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMTE0MCIgY3k9IjkwIiByPSI0IiBmaWxsPSIjZGMyNjI2IiAvPgo8cmVjdCB4PSIwIiB5PSIzMzYiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9Ijg0IiBmaWxsPSJ1cmwoI2duZCkiIC8+PHBhdGggZD0iTTAgMzM2SDEyMDAiIHN0cm9rZT0iI2NiZDVlMSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxlbGxpcHNlIGN4PSI2NjAiIGN5PSIzMzYiIHJ4PSIzMjAiIHJ5PSI5IiBmaWxsPSIjMGYxNzJhIiBvcGFjaXR5PSIwLjA4Ii8+CjxwYXRoIGQ9Ik02MDAgMEw1NDAgOTBMNzgwIDkwTDcyMCAwWiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4zNSIvPjxwYXRoIGQ9Ik04MjAgMEw3ODAgOTBMOTgwIDkwTDkyMCAwWiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4yNSIvPgo8Zz48cmVjdCB4PSI0NzQiIHk9Ijg4IiB3aWR0aD0iMzQwIiBoZWlnaHQ9IjE5NiIgZmlsbD0iIzBmMTcyYSIgcng9IjE0IiBvcGFjaXR5PSIwLjA4Ii8+PHJlY3QgeD0iNDcwIiB5PSI4MCIgd2lkdGg9IjM0MCIgaGVpZ2h0PSIxOTYiIGZpbGw9IiNmZmZmZmYiIHJ4PSIxNCIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSI0ODYiIHk9Ijk2IiB3aWR0aD0iMzA4IiBoZWlnaHQ9IjE2NCIgZmlsbD0iI2ZjZTdmMyIgcng9IjgiLz48cGF0aCBkPSJNNDg2IDIwMEw1NjAgMTUwTDYyMCAxODBMNzAwIDEyMEw3OTQgMTkwVjI1MmE4IDggMCAwIDEtOCA4SDQ5NGE4IDggMCAwIDEtOC04eiIgZmlsbD0iI2ZiY2ZlOCIgLz48Y2lyY2xlIGN4PSI2NDAiIGN5PSIxNzgiIHI9IjM0IiBmaWxsPSIjZmZmZmZmIiAvPjxwYXRoIGQ9Ik02MzAgMTYwTDY2MiAxNzhMNjMwIDE5NloiIGZpbGw9IiNkYzI2MjYiIC8+PC9nPgo8cmVjdCB4PSI2MjYiIHk9IjI3NiIgd2lkdGg9IjI4IiBoZWlnaHQ9IjQwIiBmaWxsPSIjY2JkNWUxIiAvPjxyZWN0IHg9IjU5MCIgeT0iMzE0IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEyIiBmaWxsPSIjOTRhM2I4IiByeD0iNiIvPgo8cmVjdCB4PSIzNDAiIHk9IjIzMiIgd2lkdGg9Ijc2IiBoZWlnaHQ9IjQ2IiBmaWxsPSIjNDc1NTY5IiByeD0iOCIvPjxjaXJjbGUgY3g9IjQxNiIgY3k9IjI1NSIgcj0iMjIiIGZpbGw9IiMxZTI5M2IiIC8+PGNpcmNsZSBjeD0iNDE2IiBjeT0iMjU1IiByPSIxMiIgZmlsbD0iIzdkZDNmYyIgLz48cmVjdCB4PSIzNTAiIHk9IjIyMiIgd2lkdGg9IjMwIiBoZWlnaHQ9IjEyIiBmaWxsPSIjZGMyNjI2IiByeD0iMyIvPgo8cGF0aCBkPSJNMzc2IDI3OEwzNTAgMzMyTTM3NiAyNzhMNDAyIDMzMk0zNzYgMjc4VjMzMiIgc3Ryb2tlPSIjNjQ3NDhiIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNODUwIDE1MGEzNiAzNiAwIDAgMSAwIDYwTTg3MiAxMjhhNjYgNjYgMCAwIDEgMCAxMDRNODk0IDEwNmE5NiA5NiAwIDAgMSAwIDE0OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGMyNjI2IiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iMC44Ii8+PGNpcmNsZSBjeD0iODQwIiBjeT0iMTgwIiByPSI4IiBmaWxsPSIjZGMyNjI2IiAvPgo8cmVjdCB4PSI5MDAiIHk9IjMxMCIgd2lkdGg9IjgiIGhlaWdodD0iMjAiIGZpbGw9IiNmZGE0YWYiIHJ4PSIzIi8+PHJlY3QgeD0iOTE2IiB5PSIyODYiIHdpZHRoPSI4IiBoZWlnaHQ9IjQ0IiBmaWxsPSIjZjlhOGQ0IiByeD0iMyIvPjxyZWN0IHg9IjkzMiIgeT0iMzAwIiB3aWR0aD0iOCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZkYTRhZiIgcng9IjMiLz48cmVjdCB4PSI5NDgiIHk9IjI3MiIgd2lkdGg9IjgiIGhlaWdodD0iNTgiIGZpbGw9IiNmOWE4ZDQiIHJ4PSIzIi8+PHJlY3QgeD0iOTY0IiB5PSIyOTQiIHdpZHRoPSI4IiBoZWlnaHQ9IjM2IiBmaWxsPSIjZmRhNGFmIiByeD0iMyIvPjxyZWN0IHg9Ijk4MCIgeT0iMjgwIiB3aWR0aD0iOCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2Y5YThkNCIgcng9IjMiLz48cmVjdCB4PSI5OTYiIHk9IjMwNiIgd2lkdGg9IjgiIGhlaWdodD0iMjQiIGZpbGw9IiNmZGE0YWYiIHJ4PSIzIi8+CjxyZWN0IHg9Ijk2MCIgeT0iMjUwIiB3aWR0aD0iMTAiIGhlaWdodD0iODAiIGZpbGw9IiM5NGEzYjgiIC8+PGNpcmNsZSBjeD0iOTY1IiBjeT0iMjQwIiByPSIyMCIgZmlsbD0iIzY0NzQ4YiIgLz48Y2lyY2xlIGN4PSI5NjUiIGN5PSIyNDAiIHI9IjEyIiBmaWxsPSIjY2JkNWUxIiAvPgo8L3N2Zz4=",
   "story": {
    "context": {
     "title": {
      "en": "The live broadcast peaks and the site goes down",
      "vi": "Phát sóng trực tiếp lên đỉnh, và website sập"
     },
     "body": {
      "en": "A major live event brings the biggest audience of the year. A flood of requests, some of it malicious, arrives at the same moment. Streams buffer, the site stops responding and viewers move to a competitor.",
      "vi": "Một sự kiện trực tiếp lớn mang lại lượng người xem cao nhất năm. Một lượng yêu cầu khổng lồ, trong đó có cả lưu lượng độc hại, ập đến cùng lúc. Luồng phát giật lag, website ngừng phản hồi và khán giả chuyển sang đối thủ."
     }
    },
    "entry": {
     "title": {
      "en": "Stop the entry point at the edge, before it reaches the origin",
      "vi": "Chặn cửa ngõ ở biên, trước khi tới máy chủ gốc"
     },
     "body": {
      "en": "Anti-DDoS and WAF filter the flood while the CDN serves content close to viewers, so the origin and the broadcast stay up.",
      "vi": "Anti-DDoS và WAF lọc lưu lượng đột biến, trong khi CDN phân phối nội dung gần người xem, giúp máy chủ gốc và buổi phát sóng luôn hoạt động."
     }
    }
   },
   "outcomes": [
    {
     "en": "Stay Online When It Counts",
     "vi": "Luôn trực tuyến vào lúc quan trọng"
    },
    {
     "en": "Protect Content and Brand Trust",
     "vi": "Bảo vệ nội dung và uy tín thương hiệu"
    },
    {
     "en": "Compliance and Efficiency",
     "vi": "Tuân thủ và hiệu quả vận hành"
    }
   ]
  },
  {
   "id": "education",
   "icon": "graduation-cap",
   "name": {
    "en": "Education",
    "vi": "Giáo dục"
   },
   "bundle": [
    "email-security",
    "dlp",
    "database-security"
   ],
   "image": null,
   "banner": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDQyMCIgd2lkdGg9IjEyMDAiIGhlaWdodD0iNDIwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBzbGljZSI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjdmZWU3Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYmJmN2QwIi8+PC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJnbG93IiBjeD0iMC41IiBjeT0iMC41IiByPSIwLjUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2RjZmNlNyIgc3RvcC1vcGFjaXR5PSIwLjkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNkY2ZjZTciIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ25kIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuNzUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC45NSIvPjwvbGluZWFyR3JhZGllbnQ+CjxwYXR0ZXJuIGlkPSJkb3RzIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxLjMiIGZpbGw9IiM5NGEzYjgiIG9wYWNpdHk9IjAuNCIvPjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI0MjAiIGZpbGw9InVybCgjYmcpIiAvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQyMCIgZmlsbD0idXJsKCNkb3RzKSIgb3BhY2l0eT0iMC41NSIvPgo8Y2lyY2xlIGN4PSI2NjAiIGN5PSIxOTAiIHI9IjI2MCIgZmlsbD0idXJsKCNnbG93KSIgLz4KPHBvbHlsaW5lIHBvaW50cz0iNjAsMzAwIDYwLDIyMCAxMjAsMTYwIDI1MCwxNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjUiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjMwMCIgcj0iNSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNyIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iMjIwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMTIwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMjUwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTE0MCw5MCAxMDgwLDkwIDEwNDAsNTAgOTYwLDUwIiBmaWxsPSJub25lIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC41Ii8+PGNpcmNsZSBjeD0iOTYwIiBjeT0iNTAiIHI9IjUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMTE0MCIgY3k9IjkwIiByPSI0IiBmaWxsPSIjZGMyNjI2IiAvPgo8cmVjdCB4PSIwIiB5PSIzMzYiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9Ijg0IiBmaWxsPSJ1cmwoI2duZCkiIC8+PHBhdGggZD0iTTAgMzM2SDEyMDAiIHN0cm9rZT0iI2NiZDVlMSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxlbGxpcHNlIGN4PSI2NTAiIGN5PSIzMzYiIHJ4PSIzMjAiIHJ5PSI5IiBmaWxsPSIjMGYxNzJhIiBvcGFjaXR5PSIwLjA4Ii8+CjxyZWN0IHg9IjUwMCIgeT0iMTk2IiB3aWR0aD0iMjYwIiBoZWlnaHQ9IjEzNCIgZmlsbD0iI2ZmZmZmZiIgLz48cmVjdCB4PSI1MDAiIHk9IjE5NiIgd2lkdGg9IjI2MCIgaGVpZ2h0PSIxMiIgZmlsbD0iI2UyZThmMCIgLz48cmVjdCB4PSI2MTAiIHk9Ijg4IiB3aWR0aD0iNDAiIGhlaWdodD0iMTA4IiBmaWxsPSIjZTJlOGYwIiAvPjxwYXRoIGQ9Ik02MDIgODhMNjMwIDUyTDY1OCA4OFoiIGZpbGw9IiNkYzI2MjYiIC8+PGNpcmNsZSBjeD0iNjMwIiBjeT0iMTIwIiByPSIxNSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBkPSJNNjMwIDExMFYxMjBINjQwIiBzdHJva2U9IiM0NzU1NjkiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxyZWN0IHg9IjUyMiIgeT0iMjI2IiB3aWR0aD0iMzAiIGhlaWdodD0iMzQiIGZpbGw9IiNiYmY3ZDAiIC8+PHJlY3QgeD0iNTIyIiB5PSIyNzQiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzNCIgZmlsbD0iI2JiZjdkMCIgLz48cmVjdCB4PSI1NzQiIHk9IjIyNiIgd2lkdGg9IjMwIiBoZWlnaHQ9IjM0IiBmaWxsPSIjYmJmN2QwIiAvPjxyZWN0IHg9IjU3NCIgeT0iMjc0IiB3aWR0aD0iMzAiIGhlaWdodD0iMzQiIGZpbGw9IiNiYmY3ZDAiIC8+PHJlY3QgeD0iNjI2IiB5PSIyMjYiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzNCIgZmlsbD0iI2JiZjdkMCIgLz48cmVjdCB4PSI2MjYiIHk9IjI3NCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjM0IiBmaWxsPSIjYmJmN2QwIiAvPjxyZWN0IHg9IjY3OCIgeT0iMjI2IiB3aWR0aD0iMzAiIGhlaWdodD0iMzQiIGZpbGw9IiNiYmY3ZDAiIC8+PHJlY3QgeD0iNjc4IiB5PSIyNzQiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzNCIgZmlsbD0iI2JiZjdkMCIgLz4KPHJlY3QgeD0iNTk2IiB5PSIyNjIiIHdpZHRoPSI2OCIgaGVpZ2h0PSI2OCIgZmlsbD0iIzg2ZWZhYyIgLz48cmVjdCB4PSI2MjYiIHk9IjI2MiIgd2lkdGg9IjgiIGhlaWdodD0iNjgiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3QgeD0iNTg0IiB5PSIzMTgiIHdpZHRoPSI5MiIgaGVpZ2h0PSIxMiIgZmlsbD0iI2NiZDVlMSIgLz4KPHBhdGggZD0iTTg4MCAxNTBsODAtMzAgODAgMzAtODAgMzB6IiBmaWxsPSIjMzRkMzk5IiAvPjxwYXRoIGQ9Ik05MjAgMTY4djI2YzAgMTAgMTggMTYgNDAgMTZzNDAtNiA0MC0xNnYtMjYiIGZpbGw9IiMxMGI5ODEiIC8+PHBhdGggZD0iTTEwNDAgMTUwdjM2IiBmaWxsPSJub25lIiBzdHJva2U9IiNkYzI2MjYiIHN0cm9rZS13aWR0aD0iNCIvPjxjaXJjbGUgY3g9IjEwNDAiIGN5PSIxOTAiIHI9IjYiIGZpbGw9IiNkYzI2MjYiIC8+CjxyZWN0IHg9IjM0MCIgeT0iMjk2IiB3aWR0aD0iOTAiIGhlaWdodD0iMTQiIGZpbGw9IiMzNGQzOTkiIHJ4PSIzIi8+PHJlY3QgeD0iMzQ2IiB5PSIyODIiIHdpZHRoPSI4MCIgaGVpZ2h0PSIxNCIgZmlsbD0iI2ZiYmYyNCIgcng9IjMiLz48cmVjdCB4PSIzNTIiIHk9IjI2OCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjE0IiBmaWxsPSIjZGMyNjI2IiByeD0iMyIvPjxyZWN0IHg9IjM0MCIgeT0iMzEwIiB3aWR0aD0iOTAiIGhlaWdodD0iMjAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2NiZDVlMSIgc3Ryb2tlLXdpZHRoPSIyIiByeD0iMyIvPgo8cmVjdCB4PSI3OTAiIHk9IjI4MCIgd2lkdGg9IjExMCIgaGVpZ2h0PSIxNCIgZmlsbD0iIzk0YTNiOCIgcng9IjMiLz48cGF0aCBkPSJNODA0IDI4MGw4LTYyaDc2bDggNjJ6IiBmaWxsPSIjNDc1NTY5IiAvPjxwYXRoIGQ9Ik04MTQgMjcybDYtNDRoNjBsNiA0NHoiIGZpbGw9IiNiYmY3ZDAiIC8+CjxjaXJjbGUgY3g9IjkzMCIgY3k9IjI5NiIgcj0iMzAiIGZpbGw9IiM4NmVmYWMiIC8+PHJlY3QgeD0iOTI2IiB5PSIzMDYiIHdpZHRoPSI4IiBoZWlnaHQ9IjI0IiBmaWxsPSIjNjQ3NDhiIiAvPjxjaXJjbGUgY3g9Ijk4MCIgY3k9IjMwOCIgcj0iMjIiIGZpbGw9IiM0YWRlODAiIC8+PHJlY3QgeD0iOTc2IiB5PSIzMTYiIHdpZHRoPSI4IiBoZWlnaHQ9IjE0IiBmaWxsPSIjNjQ3NDhiIiAvPgo8L3N2Zz4=",
   "story": {
    "context": {
     "title": {
      "en": "Enrollment day: the portal crowds and a student file circulates",
      "vi": "Ngày nhập học: cổng quá tải và hồ sơ sinh viên bị lan truyền"
     },
     "body": {
      "en": "Thousands of applicants log in on the same morning while a spreadsheet of student records is forwarded through chat and personal webmail. The campus faces downtime and a data leak on the busiest day of the term.",
      "vi": "Hàng nghìn thí sinh đăng nhập trong cùng một buổi sáng, trong khi bảng tính hồ sơ sinh viên bị chuyển tiếp qua chat và webmail cá nhân. Nhà trường vừa đối mặt với gián đoạn vừa đối mặt với rò rỉ dữ liệu vào ngày bận rộn nhất của học kỳ."
     }
    },
    "entry": {
     "title": {
      "en": "Stop the entry point before it reaches student data",
      "vi": "Chặn cửa ngõ trước khi chạm tới dữ liệu sinh viên"
     },
     "body": {
      "en": "Sovereign VCLOUD hosting keeps the portal available, email defense stops phishing at the gateway and DLP detects student records on their way out.",
      "vi": "Lưu trữ VCLOUD chủ quyền giữ cổng thông tin luôn sẵn sàng, bảo vệ email chặn phishing tại cổng và DLP phát hiện hồ sơ sinh viên khi chúng bị đưa ra ngoài."
     }
    }
   },
   "outcomes": [
    {
     "en": "Keep Learning Running",
     "vi": "Giữ việc dạy và học không gián đoạn"
    },
    {
     "en": "Protect Students and Meet Decree 13",
     "vi": "Bảo vệ người học và đáp ứng Nghị định 13"
    },
    {
     "en": "Spend Smarter, Keep Data Sovereign",
     "vi": "Chi tiêu hiệu quả, giữ chủ quyền dữ liệu"
    }
   ]
  }
 ],
 "signing": {
  "srcs": [
   "/images/vpbank-vnetwork-signing.jpg",
   "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
  ],
  "banner": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDQyMCIgd2lkdGg9IjEyMDAiIGhlaWdodD0iNDIwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBzbGljZSI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjBmOWZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYmFlNmZkIi8+PC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJnbG93IiBjeD0iMC41IiBjeT0iMC41IiByPSIwLjUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2UwZjJmZSIgc3RvcC1vcGFjaXR5PSIwLjkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlMGYyZmUiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ25kIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuNzUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC45NSIvPjwvbGluZWFyR3JhZGllbnQ+CjxwYXR0ZXJuIGlkPSJkb3RzIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIxLjMiIGZpbGw9IiM5NGEzYjgiIG9wYWNpdHk9IjAuNCIvPjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI0MjAiIGZpbGw9InVybCgjYmcpIiAvPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQyMCIgZmlsbD0idXJsKCNkb3RzKSIgb3BhY2l0eT0iMC41NSIvPgo8Y2lyY2xlIGN4PSI2NjAiIGN5PSIxOTAiIHI9IjI2MCIgZmlsbD0idXJsKCNnbG93KSIgLz4KPHBvbHlsaW5lIHBvaW50cz0iNjAsMzAwIDYwLDIyMCAxMjAsMTYwIDI1MCwxNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIiBvcGFjaXR5PSIwLjUiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjMwMCIgcj0iNSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9IjAuNyIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iMjIwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMTIwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PGNpcmNsZSBjeD0iMjUwIiBjeT0iMTYwIiByPSI1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC43Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTE0MCw5MCAxMDgwLDkwIDEwNDAsNTAgOTYwLDUwIiBmaWxsPSJub25lIiBzdHJva2U9IiM5NGEzYjgiIHN0cm9rZS13aWR0aD0iMiIgb3BhY2l0eT0iMC41Ii8+PGNpcmNsZSBjeD0iOTYwIiBjeT0iNTAiIHI9IjUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzk0YTNiOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGNpcmNsZSBjeD0iMTE0MCIgY3k9IjkwIiByPSI0IiBmaWxsPSIjZGMyNjI2IiAvPgo8cmVjdCB4PSIwIiB5PSIzMzYiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9Ijg0IiBmaWxsPSJ1cmwoI2duZCkiIC8+PHBhdGggZD0iTTAgMzM2SDEyMDAiIHN0cm9rZT0iI2NiZDVlMSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxlbGxpcHNlIGN4PSI2NjAiIGN5PSIzMzYiIHJ4PSIzNDAiIHJ5PSI5IiBmaWxsPSIjMGYxNzJhIiBvcGFjaXR5PSIwLjA4Ii8+CjxyZWN0IHg9IjM2OCIgeT0iMzE2IiB3aWR0aD0iMTY4IiBoZWlnaHQ9IjE0IiBmaWxsPSIjY2JkNWUxIiAvPjxyZWN0IHg9IjM4NiIgeT0iMjIwIiB3aWR0aD0iMTYiIGhlaWdodD0iOTYiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3QgeD0iMzk4IiB5PSIyMjAiIHdpZHRoPSI0IiBoZWlnaHQ9Ijk2IiBmaWxsPSIjZTJlOGYwIiAvPjxyZWN0IHg9IjQyMCIgeT0iMjIwIiB3aWR0aD0iMTYiIGhlaWdodD0iOTYiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3QgeD0iNDMyIiB5PSIyMjAiIHdpZHRoPSI0IiBoZWlnaHQ9Ijk2IiBmaWxsPSIjZTJlOGYwIiAvPjxyZWN0IHg9IjQ1NCIgeT0iMjIwIiB3aWR0aD0iMTYiIGhlaWdodD0iOTYiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3QgeD0iNDY2IiB5PSIyMjAiIHdpZHRoPSI0IiBoZWlnaHQ9Ijk2IiBmaWxsPSIjZTJlOGYwIiAvPjxyZWN0IHg9IjQ4OCIgeT0iMjIwIiB3aWR0aD0iMTYiIGhlaWdodD0iOTYiIGZpbGw9IiNmZmZmZmYiIC8+PHJlY3QgeD0iNTAwIiB5PSIyMjAiIHdpZHRoPSI0IiBoZWlnaHQ9Ijk2IiBmaWxsPSIjZTJlOGYwIiAvPjxyZWN0IHg9IjM3MiIgeT0iMjA0IiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2IiBmaWxsPSIjZTJlOGYwIiAvPjxwYXRoIGQ9Ik0zNjQgMjA0TDQ1MiAxNDhMNTQwIDIwNFoiIGZpbGw9IiNmZmZmZmYiIC8+PHBhdGggZD0iTTM5MiAxOThMNDUyIDE2MEw1MTIgMTk4WiIgZmlsbD0iI2JhZTZmZCIgLz48Y2lyY2xlIGN4PSI0NTIiIGN5PSIxODAiIHI9IjgiIGZpbGw9IiNkYzI2MjYiIC8+CjxyZWN0IHg9IjgwOCIgeT0iMTM0IiB3aWR0aD0iMTI0IiBoZWlnaHQ9IjE5NiIgZmlsbD0iI2UyZThmMCIgcng9IjEwIi8+PHJlY3QgeD0iODIyIiB5PSIxNTAiIHdpZHRoPSI5NiIgaGVpZ2h0PSIyMiIgZmlsbD0iIzQ3NTU2OSIgcng9IjQiLz48Y2lyY2xlIGN4PSI4MzYiIGN5PSIxNjEiIHI9IjQiIGZpbGw9IiNkYzI2MjYiIC8+PHJlY3QgeD0iODUyIiB5PSIxNTgiIHdpZHRoPSI1MCIgaGVpZ2h0PSI2IiBmaWxsPSIjNjQ3NDhiIiByeD0iMyIvPjxyZWN0IHg9IjgyMiIgeT0iMTc4IiB3aWR0aD0iOTYiIGhlaWdodD0iMjIiIGZpbGw9IiM0NzU1NjkiIHJ4PSI0Ii8+PGNpcmNsZSBjeD0iODM2IiBjeT0iMTg5IiByPSI0IiBmaWxsPSIjNGFkZTgwIiAvPjxyZWN0IHg9Ijg1MiIgeT0iMTg2IiB3aWR0aD0iNTAiIGhlaWdodD0iNiIgZmlsbD0iIzY0NzQ4YiIgcng9IjMiLz48cmVjdCB4PSI4MjIiIHk9IjIwNiIgd2lkdGg9Ijk2IiBoZWlnaHQ9IjIyIiBmaWxsPSIjNDc1NTY5IiByeD0iNCIvPjxjaXJjbGUgY3g9IjgzNiIgY3k9IjIxNyIgcj0iNCIgZmlsbD0iIzRhZGU4MCIgLz48cmVjdCB4PSI4NTIiIHk9IjIxNCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjYiIGZpbGw9IiM2NDc0OGIiIHJ4PSIzIi8+PHJlY3QgeD0iODIyIiB5PSIyMzQiIHdpZHRoPSI5NiIgaGVpZ2h0PSIyMiIgZmlsbD0iIzQ3NTU2OSIgcng9IjQiLz48Y2lyY2xlIGN4PSI4MzYiIGN5PSIyNDUiIHI9IjQiIGZpbGw9IiNkYzI2MjYiIC8+PHJlY3QgeD0iODUyIiB5PSIyNDIiIHdpZHRoPSI1MCIgaGVpZ2h0PSI2IiBmaWxsPSIjNjQ3NDhiIiByeD0iMyIvPjxyZWN0IHg9IjgyMiIgeT0iMjYyIiB3aWR0aD0iOTYiIGhlaWdodD0iMjIiIGZpbGw9IiM0NzU1NjkiIHJ4PSI0Ii8+PGNpcmNsZSBjeD0iODM2IiBjeT0iMjczIiByPSI0IiBmaWxsPSIjNGFkZTgwIiAvPjxyZWN0IHg9Ijg1MiIgeT0iMjcwIiB3aWR0aD0iNTAiIGhlaWdodD0iNiIgZmlsbD0iIzY0NzQ4YiIgcng9IjMiLz48cmVjdCB4PSI4MjIiIHk9IjI5MCIgd2lkdGg9Ijk2IiBoZWlnaHQ9IjIyIiBmaWxsPSIjNDc1NTY5IiByeD0iNCIvPjxjaXJjbGUgY3g9IjgzNiIgY3k9IjMwMSIgcj0iNCIgZmlsbD0iIzRhZGU4MCIgLz48cmVjdCB4PSI4NTIiIHk9IjI5OCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjYiIGZpbGw9IiM2NDc0OGIiIHJ4PSIzIi8+CjxwYXRoIGQ9Ik04MjAgMTE4aDk2YTE4IDE4IDAgMCAwIDItMzYgMjYgMjYgMCAwIDAtNTAtOCAyMCAyMCAwIDAgMC00OCAxNCAxNiAxNiAwIDAgMCAwIDMweiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjY2JkNWUxIiBzdHJva2Utd2lkdGg9IjIiLz4KPGc+PHJlY3QgeD0iNTk0IiB5PSIxMjQiIHdpZHRoPSIxNTAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMGYxNzJhIiByeD0iMTQiIG9wYWNpdHk9IjAuMDgiLz48cmVjdCB4PSI1OTAiIHk9IjExNiIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNmZmZmZmYiIHJ4PSIxNCIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSI2MTIiIHk9IjE0MCIgd2lkdGg9IjEwNiIgaGVpZ2h0PSIxMCIgZmlsbD0iI2NiZDVlMSIgcng9IjUiLz48cmVjdCB4PSI2MTIiIHk9IjE2MiIgd2lkdGg9IjgyIiBoZWlnaHQ9IjgiIGZpbGw9IiNlMmU4ZjAiIHJ4PSI0Ii8+PHJlY3QgeD0iNjEyIiB5PSIxODAiIHdpZHRoPSI5NiIgaGVpZ2h0PSI4IiBmaWxsPSIjZTJlOGYwIiByeD0iNCIvPjxyZWN0IHg9IjYxMiIgeT0iMTk4IiB3aWR0aD0iNzAiIGhlaWdodD0iOCIgZmlsbD0iI2UyZThmMCIgcng9IjQiLz4KPHBhdGggZD0iTTYxMiAyNjRjMTYtMjYgMjIgOCAzNC0xMHMxOCA2IDI2LTQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2RjMjYyNiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cmVjdCB4PSI2MTIiIHk9IjI3OCIgd2lkdGg9IjEwNiIgaGVpZ2h0PSIzIiBmaWxsPSIjOTRhM2I4IiAvPjxjaXJjbGUgY3g9IjcwMCIgY3k9IjIzMCIgcj0iMTQiIGZpbGw9IiMyMmM1NWUiIC8+PHBvbHlsaW5lIHBvaW50cz0iNjkzLDIzMCA2OTksMjM2IDcwOCwyMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L2c+CjxwYXRoIGQ9Ik03MzAgMTk2bDYwLTYwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0NzU1NjkiIHN0cm9rZS13aWR0aD0iOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTcyNiAyMDRsNi0xNCA4IDh6IiBmaWxsPSIjZGMyNjI2IiAvPgo8cGF0aCBkPSJNNTQwIDIzMEg1OTBNNzQwIDIzMEg4MDgiIHN0cm9rZT0iI2RjMjYyNiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtZGFzaGFycmF5PSIzIDEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSI1NjYiIGN5PSIyMzAiIHI9IjciIGZpbGw9IiNkYzI2MjYiIC8+PGNpcmNsZSBjeD0iNzc0IiBjeT0iMjMwIiByPSI3IiBmaWxsPSIjZGMyNjI2IiAvPgo8L3N2Zz4="
 },
 "experts": [
  {
   "id": "duc-anh",
   "initials": "DA",
   "photo": null,
   "years": "16+",
   "summary": {
    "en": "Technology, product development and AI-driven digital transformation.",
    "vi": "Công nghệ, phát triển sản phẩm và chuyển đổi số bằng AI."
   },
   "name": {
    "en": "Mr. Nguyen Duc Anh",
    "vi": "Ông Nguyễn Đức Anh"
   },
   "role": {
    "en": "Founder & CEO, DatumBridge",
    "vi": "Nhà sáng lập & CEO, DatumBridge"
   },
   "domain": null,
   "bio": {
    "en": "Mr Duc Anh has 16+ years of experience in technology, product development, and digital transformation. He leads product vision and strategy at DatumBridge, building practical and scalable AI solutions for real-world business needs.",
    "vi": "Ông Đức Anh có hơn 16 năm kinh nghiệm trong lĩnh vực công nghệ, phát triển sản phẩm và chuyển đổi số. Ông định hướng tầm nhìn và chiến lược sản phẩm tại DatumBridge, tập trung xây dựng các giải pháp AI thực tiễn, dễ triển khai và có khả năng mở rộng cho nhu cầu vận hành của doanh nghiệp."
   }
  },
  {
   "id": "tuan-anh",
   "initials": "TA",
   "photo": null,
   "years": "15+",
   "summary": {
    "en": "Technology, telecoms and data security; leads DLP and Insider Risk Management in Vietnam.",
    "vi": "Công nghệ, viễn thông và bảo mật dữ liệu; dẫn dắt DLP và quản trị rủi ro nội bộ tại Việt Nam."
   },
   "name": {
    "en": "Mr. Hoang Tuan Anh",
    "vi": "Ông Hoàng Tuấn Anh"
   },
   "role": {
    "en": "Country Director – SearchInform",
    "vi": "Giám đốc quốc gia – SearchInform"
   },
   "domain": {
    "en": "Data Loss Prevention (DLP) & Insider Risk Management",
    "vi": "Chống rò rỉ dữ liệu (DLP) & Quản trị rủi ro nội bộ"
   },
   "bio": {
    "en": "With over 15 years of experience in technology, telecommunications, and data security at leading corporations in Vietnam, he specializes in business development and building enterprise partnerships, and leads the expansion of Data Loss Prevention (DLP) and Insider Risk Management solutions in the country.",
    "vi": "Chuyên gia với hơn 15 năm kinh nghiệm trong lĩnh vực công nghệ, viễn thông và bảo mật dữ liệu tại các tập đoàn hàng đầu Việt Nam, chuyên về phát triển kinh doanh và xây dựng quan hệ đối tác với doanh nghiệp. Ông dẫn dắt việc mở rộng các giải pháp chống rò rỉ dữ liệu (DLP) và quản trị rủi ro nội bộ tại Việt Nam."
   }
  },
  {
   "id": "hau",
   "initials": "H",
   "photo": null,
   "years": null,
   "summary": null,
   "name": {
    "en": "Ms. Hau",
    "vi": "Chị Hậu"
   },
   "profile": null,
   "role": null,
   "domain": null,
   "bio": null
  }
 ]
};

const ICONS = {
  landmark: Landmark, 'building-2': Building2, 'heart-pulse': HeartPulse, 'shopping-bag': ShoppingBag, factory: Factory,
  truck: Truck, clapperboard: Clapperboard, 'graduation-cap': GraduationCap, 'mail-check': MailCheck, scale: Scale,
  'shield-check': ShieldCheck, shield: Shield, 'shield-alert': ShieldAlert, database: Database, zap: Zap, globe: Globe,
  bot: Bot, target: Target, filter: Filter, 'file-search': FileSearch, megaphone: Megaphone
};
const Ic = ({ name, ...p }) => { const C = ICONS[name] || Boxes; return <C aria-hidden="true" {...p} />; };

/* [English, Vietnamese] pairs keep both languages in lockstep: a key cannot exist in only one. */
const UI = {
  'nav.industries': ['Industries', 'Ngành'],
  'nav.solutions': ['Solutions', 'Giải pháp'],
  'nav.alliance': ['Alliance', 'Liên minh'],
  'nav.leadership': ['Leadership', 'Lãnh đạo'],
  'nav.request': ['Request Consultation', 'Đăng ký tư vấn'],
  'nav.menu': ['Menu', 'Menu'],
  'nav.close': ['Close', 'Đóng'],
  'nav.primary': ['Primary', 'Điều hướng chính'],
  'nav.lang': ['Language', 'Ngôn ngữ'],
  'hero.eyebrow': ['A VNETWORK technology alliance', 'Liên minh công nghệ của VNETWORK'],
  'hero.t1': ['Enterprise tech,', 'Công nghệ doanh nghiệp,'],
  'hero.t2': ['forged together.', 'cùng rèn nên.'],
  'hero.sub': ['One alliance. Mission-critical solutions, packaged by industry.', 'Một liên minh. Giải pháp trọng yếu, đóng gói theo ngành.'],
  'hero.explore': ['Explore industries', 'Khám phá các ngành'],
  'ind.pick': ['Choose your sector', 'Chọn lĩnh vực của bạn'],
  'ind.glance': ['A story in one glance', 'Câu chuyện trong một cái nhìn'],
  'ind.entry': ['Entry-point countermeasure', 'Biện pháp chặn cửa ngõ'],
  'ind.solution': ['Packaged solution', 'Gói giải pháp'],
  'ind.outcomes': ['Outcomes', 'Kết quả'],
  'ind.more': ['Read the full story', 'Xem đầy đủ câu chuyện'],
  'ind.less': ['Show less', 'Thu gọn'],
  'ind.illustrative': ['Illustrative scenario', 'Tình huống minh họa'],
  'sol.kicker': ['Featured solution', 'Giải pháp nổi bật'],
  'sol.partner': ['Solution partner', 'Đối tác giải pháp'],
  'sol.talk': ['Talk to an expert', 'Trao đổi với chuyên gia'],
  'sol.more': ['More from the portfolio', 'Thêm từ danh mục giải pháp'],
  'ally.kicker': ['Strategic alliance signing', 'Lễ ký kết liên minh chiến lược'],
  'ally.title': ['VPBank - VNETWORK Alliance', 'Liên minh VPBank - VNETWORK'],
  'ally.body': ['Aligning banking and technology leaders on secure, sovereign digital infrastructure.', 'Kết nối ngân hàng và công nghệ trên nền hạ tầng số an toàn, chủ quyền.'],
  'ally.alt': ['Representatives of VPBank and VNETWORK at the strategic alliance signing', 'Đại diện VPBank và VNETWORK tại lễ ký kết liên minh chiến lược'],
  'ally.glance': ['The alliance at a glance', 'Liên minh trong những con số'],
  'ally.sectors': ['Industry sectors', 'Lĩnh vực ngành'],
  'ally.solutions': ['Packaged solutions', 'Giải pháp đóng gói'],
  'ally.poc': ['Business days to a PoC environment', 'Ngày làm việc để có môi trường PoC'],
  'ally.offices': ['Offices: Ho Chi Minh City and Singapore', 'Văn phòng: TP. Hồ Chí Minh và Singapore'],
  'ldr.kicker': ['Leadership', 'Lãnh đạo'],
  'ldr.title': ['Experts & Advisory Board', 'Chuyên gia & Hội đồng cố vấn'],
  'ldr.years': ['years of experience', 'năm kinh nghiệm'],
  'ldr.domain': ['Domain', 'Lĩnh vực'],
  'ldr.bio': ['Read bio', 'Xem tiểu sử'],
  'ldr.hide': ['Hide bio', 'Ẩn tiểu sử'],
  'ldr.pending': ['Profile to be added from the existing site.', 'Hồ sơ sẽ được bổ sung từ trang hiện có.'],
  'cta.title': ['Ready to start with the right alliance?', 'Sẵn sàng bắt đầu cùng liên minh phù hợp?'],
  'cta.sub': ['An expert replies within one business day.', 'Chuyên gia phản hồi trong một ngày làm việc.'],
  'cta.call': ['Call us', 'Gọi cho chúng tôi'],
  'cta.mail': ['Email sales', 'Email bộ phận kinh doanh'],
  'cta.copy': ['Copy', 'Sao chép'],
  'cta.copied': ['Copied', 'Đã chép'],
  'foot.powered': ['Powered by', 'Vận hành bởi'],
  'foot.terms': ['Terms of Service', 'Điều khoản dịch vụ'],
  'foot.privacy': ['Privacy Policy', 'Chính sách bảo mật'],
  'foot.rights': ['All rights reserved.', 'Bảo lưu mọi quyền.']
};

const CONTACT = {
  phone: '+842873068789', phoneDisplay: '(+84) 28 7306 8789', email: 'contact@vnetwork.vn', website: 'https://vnetwork.vn',
  offices: [
    { en: 'Level 23, UOA Tower, 6 Tan Trao, Tan My Ward, Ho Chi Minh City, Vietnam', vi: 'Tầng 23, Tòa nhà UOA, 6 Tân Trào, Phường Tân Mỹ, TP. Hồ Chí Minh, Việt Nam' },
    { en: '111 North Bridge Road #17-06 Peninsula Plaza, Singapore', vi: '111 North Bridge Road #17-06 Peninsula Plaza, Singapore' }
  ]
};
const POC_DAYS = '14';

const FONT_HREF = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500..800&family=Inter:wght@400..700&display=swap';
const CSS = `
.vt{font-family:Inter,"Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;color:#0f172a;background:#fff;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
.vt-d{font-family:"Plus Jakarta Sans",Inter,"Be Vietnam Pro",system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;font-weight:800;letter-spacing:-0.02em;text-wrap:balance}
.vt-fade{animation:vtFade .2s ease-out both}
@keyframes vtFade{from{opacity:0}to{opacity:1}}
@media (prefers-reduced-motion:reduce){.vt-fade{animation:none}.vt *{transition:none!important}}
.vt button:focus-visible,.vt a:focus-visible{outline:2px solid #dc2626;outline-offset:2px}
.vt [id]{scroll-margin-top:4.5rem}
`;

const SOL_BY_ID = Object.fromEntries(DATA.solutions.map((s) => [s.id, s]));
const FEATURED = SOL_BY_ID['ai-agent'];
const OTHER_SOLS = DATA.solutions.filter((s) => s.id !== 'ai-agent');
const wrap = 'mx-auto w-full max-w-6xl px-4 sm:px-6';
const hairline = 'border-slate-200/80';

/* ---------------------------------------------------------------- visuals */
/* Layers, bottom to top: the original sector banner (an embedded data-URI image, so it always renders), then the photo,
   which fades in only once it has loaded. A blocked or failed photo URL therefore never shows a broken icon or a void.
   The dark scrim and white caption appear only over a loaded photo; over the banner a light scrim keeps the caption readable. */
function Photo({ srcs, alt, base, art, className = '', scrimFromSm = false, children }) {
  const list = srcs.filter(Boolean);
  const sig = list.join('|');
  const [i, setI] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setI(0); setLoaded(false); }, [sig]);
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-200 ${className}`}>
      {art || (base && <img src={base} alt={alt} className="absolute inset-0 h-full w-full object-cover" />)}
      {i < list.length && (
        <img key={list[i]} src={list[i]} alt={alt} loading="lazy" referrerPolicy="no-referrer" onLoad={() => setLoaded(true)}
          onError={() => { setLoaded(false); setI((n) => n + 1); }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
      )}
      {children && <span className={`pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t ${scrimFromSm ? 'hidden sm:block' : ''} ${loaded ? 'from-slate-900/70' : 'from-white/90'} to-transparent`} />}
      {children && children(loaded)}
    </div>
  );
}

function Fade({ k, children, className = '' }) { return <div key={k} className={`vt-fade ${className}`}>{children}</div>; }
function Kicker({ children }) { return <p className="text-xs font-bold uppercase tracking-widest text-red-600">{children}</p>; }
function H2({ children }) { return <h2 className="vt-d mt-3 text-3xl tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{children}</h2>; }

/* ---------------------------------------------------------------- main component */
export default function VTechFoundry() {
  const [lang, setLang] = useState(() => { try { return localStorage.getItem('vtf-lang') === 'vi' ? 'vi' : 'en'; } catch { return 'en'; } });
  const [mobile, setMobile] = useState(false);
  const [indId, setIndId] = useState(DATA.industries[0].id);
  const [full, setFull] = useState(false);
  const [bioOpen, setBioOpen] = useState('');
  const [copied, setCopied] = useState('');

  const u = (k) => (UI[k] ? UI[k][lang === 'vi' ? 1 : 0] : k);
  const tx = (o) => (o == null ? '' : typeof o === 'string' ? o : o[lang] ?? '');

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('vtf-lang', lang); } catch { /* storage unavailable */ }
  }, [lang]);

  useEffect(() => {
    if (!document.querySelector('link[data-vtf-fonts]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet'; l.href = FONT_HREF; l.setAttribute('data-vtf-fonts', '1');
      document.head.appendChild(l);
    }
  }, []);

  useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') setMobile(false); };
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, []);

  const ind = DATA.industries.find((i) => i.id === indId);

  const goTo = (id) => {
    setMobile(false);
    requestAnimationFrame(() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ block: 'start' }); });
  };
  const pickIndustry = (id) => { setIndId(id); setFull(false); };

  const copy = async (text, key) => {
    try { await navigator.clipboard.writeText(text); } catch {
      try {
        const ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
      } catch { /* copy unavailable: the text stays selectable on screen */ }
    }
    setCopied(key); setTimeout(() => setCopied(''), 1500);
  };

  const links = [['industries', u('nav.industries')], ['solutions', u('nav.solutions')], ['alliance', u('nav.alliance')], ['leadership', u('nav.leadership')]];
  const pill = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200';

  return (
    <div className="vt min-h-screen">
      <style>{CSS}</style>

      {/* ---- Header ---- */}
      <header className={`sticky top-0 z-40 border-b ${hairline} bg-white/90 backdrop-blur`}>
        <div className={`${wrap} flex h-16 items-center justify-between gap-3`}>
          <button type="button" onClick={() => goTo('top')} className="flex items-center gap-2" aria-label="V-TECH FOUNDRY">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-red-600 text-sm font-extrabold text-white">V</span>
            <span className="vt-d text-base tracking-tight text-slate-900">V-TECH FOUNDRY</span>
          </button>
          <nav className="hidden items-center gap-8 lg:flex" aria-label={u('nav.primary')}>
            {links.map(([id, label]) => (
              <button key={id} type="button" onClick={() => goTo(id)} className="text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-slate-900">{label}</button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className={`flex items-center rounded-full border ${hairline} p-0.5 text-xs font-bold`} role="group" aria-label={u('nav.lang')}>
              {['en', 'vi'].map((l) => (
                <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}
                  className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${lang === l ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'}`}>{l.toUpperCase()}</button>
              ))}
            </div>
            <button type="button" onClick={() => goTo('contact')} className={`${pill} hidden bg-slate-900 py-2.5 text-white hover:bg-slate-700 sm:inline-flex`}>{u('nav.request')}</button>
            <button type="button" className={`inline-flex h-10 w-10 items-center justify-center rounded-full border ${hairline} lg:hidden`} aria-label={mobile ? u('nav.close') : u('nav.menu')} aria-expanded={mobile} onClick={() => setMobile((m) => !m)}>
              {mobile ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
        {mobile && (
          <div className={`vt-fade border-t ${hairline} bg-white lg:hidden`}>
            <div className={`${wrap} flex flex-col py-2`}>
              {[...links, ['contact', u('nav.request')]].map(([id, label]) => (
                <button key={id} type="button" onClick={() => goTo(id)} className="py-3 text-left text-sm font-semibold text-slate-800">{label}</button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* ---- 1. Hero & industry showcase ---- */}
        <section className="bg-white py-16 sm:py-24">
          <div className={wrap}>
            <div className="max-w-4xl">
              <Kicker>{u('hero.eyebrow')}</Kicker>
              <h1 className="vt-d mt-4 text-5xl tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"><span className="block">{u('hero.t1')}</span><span className="block text-red-600">{u('hero.t2')}</span></h1>
              <p className="mt-5 text-lg text-slate-600 sm:text-xl">{u('hero.sub')}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" onClick={() => goTo('industries')} className={`${pill} bg-slate-900 text-white hover:bg-slate-700`}>{u('hero.explore')}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
                <button type="button" onClick={() => goTo('contact')} className={`${pill} border ${hairline} bg-white text-slate-900 hover:bg-slate-50`}>{u('nav.request')}</button>
              </div>
            </div>

            <div id="industries" className={`mt-16 grid gap-8 border-t ${hairline} pt-10 lg:mt-20 lg:grid-cols-12 lg:gap-12`}>
              <div className="min-w-0 lg:col-span-4">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{u('ind.pick')}</p>
                <div className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-0" role="tablist" aria-label={u('ind.pick')}>
                  {DATA.industries.map((i) => {
                    const on = i.id === indId;
                    return (
                      <button key={i.id} type="button" role="tab" aria-selected={on} onClick={() => pickIndustry(i.id)}
                        className={`group flex items-center justify-between gap-3 rounded-full border px-4 py-2 text-left text-sm font-semibold transition-colors duration-200 lg:rounded-none lg:border-0 lg:border-b lg:px-0 lg:py-4 lg:text-base ${on ? 'border-slate-900 bg-slate-900 text-white lg:bg-transparent lg:text-slate-900' : `${hairline} text-slate-600 hover:text-slate-900`} ${hairline}`}>
                        <span className="flex items-center gap-3"><Ic name={i.icon} className={`h-5 w-5 ${on ? 'lg:text-red-600' : ''}`} strokeWidth={1.75} />{tx(i.name)}</span>
                        <ChevronRight className={`hidden h-4 w-4 lg:block ${on ? 'text-red-600' : 'text-slate-300'}`} aria-hidden="true" />
                      </button>
                    );
                  })}
                </div>
              </div>

              <Fade k={ind.id} className={`min-w-0 overflow-hidden rounded-2xl border ${hairline} bg-white lg:col-span-8`}>
                <Photo srcs={[ind.image]} alt={tx(ind.name)} base={ind.banner} className="h-48 sm:h-64">
                  {(ok) => <span className={`absolute inset-x-5 bottom-4 text-lg font-bold sm:text-xl ${ok ? 'text-white' : 'text-slate-900'}`}>{tx(ind.name)}</span>}
                </Photo>
                <div className="divide-y divide-slate-200/80">
                  <div className="p-5 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-700">{u('ind.glance')}</p>
                    <p className="vt-d mt-2 text-xl tracking-tight text-slate-900 sm:text-2xl">{tx(ind.story.context.title)}</p>
                    {full && <p className="vt-fade mt-3 text-sm leading-relaxed text-slate-600">{tx(ind.story.context.body)} <span className="text-slate-400">({u('ind.illustrative')})</span></p>}
                  </div>
                  <div className="p-5 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-widest text-red-600">{u('ind.entry')}</p>
                    <p className="vt-d mt-2 text-xl tracking-tight text-slate-900 sm:text-2xl">{tx(ind.story.entry.title)}</p>
                    {full && <p className="vt-fade mt-3 text-sm leading-relaxed text-slate-600">{tx(ind.story.entry.body)}</p>}
                  </div>
                  <div className="p-5 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">{u('ind.solution')}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {ind.bundle.map((id) => (
                        <span key={id} className={`inline-flex items-center gap-2 rounded-full border ${hairline} bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-800`}>
                          <Ic name={SOL_BY_ID[id].icon} className="h-3.5 w-3.5 text-red-600" strokeWidth={1.75} />{SOL_BY_ID[id].name}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-500">{u('ind.outcomes')}</p>
                    <ul className="mt-2 grid gap-2 sm:grid-cols-3">
                      {ind.outcomes.map((o, k) => (
                        <li key={k} className="flex gap-2 text-sm font-semibold text-slate-800"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" /><span>{tx(o)}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="px-5 py-4 sm:px-7">
                    <button type="button" aria-expanded={full} onClick={() => setFull((f) => !f)} className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:underline">
                      {full ? u('ind.less') : u('ind.more')}<ChevronRight className={`h-4 w-4 transition-transform duration-200 ${full ? '-rotate-90' : 'rotate-90'}`} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </section>

        {/* ---- 2. Featured solutions ---- */}
        <section id="solutions" className={`border-t ${hairline} bg-slate-50 py-16 sm:py-24`}>
          <div className={wrap}>
            <Kicker>{u('sol.kicker')}</Kicker>
            <div className="mt-3 grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="min-w-0 lg:col-span-6">
                <h2 className="vt-d text-3xl tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{FEATURED.name}</h2>
                <p className="mt-4 text-base text-slate-600 sm:text-lg">{tx(FEATURED.description)}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {FEATURED.tags.map((tg) => (
                    <span key={tg.tag} className={`rounded-full border ${hairline} bg-white px-3 py-1 text-xs font-semibold text-slate-700`}>{tg.tag}{lang === 'en' ? <span className="font-normal text-slate-500"> · {tg.en}</span> : null}</span>
                  ))}
                </div>
                <p className="mt-5 text-sm text-slate-600">{u('sol.partner')}: <span className="font-semibold text-slate-900">{FEATURED.provider}</span></p>
                <button type="button" onClick={() => goTo('contact')} className={`${pill} mt-6 bg-slate-900 text-white hover:bg-slate-700`}>{u('sol.talk')}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
              </div>
              <ul className={`min-w-0 divide-y divide-slate-200/80 self-start rounded-2xl border ${hairline} bg-white lg:col-span-6`}>
                {FEATURED.features.map((f, k) => (
                  <li key={k} className="flex items-center gap-4 px-5 py-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-red-600"><Ic name={f.icon} className="h-5 w-5" strokeWidth={1.75} /></span>
                    <span className="text-sm font-semibold text-slate-900 sm:text-base">{tx(f)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <dl className={`mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border ${hairline} bg-slate-200/80 lg:grid-cols-4`}>
              {FEATURED.metrics.map((m, k) => (
                <div key={k} className="min-w-0 bg-white p-5 sm:p-7">
                  <dd className="vt-d text-4xl tracking-tight text-slate-900 tabular-nums sm:text-5xl">{m.value}</dd>
                  <dt className="mt-2 text-sm font-semibold text-slate-900">{tx(m)}</dt>
                  {m.sub && <p className="mt-1 text-xs text-slate-500">{tx(m.sub)}</p>}
                </div>
              ))}
            </dl>

            <p className="mt-14 text-xs font-bold uppercase tracking-widest text-slate-500">{u('sol.more')}</p>
            <div className={`mt-4 grid gap-px overflow-hidden rounded-2xl border ${hairline} bg-slate-200/80 sm:grid-cols-2 lg:grid-cols-4`}>
              {OTHER_SOLS.map((s) => (
                <div key={s.id} className="min-w-0 bg-white p-5">
                  <Ic name={s.icon} className="h-6 w-6 text-red-600" strokeWidth={1.5} />
                  <p className="mt-3 text-sm font-bold text-slate-900">{s.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{tx(s.tagline)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- 3. Strategic alliance & proof ---- */}
        <section id="alliance" className={`border-t ${hairline} bg-white py-16 sm:py-24`}>
          <div className={wrap}>
            <Photo srcs={DATA.signing.srcs} alt={u('ally.alt')} base={DATA.signing.banner} className={`h-56 rounded-2xl border ${hairline} sm:h-96`} scrimFromSm>
              {(ok) => (
                <div className={`absolute inset-x-5 bottom-5 hidden sm:inset-x-8 sm:bottom-7 sm:block ${ok ? 'text-white' : 'text-slate-900'}`}>
                  <span className={`block text-xs font-bold uppercase tracking-widest ${ok ? 'text-white/80' : 'text-slate-500'}`}>{u('ally.kicker')}</span>
                  <span className="vt-d mt-1 block text-2xl tracking-tight sm:text-4xl">{u('ally.title')}</span>
                  <span className={`mt-2 block max-w-xl text-sm ${ok ? 'text-white/90' : 'text-slate-600'}`}>{u('ally.body')}</span>
                </div>
              )}
            </Photo>
            <div className="mt-5 sm:hidden">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{u('ally.kicker')}</p>
              <p className="vt-d mt-1 text-2xl tracking-tight text-slate-900">{u('ally.title')}</p>
              <p className="mt-2 text-sm text-slate-600">{u('ally.body')}</p>
            </div>
            <p className="mt-12 text-xs font-bold uppercase tracking-widest text-slate-500">{u('ally.glance')}</p>
            <dl className={`mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border ${hairline} bg-slate-200/80 lg:grid-cols-4`}>
              {[
                [String(DATA.industries.length), u('ally.sectors')],
                [String(DATA.solutions.length), u('ally.solutions')],
                [POC_DAYS, u('ally.poc')],
                [String(CONTACT.offices.length), u('ally.offices')]
              ].map(([v, label]) => (
                <div key={label} className="min-w-0 bg-white p-5 sm:p-7">
                  <dd className="vt-d text-4xl tracking-tight text-slate-900 tabular-nums sm:text-5xl">{v}</dd>
                  <dt className="mt-2 text-sm font-semibold text-slate-900">{label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---- 4. Leadership ---- */}
        <section id="leadership" className={`border-t ${hairline} bg-slate-50 py-16 sm:py-24`}>
          <div className={wrap}>
            <Kicker>{u('ldr.kicker')}</Kicker>
            <H2>{u('ldr.title')}</H2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {DATA.experts.map((e) => (
                <article key={e.id} className={`flex min-w-0 flex-col rounded-2xl border ${hairline} bg-white p-6`}>
                  <div className="flex items-start justify-between gap-3">
                    <Photo srcs={[e.photo]} alt={tx(e.name)} className="h-16 w-16 shrink-0 rounded-full"
                      art={<div className="vt-d absolute inset-0 flex items-center justify-center bg-slate-900 text-lg text-white" role="img" aria-label={tx(e.name)}>{e.initials}</div>} />
                    {e.years && (
                      <p className="text-right"><span className="vt-d block text-3xl tracking-tight text-slate-900 tabular-nums">{e.years}</span><span className="block text-xs text-slate-500">{u('ldr.years')}</span></p>
                    )}
                  </div>
                  <h3 className="vt-d mt-5 text-xl tracking-tight text-slate-900">{tx(e.name)}</h3>
                  {e.role && <p className="mt-1 text-sm font-semibold text-slate-600">{tx(e.role)}</p>}
                  {e.domain && <p className="mt-3 text-xs font-semibold leading-relaxed text-red-700"><span className="uppercase tracking-widest">{u('ldr.domain')}</span>: {tx(e.domain)}</p>}
                  {e.summary ? <p className="mt-3 text-sm leading-relaxed text-slate-600">{tx(e.summary)}</p> : <p className="mt-3 text-sm italic text-slate-400">{u('ldr.pending')}</p>}
                  {e.bio && (
                    <>
                      {bioOpen === e.id && <p className="vt-fade mt-3 border-t border-slate-200/80 pt-3 text-sm leading-relaxed text-slate-600">{tx(e.bio)}</p>}
                      <button type="button" aria-expanded={bioOpen === e.id} onClick={() => setBioOpen(bioOpen === e.id ? '' : e.id)} className="mt-4 inline-flex items-center gap-1 self-start text-sm font-semibold text-slate-900 hover:underline">
                        {bioOpen === e.id ? u('ldr.hide') : u('ldr.bio')}<ChevronRight className={`h-4 w-4 transition-transform duration-200 ${bioOpen === e.id ? '-rotate-90' : 'rotate-90'}`} aria-hidden="true" />
                      </button>
                    </>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Contact band ---- */}
        <section id="contact" className={`border-t ${hairline} bg-white py-16 sm:py-24`}>
          <div className={`${wrap} grid gap-8 lg:grid-cols-12 lg:items-center`}>
            <div className="min-w-0 lg:col-span-6">
              <h2 className="vt-d text-3xl tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{u('cta.title')}</h2>
              <p className="mt-4 text-base text-slate-600 sm:text-lg">{u('cta.sub')}</p>
            </div>
            <div className="min-w-0 space-y-3 lg:col-span-6">
              {[
                ['call', u('cta.call'), CONTACT.phoneDisplay, `tel:${CONTACT.phone}`, Phone],
                ['mail', u('cta.mail'), CONTACT.email, `mailto:${CONTACT.email}`, Mail]
              ].map(([key, label, value, href, Icon]) => (
                <div key={key} className={`flex items-center justify-between gap-3 rounded-2xl border ${hairline} p-4`}>
                  <div className="flex min-w-0 items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-red-600" strokeWidth={1.75} aria-hidden="true" />
                    <div className="min-w-0"><p className="text-xs text-slate-500">{label}</p><a href={href} className="block break-all text-base font-semibold text-slate-900 hover:underline">{value}</a></div>
                  </div>
                  <button type="button" onClick={() => copy(value, key)} className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border ${hairline} px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-50`}>
                    {copied === key ? <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}{copied === key ? u('cta.copied') : u('cta.copy')}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ---- Footer ---- */}
      <footer className={`border-t ${hairline} bg-slate-50`}>
        <div className={`${wrap} py-12`}>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-md bg-red-600 text-sm font-extrabold text-white">V</span><span className="vt-d text-base tracking-tight text-slate-900">V-TECH FOUNDRY</span></div>
              <p className="mt-4 text-sm text-slate-600">{u('foot.powered')} <a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:underline">VNETWORK</a></p>
            </div>
            <div className="min-w-0 space-y-2 text-sm text-slate-600">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-red-600" aria-hidden="true" />{CONTACT.phoneDisplay}</p>
              <p className="flex items-center gap-2 break-all"><Mail className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />{CONTACT.email}</p>
              <p className="flex items-center gap-2"><Globe className="h-4 w-4 text-red-600" aria-hidden="true" /><a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">vnetwork.vn<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a></p>
            </div>
            <div className="min-w-0 space-y-3 text-sm text-slate-600">
              {CONTACT.offices.map((o, k) => <p key={k} className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />{tx(o)}</p>)}
            </div>
          </div>
          <div className={`mt-10 flex flex-wrap items-center justify-between gap-3 border-t ${hairline} pt-6 text-xs text-slate-500`}>
            <span>© 2013 VNETWORK JSC. {u('foot.rights')}</span>
            <span><a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{u('foot.terms')}</a> · <a href={CONTACT.website} target="_blank" rel="noopener noreferrer" className="hover:underline">{u('foot.privacy')}</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
