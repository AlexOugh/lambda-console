
/*define([
  'moment',
  'enc-base64',
  'hmac',
  'hmac-sha256',
  'sha256'
],*/
(function() {

  function HeaderGenerator() {

  var AWS_SHA_256 = 'AWS4-HMAC-SHA256';
  var AWS4_REQUEST = 'aws4_request';
  var AWS4 = 'AWS4';
  var DATE_FORMAT = 'YYYYMMDD';
  var TIME_FORMAT = 'HHmmss';
  var X_AMZ_DATE = 'x-amz-date';
  var X_AMZ_SECURITY_TOKEN = 'x-amz-security-token';
  var HOST = 'host';
  var AUTHORIZATION = 'Authorization';

  var defaultContentType = 'application/json';
  var defaultAcceptType = 'application/json';


    HeaderGenerator.generate = function(verb, path, queryParams, body, accessKey, secretKey, sessionToken, region) {

    var headers = {};
/*
    //If the user has not specified an override for Content type the use default
    if(headers['Content-Type'] === undefined) {
        headers['Content-Type'] = defaultContentType;
    }

    //If the user has not specified an override for Accept type the use default
    if(headers['Accept'] === undefined) {
        headers['Accept'] = defaultAcceptType;
    }

    //var body = apiGateway.core.utils.copy(request.body);
    if (body === undefined || verb === 'GET') { // override request body and set to empty when signing GET requests
        body = '';
    }  else {
        body = JSON.stringify(body);
    }

    //If there is no body remove the content-type header so it is not included in SigV4 calculation
    if(body === '' || body === undefined || body === null) {
        delete headers['Content-Type'];
    }

    var date = moment.utc();
    headers[X_AMZ_DATE] = buildXAmzDate(date);
    var parser = document.createElement('a');
    parser.href = awsSigV4Client.endpoint;
    headers[HOST] = parser.host;

    var canonicalRequest = buildCanonicalRequest(verb, path, queryParams, headers, body);
    var hashedCanonicalRequest = hashCanonicalRequest(canonicalRequest);
    var credentialScope = buildCredentialScope(date, awsSigV4Client.region, awsSigV4Client.serviceName);
    var stringToSign = buildStringToSign(date, credentialScope, hashedCanonicalRequest);
    var signingKey = calculateSigningKey(awsSigV4Client.secretKey, date, awsSigV4Client.region, awsSigV4Client.serviceName);
    var signature = calculateSignature(signingKey, stringToSign);
    headers[AUTHORIZATION] = buildAuthorizationHeader(awsSigV4Client.accessKey, credentialScope, headers, signature);
    if(awsSigV4Client.sessionToken !== undefined && awsSigV4Client.sessionToken !== '') {
        headers[X_AMZ_SECURITY_TOKEN] = awsSigV4Client.sessionToken;
    }
    delete headers[HOST];

    var url = config.endpoint + path;
    var queryString = buildCanonicalQueryString(queryParams);
    if (queryString != '') {
        url += '?' + queryString;
    }

    //Need to re-attach Content-Type if it is not specified at this point
    if(headers['Content-Type'] === undefined) {
        headers['Content-Type'] = config.defaultContentType;
    }

    console.log('Content-Type : ' + headers['Content-Type']);
    console.log('Accept-Type : ' + headers['Accept']);
    console.log(AUTHORIZATION + ' : ' + headers[AUTHORIZATION]);
    console.log(X_AMZ_DATE + ' : ' + headers[X_AMZ_DATE]);
    console.log(X_AMZ_SECURITY_TOKEN + ' : ' + headers[X_AMZ_SECURITY_TOKEN]);
*/

    return headers;
  }

/*
    function hash(value) {
        return CryptoJS.SHA256(value);
    }

    function hexEncode(value) {
        return value.toString(CryptoJS.enc.Hex);
    }

    function hmac(secret, value) {
        return CryptoJS.HmacSHA256(value, secret, {asBytes: true});
    }

    function buildCanonicalRequest(method, path, queryParams, headers, payload) {
        return method + '\n' +
            buildCanonicalUri(path) + '\n' +
            buildCanonicalQueryString(queryParams) + '\n' +
            buildCanonicalHeaders(headers) + '\n' +
            buildCanonicalSignedHeaders(headers) + '\n' +
            hexEncode(hash(payload));
    }

    function hashCanonicalRequest(request) {
        return hexEncode(hash(request));
    }

    function buildCanonicalUri(uri) {
        return encodeURI(uri);
    }

    function buildCanonicalQueryString(queryParams) {
        if (Object.keys(queryParams).length < 1) {
            return '';
        }

        var sortedQueryParams = [];
        for (var property in queryParams) {
            if (queryParams.hasOwnProperty(property)) {
                sortedQueryParams.push(property);
            }
        }
        sortedQueryParams.sort();

        var canonicalQueryString = '';
        for (var i = 0; i < sortedQueryParams.length; i++) {
            canonicalQueryString += sortedQueryParams[i] + '=' + encodeURIComponent(queryParams[sortedQueryParams[i]]) + '&';
        }
        return canonicalQueryString.substr(0, canonicalQueryString.length - 1);
    }

    function buildCanonicalHeaders(headers) {
        var canonicalHeaders = '';
        var sortedKeys = [];
        for (var property in headers) {
            if (headers.hasOwnProperty(property)) {
                sortedKeys.push(property);
            }
        }
        sortedKeys.sort();

        for (var i = 0; i < sortedKeys.length; i++) {
            canonicalHeaders += sortedKeys[i].toLowerCase() + ':' + headers[sortedKeys[i]] + '\n';
        }
        return canonicalHeaders;
    }

    function buildCanonicalSignedHeaders(headers) {
        var sortedKeys = [];
        for (var property in headers) {
            if (headers.hasOwnProperty(property)) {
                sortedKeys.push(property.toLowerCase());
            }
        }
        sortedKeys.sort();

        return sortedKeys.join(';');
    }

    function buildStringToSign(date, credentialScope, hashedCanonicalRequest) {
        return AWS_SHA_256 + '\n' +
            buildXAmzDate(date) + '\n' +
            credentialScope + '\n' +
            hashedCanonicalRequest;
    }

    function buildCredentialScope(date, region, service) {
        return date.format(DATE_FORMAT) + '/' + region + '/' + service + '/' + AWS4_REQUEST
    }

    function calculateSigningKey(secretKey, date, region, service) {
        return hmac(hmac(hmac(hmac(AWS4 + secretKey, date.format(DATE_FORMAT)), region), service), AWS4_REQUEST);
    }

    function calculateSignature(key, stringToSign) {
        return hexEncode(hmac(key, stringToSign));
    }

    function buildXAmzDate(date) {
        return date.format(DATE_FORMAT) + 'T' + date.format(TIME_FORMAT) + 'Z';
    }

    function buildAuthorizationHeader(accessKey, credentialScope, headers, signature) {
        return AWS_SHA_256 + ' Credential=' + accessKey + '/' + credentialScope + ', SignedHeaders=' + buildCanonicalSignedHeaders(headers) + ', Signature=' + signature;
    }

    //return awsSigV4Client;
*/
  }

  module.exports = HeaderGenerator;
  return HeaderGenerator();

});
