# pedulilindungi


POST /vaccine/v1/dashboard/nik/status HTTP/1.1
Authorization: Basic VkFLU0lOOjVmYmNkNjc4NDE2ZjVkOTUzMzFlODJhNA==
Content-Type: application/json; charset=utf-8
Host: api.pedulilindungi.id
Connection: close
User-Agent: Paw/3.2 (Macintosh; OS X/10.16.0) GCDHTTPRequest
Content-Length: 26

{"nik":"121212121212"}



HTTP/1.1 200 OK
Server: nginx
Date: Fri, 01 Jan 2021 12:35:44 GMT
Content-Type: application/json; charset=UTF-8
Content-Length: 84
Connection: close
Access-Control-Allow-Origin: *
Vary: Origin
X-XSS-Protection: 1; mode=block
X-DNS-Prefetch-Control: off

{"success":true,"code":200,"message":"Identity successfully verified","data":false}
