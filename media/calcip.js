ips = [];

function calculateIpRange(ips, baseIp, init, limit) {
  for (let index = init; index <= limit; index++) {
    ipAddress = baseIp+index;
    if (ips.find(ip => ip == ipAddress) === undefined) {
      ips.push(ipAddress)
    }
  }
}

//177.92.121.192 - 177.92.121.255
calculateIpRange(ips, "177.92.121.", 192, 255)

//186.224.192.48 - 186.224.192.63
calculateIpRange(ips, "186.224.192.", 48, 63)

//189.125.206.208 - 189.125.206.223
calculateIpRange(ips, "189.125.206.", 208, 223)

//189.125.206.176 - 189.125.206.191
calculateIpRange(ips, "189.125.206.", 176, 191)

//200.142.102.0 - 200.142.102.63
calculateIpRange(ips, "200.142.102.", 0, 63)

// 45.177.100.80 - 45.177.100.95
calculateIpRange(ips, "45.177.102.", 80, 95)

//177.154.156.144 - 177.154.156.147
calculateIpRange(ips, "177.154.156.", 144, 147)

//177.154.156.148 - 177.154.156.151
calculateIpRange(ips, "177.154.156.", 148, 151)

//177.92.121.116 - 177.92.121.119
calculateIpRange(ips, "177.92.121.", 116, 119)

//201.20.16.32 - 201.20.16.47
calculateIpRange(ips, "201.20.16.", 32, 47)

ips.forEach(element => {
  console.log("\""+ element +"\",")
});