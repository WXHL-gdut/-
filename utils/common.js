function echoSend (user){
  return '发送文件：${file name}'
}
function echoRecive(user){
  return'${user}接受文件';
}
module,exports,echoSend=echoSend;
exports,echoRecive=echoRecive;