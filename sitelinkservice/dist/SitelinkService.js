const soap = require('../node_modules/strong-soap/index').soap;

const sitelinkServiceDebug = require('debug')('sitelink-service');

/* Sitelink API Authorization */
const args = {
    sCorpCode: process.env.SITELINK_CORP_CODE,
    sCorpUserName: process.env.SITELINK_USERNAME,
    sCorpPassword: process.env.SITELINK_PASSWORD
};

function createClient() {
    return new Promise(
        function (resolve, reject) {
            soap.createClient(process.env.SITELINK_WSDL, function(err, client) {
                if(err) reject(err);
                resolve(client);
            });
        }
    );
}

const getUnitInformation = async (location) => {
    sitelinkServiceDebug('Checking for updated unit information... Timestamp: %s', getLocalTimestamp());
    args.sLocationCode = location;

    try {
        let client = await createClient();

        return new Promise(
            function (resolve, reject) {
                client.UnitsInformation_v2(args, function (err, result) {
                    if (err) {
                        reject(err); return;
                    }
                    resolve(result);
                });
            }
        );
    } catch (e) {
        sitelinkServiceDebug('%O', e);
    }
};

const getTypeInformation = async (location) => {
    sitelinkServiceDebug('Checking for updated type information... Timestamp: %s', getLocalTimestamp());
    args.sLocationCode = location;

    try {
        let client = await createClient();

        return new Promise(
            function (resolve, reject) {
                client.UnitTypePriceList_v2(args, function (err, result) {
                    if (err) {
                        reject(err); return;
                    }
                    resolve(result);
                });
            }
        );
    } catch (e) {
        sitelinkServiceDebug('%O', e);
    }
};

function getLocalTimestamp() {
    "use strict";
    let currentTS = new Date();
    currentTS.setHours(currentTS.getHours()-5);
    currentTS = currentTS.toUTCString().replace('GMT', 'CST');
    return currentTS;
}

module.exports = {
    getUnitInformation: getUnitInformation,
    getTypeInformation: getTypeInformation
};