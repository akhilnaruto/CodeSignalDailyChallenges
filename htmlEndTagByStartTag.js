/*
For startTag = "<button type='button' disabled>", the output should be
htmlEndTagByStartTag(startTag) = "</button>";
For startTag = "<i>", the output should be
htmlEndTagByStartTag(startTag) = "</i>".


*/

function htmlEndTagByStartTag(startTag) {
    debugger;
    var possibleStart = startTag.split(' ')[0];
    var excludelessThan = possibleStart.substring(1, possibleStart.length);
    var greaterThan = ">";
    var hasGreaterThan = excludelessThan.indexOf(greaterThan) > -1;
    var possibleResult = hasGreaterThan ? "</"+excludelessThan : "</"+excludelessThan+greaterThan;
    return possibleResult;
}
