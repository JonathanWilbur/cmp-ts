/*
    BEGIN_MODULE PKIXCMP-2009
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-cmp2000-02
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    CertId,
    CertReqMessages,
    CertTemplate,
    EncryptedValue,
    PKIPublicationInfo,
    _decode_CertId,
    _decode_CertReqMessages,
    _decode_CertTemplate,
    _decode_EncryptedValue,
    _decode_PKIPublicationInfo,
    _encode_CertId,
    _encode_CertReqMessages,
    _encode_CertTemplate,
    _encode_EncryptedValue,
    _encode_PKIPublicationInfo,
} from "crmf-ts/dist/node/PKIXCRMF-2009";
import {
    CertificationRequest,
    _decode_CertificationRequest,
    _encode_CertificationRequest,
} from "pkcs-ts/dist/node/PKCS-10";
import {
    AlgorithmIdentifier,
    Certificate,
    CertificateList,
    Extensions,
    _decode_AlgorithmIdentifier,
    _decode_Certificate,
    _decode_CertificateList,
    _decode_Extensions,
    _encode_AlgorithmIdentifier,
    _encode_Certificate,
    _encode_CertificateList,
    _encode_Extensions,
} from "x500-ts/dist/node/AuthenticationFramework";
import {
    GeneralName,
    KeyIdentifier,
    _decode_GeneralName,
    _decode_KeyIdentifier,
    _encode_GeneralName,
    _encode_KeyIdentifier,
} from "x500-ts/dist/node/CertificateExtensions";
import * as __utils from "./__utils";

export type PKIHeader_pvno = asn1.INTEGER;
export const PKIHeader_pvno_cmp1999: PKIHeader_pvno = 1; /* LONG_NAMED_INTEGER_VALUE */
export const PKIHeader_pvno_cmp2000: PKIHeader_pvno = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_PKIHeader_pvno: __utils.ASN1Decoder<
    PKIHeader_pvno
> | null = null;
let _cached_encoder_for_PKIHeader_pvno: __utils.ASN1Encoder<
    PKIHeader_pvno
> | null = null;
export function _decode_PKIHeader_pvno(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIHeader_pvno) {
        _cached_decoder_for_PKIHeader_pvno = __utils._decodeInteger;
    }
    return _cached_decoder_for_PKIHeader_pvno(el);
}
export function _encode_PKIHeader_pvno(
    value: PKIHeader_pvno,
    elGetter: __utils.ASN1Encoder<PKIHeader_pvno>
) {
    if (!_cached_encoder_for_PKIHeader_pvno) {
        _cached_encoder_for_PKIHeader_pvno = __utils._encodeInteger;
    }
    return _cached_encoder_for_PKIHeader_pvno(value, elGetter);
}

export type PKIFreeText = asn1.UTF8String[]; // SequenceOfType
let _cached_decoder_for_PKIFreeText: __utils.ASN1Decoder<
    PKIFreeText
> | null = null;
let _cached_encoder_for_PKIFreeText: __utils.ASN1Encoder<
    PKIFreeText
> | null = null;
export function _decode_PKIFreeText(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIFreeText) {
        _cached_decoder_for_PKIFreeText = __utils._decodeSequenceOf<
            asn1.UTF8String
        >(() => __utils._decodeUTF8String);
    }
    return _cached_decoder_for_PKIFreeText(el);
}
export function _encode_PKIFreeText(
    value: PKIFreeText,
    elGetter: __utils.ASN1Encoder<PKIFreeText>
) {
    if (!_cached_encoder_for_PKIFreeText) {
        _cached_encoder_for_PKIFreeText = __utils._encodeSequenceOf<
            asn1.UTF8String
        >(() => __utils._encodeUTF8String, __utils.BER);
    }
    return _cached_encoder_for_PKIFreeText(value, elGetter);
}

export class InfoTypeAndValue {
    constructor(
        readonly infoType: asn1.OBJECT_IDENTIFIER,
        readonly infoValue: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_InfoTypeAndValue: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "infoType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "infoValue",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_InfoTypeAndValue: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_InfoTypeAndValue: __utils.ComponentSpec[] = [];
let _cached_decoder_for_InfoTypeAndValue: __utils.ASN1Decoder<
    InfoTypeAndValue
> | null = null;
let _cached_encoder_for_InfoTypeAndValue: __utils.ASN1Encoder<
    InfoTypeAndValue
> | null = null;
export function _decode_InfoTypeAndValue(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_InfoTypeAndValue) {
        _cached_decoder_for_InfoTypeAndValue = function (
            el: asn1.ASN1Element
        ): InfoTypeAndValue {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "InfoTypeAndValue contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "infoType";
            sequence[1].name = "infoValue";
            let infoType!: asn1.OBJECT_IDENTIFIER;
            let infoValue!: asn1.ASN1Element;
            infoType = __utils._decodeObjectIdentifier(sequence[0]);
            infoValue = __utils._decodeAny(sequence[1]);
            return new InfoTypeAndValue(infoType, infoValue);
        };
    }
    return _cached_decoder_for_InfoTypeAndValue(el);
}
export function _encode_InfoTypeAndValue(
    value: InfoTypeAndValue,
    elGetter: __utils.ASN1Encoder<InfoTypeAndValue>
) {
    if (!_cached_encoder_for_InfoTypeAndValue) {
        _cached_encoder_for_InfoTypeAndValue = function (
            value: InfoTypeAndValue,
            elGetter: __utils.ASN1Encoder<InfoTypeAndValue>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.infoType,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeAny(
                            value.infoValue,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_InfoTypeAndValue(value, elGetter);
}

export class PKIHeader {
    constructor(
        readonly pvno: PKIHeader_pvno,
        readonly sender: GeneralName,
        readonly recipient: GeneralName,
        readonly messageTime: asn1.OPTIONAL<asn1.GeneralizedTime>,
        readonly protectionAlg: asn1.OPTIONAL<AlgorithmIdentifier>,
        readonly senderKID: asn1.OPTIONAL<KeyIdentifier>,
        readonly recipKID: asn1.OPTIONAL<KeyIdentifier>,
        readonly transactionID: asn1.OPTIONAL<asn1.OCTET_STRING>,
        readonly senderNonce: asn1.OPTIONAL<asn1.OCTET_STRING>,
        readonly recipNonce: asn1.OPTIONAL<asn1.OCTET_STRING>,
        readonly freeText: asn1.OPTIONAL<PKIFreeText>,
        readonly generalInfo: asn1.OPTIONAL<InfoTypeAndValue[]>
    ) {}
}
export const _root_component_type_list_1_spec_for_PKIHeader: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "pvno",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sender",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "recipient",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "messageTime",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "protectionAlg",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "senderKID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "recipKID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "transactionID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "senderNonce",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "recipNonce",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "freeText",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "generalInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PKIHeader: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PKIHeader: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PKIHeader: __utils.ASN1Decoder<PKIHeader> | null = null;
let _cached_encoder_for_PKIHeader: __utils.ASN1Encoder<PKIHeader> | null = null;
export function _decode_PKIHeader(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIHeader) {
        _cached_decoder_for_PKIHeader = function (
            el: asn1.ASN1Element
        ): PKIHeader {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let pvno!: PKIHeader_pvno;
            let sender!: GeneralName;
            let recipient!: GeneralName;
            let messageTime: asn1.OPTIONAL<asn1.GeneralizedTime>;
            let protectionAlg: asn1.OPTIONAL<AlgorithmIdentifier>;
            let senderKID: asn1.OPTIONAL<KeyIdentifier>;
            let recipKID: asn1.OPTIONAL<KeyIdentifier>;
            let transactionID: asn1.OPTIONAL<asn1.OCTET_STRING>;
            let senderNonce: asn1.OPTIONAL<asn1.OCTET_STRING>;
            let recipNonce: asn1.OPTIONAL<asn1.OCTET_STRING>;
            let freeText: asn1.OPTIONAL<PKIFreeText>;
            let generalInfo: asn1.OPTIONAL<InfoTypeAndValue[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                pvno: (_el: asn1.ASN1Element): void => {
                    pvno = _decode_PKIHeader_pvno(_el);
                },
                sender: (_el: asn1.ASN1Element): void => {
                    sender = _decode_GeneralName(_el);
                },
                recipient: (_el: asn1.ASN1Element): void => {
                    recipient = _decode_GeneralName(_el);
                },
                messageTime: (_el: asn1.ASN1Element): void => {
                    messageTime = __utils._decode_explicit<
                        asn1.GeneralizedTime
                    >(() => __utils._decodeGeneralizedTime)(_el);
                },
                protectionAlg: (_el: asn1.ASN1Element): void => {
                    protectionAlg = __utils._decode_explicit<
                        AlgorithmIdentifier
                    >(() => _decode_AlgorithmIdentifier)(_el);
                },
                senderKID: (_el: asn1.ASN1Element): void => {
                    senderKID = __utils._decode_explicit<KeyIdentifier>(
                        () => _decode_KeyIdentifier
                    )(_el);
                },
                recipKID: (_el: asn1.ASN1Element): void => {
                    recipKID = __utils._decode_explicit<KeyIdentifier>(
                        () => _decode_KeyIdentifier
                    )(_el);
                },
                transactionID: (_el: asn1.ASN1Element): void => {
                    transactionID = __utils._decode_explicit<asn1.OCTET_STRING>(
                        () => __utils._decodeOctetString
                    )(_el);
                },
                senderNonce: (_el: asn1.ASN1Element): void => {
                    senderNonce = __utils._decode_explicit<asn1.OCTET_STRING>(
                        () => __utils._decodeOctetString
                    )(_el);
                },
                recipNonce: (_el: asn1.ASN1Element): void => {
                    recipNonce = __utils._decode_explicit<asn1.OCTET_STRING>(
                        () => __utils._decodeOctetString
                    )(_el);
                },
                freeText: (_el: asn1.ASN1Element): void => {
                    freeText = __utils._decode_explicit<PKIFreeText>(
                        () => _decode_PKIFreeText
                    )(_el);
                },
                generalInfo: (_el: asn1.ASN1Element): void => {
                    generalInfo = __utils._decode_explicit<InfoTypeAndValue[]>(
                        () =>
                            __utils._decodeSequenceOf<InfoTypeAndValue>(
                                () => _decode_InfoTypeAndValue
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PKIHeader,
                _extension_additions_list_spec_for_PKIHeader,
                _root_component_type_list_2_spec_for_PKIHeader,
                undefined
            );
            return new PKIHeader /* SEQUENCE_CONSTRUCTOR_CALL */(
                pvno,
                sender,
                recipient,
                messageTime,
                protectionAlg,
                senderKID,
                recipKID,
                transactionID,
                senderNonce,
                recipNonce,
                freeText,
                generalInfo
            );
        };
    }
    return _cached_decoder_for_PKIHeader(el);
}
export function _encode_PKIHeader(
    value: PKIHeader,
    elGetter: __utils.ASN1Encoder<PKIHeader>
) {
    if (!_cached_encoder_for_PKIHeader) {
        _cached_encoder_for_PKIHeader = function (
            value: PKIHeader,
            elGetter: __utils.ASN1Encoder<PKIHeader>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PKIHeader_pvno(
                            value.pvno,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_GeneralName(
                            value.sender,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_GeneralName(
                            value.recipient,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.messageTime === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => __utils._encodeGeneralizedTime,
                                  __utils.BER
                              )(value.messageTime, __utils.BER),
                        /* IF_ABSENT  */ value.protectionAlg === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_AlgorithmIdentifier,
                                  __utils.BER
                              )(value.protectionAlg, __utils.BER),
                        /* IF_ABSENT  */ value.senderKID === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => _encode_KeyIdentifier,
                                  __utils.BER
                              )(value.senderKID, __utils.BER),
                        /* IF_ABSENT  */ value.recipKID === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  3,
                                  () => _encode_KeyIdentifier,
                                  __utils.BER
                              )(value.recipKID, __utils.BER),
                        /* IF_ABSENT  */ value.transactionID === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  4,
                                  () => __utils._encodeOctetString,
                                  __utils.BER
                              )(value.transactionID, __utils.BER),
                        /* IF_ABSENT  */ value.senderNonce === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  5,
                                  () => __utils._encodeOctetString,
                                  __utils.BER
                              )(value.senderNonce, __utils.BER),
                        /* IF_ABSENT  */ value.recipNonce === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  6,
                                  () => __utils._encodeOctetString,
                                  __utils.BER
                              )(value.recipNonce, __utils.BER),
                        /* IF_ABSENT  */ value.freeText === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  7,
                                  () => _encode_PKIFreeText,
                                  __utils.BER
                              )(value.freeText, __utils.BER),
                        /* IF_ABSENT  */ value.generalInfo === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  8,
                                  () =>
                                      __utils._encodeSequenceOf<
                                          InfoTypeAndValue
                                      >(
                                          () => _encode_InfoTypeAndValue,
                                          __utils.BER
                                      ),
                                  __utils.BER
                              )(value.generalInfo, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PKIHeader(value, elGetter);
}

export type CMPCertificate =
    | { x509v3PKCert: Certificate } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CMPCertificate: __utils.ASN1Decoder<
    CMPCertificate
> | null = null;
let _cached_encoder_for_CMPCertificate: __utils.ASN1Encoder<
    CMPCertificate
> | null = null;
export function _decode_CMPCertificate(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CMPCertificate) {
        _cached_decoder_for_CMPCertificate = __utils._decode_extensible_choice<
            CMPCertificate
        >({
            "UNIVERSAL 16": ["x509v3PKCert", _decode_Certificate],
        });
    }
    return _cached_decoder_for_CMPCertificate(el);
}
export function _encode_CMPCertificate(
    value: CMPCertificate,
    elGetter: __utils.ASN1Encoder<CMPCertificate>
) {
    if (!_cached_encoder_for_CMPCertificate) {
        _cached_encoder_for_CMPCertificate = __utils._encode_choice<
            CMPCertificate
        >(
            {
                x509v3PKCert: _encode_Certificate,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_CMPCertificate(value, elGetter);
}

export type PKIStatus = asn1.INTEGER;
export const PKIStatus_accepted: PKIStatus = 0; /* LONG_NAMED_INTEGER_VALUE */
export const PKIStatus_grantedWithMods: PKIStatus = 1; /* LONG_NAMED_INTEGER_VALUE */
export const PKIStatus_rejection: PKIStatus = 2; /* LONG_NAMED_INTEGER_VALUE */
export const PKIStatus_waiting: PKIStatus = 3; /* LONG_NAMED_INTEGER_VALUE */
export const PKIStatus_revocationWarning: PKIStatus = 4; /* LONG_NAMED_INTEGER_VALUE */
export const PKIStatus_revocationNotification: PKIStatus = 5; /* LONG_NAMED_INTEGER_VALUE */
export const PKIStatus_keyUpdateWarning: PKIStatus = 6; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_PKIStatus: __utils.ASN1Decoder<PKIStatus> | null = null;
let _cached_encoder_for_PKIStatus: __utils.ASN1Encoder<PKIStatus> | null = null;
export function _decode_PKIStatus(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIStatus) {
        _cached_decoder_for_PKIStatus = __utils._decodeInteger;
    }
    return _cached_decoder_for_PKIStatus(el);
}
export function _encode_PKIStatus(
    value: PKIStatus,
    elGetter: __utils.ASN1Encoder<PKIStatus>
) {
    if (!_cached_encoder_for_PKIStatus) {
        _cached_encoder_for_PKIStatus = __utils._encodeInteger;
    }
    return _cached_encoder_for_PKIStatus(value, elGetter);
}

export type PKIFailureInfo = asn1.BIT_STRING;
export const PKIFailureInfo_badAlg: number = 0; /* LONG_NAMED_BIT */
export const PKIFailureInfo_badMessageCheck: number = 1; /* LONG_NAMED_BIT */
export const PKIFailureInfo_badRequest: number = 2; /* LONG_NAMED_BIT */
export const PKIFailureInfo_badTime: number = 3; /* LONG_NAMED_BIT */
export const PKIFailureInfo_badCertId: number = 4; /* LONG_NAMED_BIT */
export const PKIFailureInfo_badDataFormat: number = 5; /* LONG_NAMED_BIT */
export const PKIFailureInfo_wrongAuthority: number = 6; /* LONG_NAMED_BIT */
export const PKIFailureInfo_incorrectData: number = 7; /* LONG_NAMED_BIT */
export const PKIFailureInfo_missingTimeStamp: number = 8; /* LONG_NAMED_BIT */
export const PKIFailureInfo_badPOP: number = 9; /* LONG_NAMED_BIT */
export const PKIFailureInfo_certRevoked: number = 10; /* LONG_NAMED_BIT */
export const PKIFailureInfo_certConfirmed: number = 11; /* LONG_NAMED_BIT */
export const PKIFailureInfo_wrongIntegrity: number = 12; /* LONG_NAMED_BIT */
export const PKIFailureInfo_badRecipientNonce: number = 13; /* LONG_NAMED_BIT */
export const PKIFailureInfo_timeNotAvailable: number = 14; /* LONG_NAMED_BIT */
export const PKIFailureInfo_unacceptedPolicy: number = 15; /* LONG_NAMED_BIT */
export const PKIFailureInfo_unacceptedExtension: number = 16; /* LONG_NAMED_BIT */
export const PKIFailureInfo_addInfoNotAvailable: number = 17; /* LONG_NAMED_BIT */
export const PKIFailureInfo_badSenderNonce: number = 18; /* LONG_NAMED_BIT */
export const PKIFailureInfo_badCertTemplate: number = 19; /* LONG_NAMED_BIT */
export const PKIFailureInfo_signerNotTrusted: number = 20; /* LONG_NAMED_BIT */
export const PKIFailureInfo_transactionIdInUse: number = 21; /* LONG_NAMED_BIT */
export const PKIFailureInfo_unsupportedVersion: number = 22; /* LONG_NAMED_BIT */
export const PKIFailureInfo_notAuthorized: number = 23; /* LONG_NAMED_BIT */
export const PKIFailureInfo_systemUnavail: number = 24; /* LONG_NAMED_BIT */
export const PKIFailureInfo_systemFailure: number = 25; /* LONG_NAMED_BIT */
export const PKIFailureInfo_duplicateCertReq: number = 26; /* LONG_NAMED_BIT */
let _cached_decoder_for_PKIFailureInfo: __utils.ASN1Decoder<
    PKIFailureInfo
> | null = null;
let _cached_encoder_for_PKIFailureInfo: __utils.ASN1Encoder<
    PKIFailureInfo
> | null = null;
export function _decode_PKIFailureInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIFailureInfo) {
        _cached_decoder_for_PKIFailureInfo = __utils._decodeBitString;
    }
    return _cached_decoder_for_PKIFailureInfo(el);
}
export function _encode_PKIFailureInfo(
    value: PKIFailureInfo,
    elGetter: __utils.ASN1Encoder<PKIFailureInfo>
) {
    if (!_cached_encoder_for_PKIFailureInfo) {
        _cached_encoder_for_PKIFailureInfo = __utils._encodeBitString;
    }
    return _cached_encoder_for_PKIFailureInfo(value, elGetter);
}

export class PKIStatusInfo {
    constructor(
        readonly status: PKIStatus,
        readonly statusString: asn1.OPTIONAL<PKIFreeText>,
        readonly failInfo: asn1.OPTIONAL<PKIFailureInfo>
    ) {}
}
export const _root_component_type_list_1_spec_for_PKIStatusInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "status",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "statusString",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "failInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PKIStatusInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PKIStatusInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PKIStatusInfo: __utils.ASN1Decoder<
    PKIStatusInfo
> | null = null;
let _cached_encoder_for_PKIStatusInfo: __utils.ASN1Encoder<
    PKIStatusInfo
> | null = null;
export function _decode_PKIStatusInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIStatusInfo) {
        _cached_decoder_for_PKIStatusInfo = function (
            el: asn1.ASN1Element
        ): PKIStatusInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let status!: PKIStatus;
            let statusString: asn1.OPTIONAL<PKIFreeText>;
            let failInfo: asn1.OPTIONAL<PKIFailureInfo>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                status: (_el: asn1.ASN1Element): void => {
                    status = _decode_PKIStatus(_el);
                },
                statusString: (_el: asn1.ASN1Element): void => {
                    statusString = _decode_PKIFreeText(_el);
                },
                failInfo: (_el: asn1.ASN1Element): void => {
                    failInfo = _decode_PKIFailureInfo(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PKIStatusInfo,
                _extension_additions_list_spec_for_PKIStatusInfo,
                _root_component_type_list_2_spec_for_PKIStatusInfo,
                undefined
            );
            return new PKIStatusInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                status,
                statusString,
                failInfo
            );
        };
    }
    return _cached_decoder_for_PKIStatusInfo(el);
}
export function _encode_PKIStatusInfo(
    value: PKIStatusInfo,
    elGetter: __utils.ASN1Encoder<PKIStatusInfo>
) {
    if (!_cached_encoder_for_PKIStatusInfo) {
        _cached_encoder_for_PKIStatusInfo = function (
            value: PKIStatusInfo,
            elGetter: __utils.ASN1Encoder<PKIStatusInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PKIStatus(
                            value.status,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.statusString === undefined
                            ? undefined
                            : _encode_PKIFreeText(
                                  value.statusString,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.failInfo === undefined
                            ? undefined
                            : _encode_PKIFailureInfo(
                                  value.failInfo,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PKIStatusInfo(value, elGetter);
}

export type CertOrEncCert =
    | { certificate: CMPCertificate } /* CHOICE_ALT_ROOT */
    | { encryptedCert: EncryptedValue } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_CertOrEncCert: __utils.ASN1Decoder<
    CertOrEncCert
> | null = null;
let _cached_encoder_for_CertOrEncCert: __utils.ASN1Encoder<
    CertOrEncCert
> | null = null;
export function _decode_CertOrEncCert(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertOrEncCert) {
        _cached_decoder_for_CertOrEncCert = __utils._decode_inextensible_choice<
            CertOrEncCert
        >({
            "CONTEXT 0": [
                "certificate",
                __utils._decode_explicit<CMPCertificate>(
                    () => _decode_CMPCertificate
                ),
            ],
            "CONTEXT 1": [
                "encryptedCert",
                __utils._decode_explicit<EncryptedValue>(
                    () => _decode_EncryptedValue
                ),
            ],
        });
    }
    return _cached_decoder_for_CertOrEncCert(el);
}
export function _encode_CertOrEncCert(
    value: CertOrEncCert,
    elGetter: __utils.ASN1Encoder<CertOrEncCert>
) {
    if (!_cached_encoder_for_CertOrEncCert) {
        _cached_encoder_for_CertOrEncCert = __utils._encode_choice<
            CertOrEncCert
        >(
            {
                certificate: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_CMPCertificate,
                    __utils.BER
                ),
                encryptedCert: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_EncryptedValue,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_CertOrEncCert(value, elGetter);
}

export class CertifiedKeyPair {
    constructor(
        readonly certOrEncCert: CertOrEncCert,
        readonly privateKey: asn1.OPTIONAL<EncryptedValue>,
        readonly publicationInfo: asn1.OPTIONAL<PKIPublicationInfo>
    ) {}
}
export const _root_component_type_list_1_spec_for_CertifiedKeyPair: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certOrEncCert",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "privateKey",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "publicationInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertifiedKeyPair: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertifiedKeyPair: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertifiedKeyPair: __utils.ASN1Decoder<
    CertifiedKeyPair
> | null = null;
let _cached_encoder_for_CertifiedKeyPair: __utils.ASN1Encoder<
    CertifiedKeyPair
> | null = null;
export function _decode_CertifiedKeyPair(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertifiedKeyPair) {
        _cached_decoder_for_CertifiedKeyPair = function (
            el: asn1.ASN1Element
        ): CertifiedKeyPair {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certOrEncCert!: CertOrEncCert;
            let privateKey: asn1.OPTIONAL<EncryptedValue>;
            let publicationInfo: asn1.OPTIONAL<PKIPublicationInfo>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                certOrEncCert: (_el: asn1.ASN1Element): void => {
                    certOrEncCert = _decode_CertOrEncCert(_el);
                },
                privateKey: (_el: asn1.ASN1Element): void => {
                    privateKey = __utils._decode_explicit<EncryptedValue>(
                        () => _decode_EncryptedValue
                    )(_el);
                },
                publicationInfo: (_el: asn1.ASN1Element): void => {
                    publicationInfo = __utils._decode_explicit<
                        PKIPublicationInfo
                    >(() => _decode_PKIPublicationInfo)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertifiedKeyPair,
                _extension_additions_list_spec_for_CertifiedKeyPair,
                _root_component_type_list_2_spec_for_CertifiedKeyPair,
                undefined
            );
            return new CertifiedKeyPair /* SEQUENCE_CONSTRUCTOR_CALL */(
                certOrEncCert,
                privateKey,
                publicationInfo
            );
        };
    }
    return _cached_decoder_for_CertifiedKeyPair(el);
}
export function _encode_CertifiedKeyPair(
    value: CertifiedKeyPair,
    elGetter: __utils.ASN1Encoder<CertifiedKeyPair>
) {
    if (!_cached_encoder_for_CertifiedKeyPair) {
        _cached_encoder_for_CertifiedKeyPair = function (
            value: CertifiedKeyPair,
            elGetter: __utils.ASN1Encoder<CertifiedKeyPair>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CertOrEncCert(
                            value.certOrEncCert,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.privateKey === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_EncryptedValue,
                                  __utils.BER
                              )(value.privateKey, __utils.BER),
                        /* IF_ABSENT  */ value.publicationInfo === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_PKIPublicationInfo,
                                  __utils.BER
                              )(value.publicationInfo, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_CertifiedKeyPair(value, elGetter);
}

export class CertResponse {
    constructor(
        readonly certReqId: asn1.INTEGER,
        readonly status: PKIStatusInfo,
        readonly certifiedKeyPair: asn1.OPTIONAL<CertifiedKeyPair>,
        readonly rspInfo: asn1.OPTIONAL<asn1.OCTET_STRING>
    ) {}
}
export const _root_component_type_list_1_spec_for_CertResponse: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certReqId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "status",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certifiedKeyPair",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "rspInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertResponse: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertResponse: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertResponse: __utils.ASN1Decoder<
    CertResponse
> | null = null;
let _cached_encoder_for_CertResponse: __utils.ASN1Encoder<
    CertResponse
> | null = null;
export function _decode_CertResponse(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertResponse) {
        _cached_decoder_for_CertResponse = function (
            el: asn1.ASN1Element
        ): CertResponse {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certReqId!: asn1.INTEGER;
            let status!: PKIStatusInfo;
            let certifiedKeyPair: asn1.OPTIONAL<CertifiedKeyPair>;
            let rspInfo: asn1.OPTIONAL<asn1.OCTET_STRING>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                certReqId: (_el: asn1.ASN1Element): void => {
                    certReqId = __utils._decodeInteger(_el);
                },
                status: (_el: asn1.ASN1Element): void => {
                    status = _decode_PKIStatusInfo(_el);
                },
                certifiedKeyPair: (_el: asn1.ASN1Element): void => {
                    certifiedKeyPair = _decode_CertifiedKeyPair(_el);
                },
                rspInfo: (_el: asn1.ASN1Element): void => {
                    rspInfo = __utils._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertResponse,
                _extension_additions_list_spec_for_CertResponse,
                _root_component_type_list_2_spec_for_CertResponse,
                undefined
            );
            return new CertResponse /* SEQUENCE_CONSTRUCTOR_CALL */(
                certReqId,
                status,
                certifiedKeyPair,
                rspInfo
            );
        };
    }
    return _cached_decoder_for_CertResponse(el);
}
export function _encode_CertResponse(
    value: CertResponse,
    elGetter: __utils.ASN1Encoder<CertResponse>
) {
    if (!_cached_encoder_for_CertResponse) {
        _cached_encoder_for_CertResponse = function (
            value: CertResponse,
            elGetter: __utils.ASN1Encoder<CertResponse>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.certReqId,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_PKIStatusInfo(
                            value.status,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.certifiedKeyPair === undefined
                            ? undefined
                            : _encode_CertifiedKeyPair(
                                  value.certifiedKeyPair,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.rspInfo === undefined
                            ? undefined
                            : __utils._encodeOctetString(
                                  value.rspInfo,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_CertResponse(value, elGetter);
}

export class CertRepMessage {
    constructor(
        readonly caPubs: asn1.OPTIONAL<CMPCertificate[]>,
        readonly response: CertResponse[]
    ) {}
}
export const _root_component_type_list_1_spec_for_CertRepMessage: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "caPubs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "response",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertRepMessage: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertRepMessage: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertRepMessage: __utils.ASN1Decoder<
    CertRepMessage
> | null = null;
let _cached_encoder_for_CertRepMessage: __utils.ASN1Encoder<
    CertRepMessage
> | null = null;
export function _decode_CertRepMessage(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertRepMessage) {
        _cached_decoder_for_CertRepMessage = function (
            el: asn1.ASN1Element
        ): CertRepMessage {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let caPubs: asn1.OPTIONAL<CMPCertificate[]>;
            let response!: CertResponse[];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                caPubs: (_el: asn1.ASN1Element): void => {
                    caPubs = __utils._decode_explicit<CMPCertificate[]>(() =>
                        __utils._decodeSequenceOf<CMPCertificate>(
                            () => _decode_CMPCertificate
                        )
                    )(_el);
                },
                response: (_el: asn1.ASN1Element): void => {
                    response = __utils._decodeSequenceOf<CertResponse>(
                        () => _decode_CertResponse
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertRepMessage,
                _extension_additions_list_spec_for_CertRepMessage,
                _root_component_type_list_2_spec_for_CertRepMessage,
                undefined
            );
            return new CertRepMessage /* SEQUENCE_CONSTRUCTOR_CALL */(
                caPubs,
                response
            );
        };
    }
    return _cached_decoder_for_CertRepMessage(el);
}
export function _encode_CertRepMessage(
    value: CertRepMessage,
    elGetter: __utils.ASN1Encoder<CertRepMessage>
) {
    if (!_cached_encoder_for_CertRepMessage) {
        _cached_encoder_for_CertRepMessage = function (
            value: CertRepMessage,
            elGetter: __utils.ASN1Encoder<CertRepMessage>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.caPubs === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () =>
                                      __utils._encodeSequenceOf<CMPCertificate>(
                                          () => _encode_CMPCertificate,
                                          __utils.BER
                                      ),
                                  __utils.BER
                              )(value.caPubs, __utils.BER),
                        /* REQUIRED   */ __utils._encodeSequenceOf<
                            CertResponse
                        >(() => _encode_CertResponse, __utils.BER)(
                            value.response,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_CertRepMessage(value, elGetter);
}

export class Challenge {
    constructor(
        readonly owf: asn1.OPTIONAL<AlgorithmIdentifier>,
        readonly witness: asn1.OCTET_STRING,
        readonly challenge: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_Challenge: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "owf",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "witness",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "challenge",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Challenge: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Challenge: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Challenge: __utils.ASN1Decoder<Challenge> | null = null;
let _cached_encoder_for_Challenge: __utils.ASN1Encoder<Challenge> | null = null;
export function _decode_Challenge(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Challenge) {
        _cached_decoder_for_Challenge = function (
            el: asn1.ASN1Element
        ): Challenge {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let owf: asn1.OPTIONAL<AlgorithmIdentifier>;
            let witness!: asn1.OCTET_STRING;
            let challenge!: asn1.OCTET_STRING;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                owf: (_el: asn1.ASN1Element): void => {
                    owf = _decode_AlgorithmIdentifier(_el);
                },
                witness: (_el: asn1.ASN1Element): void => {
                    witness = __utils._decodeOctetString(_el);
                },
                challenge: (_el: asn1.ASN1Element): void => {
                    challenge = __utils._decodeOctetString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Challenge,
                _extension_additions_list_spec_for_Challenge,
                _root_component_type_list_2_spec_for_Challenge,
                undefined
            );
            return new Challenge /* SEQUENCE_CONSTRUCTOR_CALL */(
                owf,
                witness,
                challenge
            );
        };
    }
    return _cached_decoder_for_Challenge(el);
}
export function _encode_Challenge(
    value: Challenge,
    elGetter: __utils.ASN1Encoder<Challenge>
) {
    if (!_cached_encoder_for_Challenge) {
        _cached_encoder_for_Challenge = function (
            value: Challenge,
            elGetter: __utils.ASN1Encoder<Challenge>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.owf === undefined
                            ? undefined
                            : _encode_AlgorithmIdentifier(
                                  value.owf,
                                  __utils.BER
                              ),
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.witness,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.challenge,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Challenge(value, elGetter);
}

export type POPODecKeyChallContent = Challenge[]; // SequenceOfType
let _cached_decoder_for_POPODecKeyChallContent: __utils.ASN1Decoder<
    POPODecKeyChallContent
> | null = null;
let _cached_encoder_for_POPODecKeyChallContent: __utils.ASN1Encoder<
    POPODecKeyChallContent
> | null = null;
export function _decode_POPODecKeyChallContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_POPODecKeyChallContent) {
        _cached_decoder_for_POPODecKeyChallContent = __utils._decodeSequenceOf<
            Challenge
        >(() => _decode_Challenge);
    }
    return _cached_decoder_for_POPODecKeyChallContent(el);
}
export function _encode_POPODecKeyChallContent(
    value: POPODecKeyChallContent,
    elGetter: __utils.ASN1Encoder<POPODecKeyChallContent>
) {
    if (!_cached_encoder_for_POPODecKeyChallContent) {
        _cached_encoder_for_POPODecKeyChallContent = __utils._encodeSequenceOf<
            Challenge
        >(() => _encode_Challenge, __utils.BER);
    }
    return _cached_encoder_for_POPODecKeyChallContent(value, elGetter);
}

export type POPODecKeyRespContent = asn1.INTEGER[]; // SequenceOfType
let _cached_decoder_for_POPODecKeyRespContent: __utils.ASN1Decoder<
    POPODecKeyRespContent
> | null = null;
let _cached_encoder_for_POPODecKeyRespContent: __utils.ASN1Encoder<
    POPODecKeyRespContent
> | null = null;
export function _decode_POPODecKeyRespContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_POPODecKeyRespContent) {
        _cached_decoder_for_POPODecKeyRespContent = __utils._decodeSequenceOf<
            asn1.INTEGER
        >(() => __utils._decodeInteger);
    }
    return _cached_decoder_for_POPODecKeyRespContent(el);
}
export function _encode_POPODecKeyRespContent(
    value: POPODecKeyRespContent,
    elGetter: __utils.ASN1Encoder<POPODecKeyRespContent>
) {
    if (!_cached_encoder_for_POPODecKeyRespContent) {
        _cached_encoder_for_POPODecKeyRespContent = __utils._encodeSequenceOf<
            asn1.INTEGER
        >(() => __utils._encodeInteger, __utils.BER);
    }
    return _cached_encoder_for_POPODecKeyRespContent(value, elGetter);
}

export class KeyRecRepContent {
    constructor(
        readonly status: PKIStatusInfo,
        readonly newSigCert: asn1.OPTIONAL<CMPCertificate>,
        readonly caCerts: asn1.OPTIONAL<CMPCertificate[]>,
        readonly keyPairHist: asn1.OPTIONAL<CertifiedKeyPair[]>
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyRecRepContent: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "status",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "newSigCert",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "caCerts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyPairHist",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KeyRecRepContent: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KeyRecRepContent: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KeyRecRepContent: __utils.ASN1Decoder<
    KeyRecRepContent
> | null = null;
let _cached_encoder_for_KeyRecRepContent: __utils.ASN1Encoder<
    KeyRecRepContent
> | null = null;
export function _decode_KeyRecRepContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyRecRepContent) {
        _cached_decoder_for_KeyRecRepContent = function (
            el: asn1.ASN1Element
        ): KeyRecRepContent {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let status!: PKIStatusInfo;
            let newSigCert: asn1.OPTIONAL<CMPCertificate>;
            let caCerts: asn1.OPTIONAL<CMPCertificate[]>;
            let keyPairHist: asn1.OPTIONAL<CertifiedKeyPair[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                status: (_el: asn1.ASN1Element): void => {
                    status = _decode_PKIStatusInfo(_el);
                },
                newSigCert: (_el: asn1.ASN1Element): void => {
                    newSigCert = __utils._decode_explicit<CMPCertificate>(
                        () => _decode_CMPCertificate
                    )(_el);
                },
                caCerts: (_el: asn1.ASN1Element): void => {
                    caCerts = __utils._decode_explicit<CMPCertificate[]>(() =>
                        __utils._decodeSequenceOf<CMPCertificate>(
                            () => _decode_CMPCertificate
                        )
                    )(_el);
                },
                keyPairHist: (_el: asn1.ASN1Element): void => {
                    keyPairHist = __utils._decode_explicit<CertifiedKeyPair[]>(
                        () =>
                            __utils._decodeSequenceOf<CertifiedKeyPair>(
                                () => _decode_CertifiedKeyPair
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_KeyRecRepContent,
                _extension_additions_list_spec_for_KeyRecRepContent,
                _root_component_type_list_2_spec_for_KeyRecRepContent,
                undefined
            );
            return new KeyRecRepContent /* SEQUENCE_CONSTRUCTOR_CALL */(
                status,
                newSigCert,
                caCerts,
                keyPairHist
            );
        };
    }
    return _cached_decoder_for_KeyRecRepContent(el);
}
export function _encode_KeyRecRepContent(
    value: KeyRecRepContent,
    elGetter: __utils.ASN1Encoder<KeyRecRepContent>
) {
    if (!_cached_encoder_for_KeyRecRepContent) {
        _cached_encoder_for_KeyRecRepContent = function (
            value: KeyRecRepContent,
            elGetter: __utils.ASN1Encoder<KeyRecRepContent>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PKIStatusInfo(
                            value.status,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.newSigCert === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_CMPCertificate,
                                  __utils.BER
                              )(value.newSigCert, __utils.BER),
                        /* IF_ABSENT  */ value.caCerts === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () =>
                                      __utils._encodeSequenceOf<CMPCertificate>(
                                          () => _encode_CMPCertificate,
                                          __utils.BER
                                      ),
                                  __utils.BER
                              )(value.caCerts, __utils.BER),
                        /* IF_ABSENT  */ value.keyPairHist === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () =>
                                      __utils._encodeSequenceOf<
                                          CertifiedKeyPair
                                      >(
                                          () => _encode_CertifiedKeyPair,
                                          __utils.BER
                                      ),
                                  __utils.BER
                              )(value.keyPairHist, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_KeyRecRepContent(value, elGetter);
}

export class RevDetails {
    constructor(
        readonly certDetails: CertTemplate,
        readonly crlEntryDetails: asn1.OPTIONAL<Extensions>
    ) {}
}
export const _root_component_type_list_1_spec_for_RevDetails: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certDetails",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "crlEntryDetails",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RevDetails: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RevDetails: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RevDetails: __utils.ASN1Decoder<
    RevDetails
> | null = null;
let _cached_encoder_for_RevDetails: __utils.ASN1Encoder<
    RevDetails
> | null = null;
export function _decode_RevDetails(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RevDetails) {
        _cached_decoder_for_RevDetails = function (
            el: asn1.ASN1Element
        ): RevDetails {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certDetails!: CertTemplate;
            let crlEntryDetails: asn1.OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                certDetails: (_el: asn1.ASN1Element): void => {
                    certDetails = _decode_CertTemplate(_el);
                },
                crlEntryDetails: (_el: asn1.ASN1Element): void => {
                    crlEntryDetails = _decode_Extensions(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RevDetails,
                _extension_additions_list_spec_for_RevDetails,
                _root_component_type_list_2_spec_for_RevDetails,
                undefined
            );
            return new RevDetails /* SEQUENCE_CONSTRUCTOR_CALL */(
                certDetails,
                crlEntryDetails
            );
        };
    }
    return _cached_decoder_for_RevDetails(el);
}
export function _encode_RevDetails(
    value: RevDetails,
    elGetter: __utils.ASN1Encoder<RevDetails>
) {
    if (!_cached_encoder_for_RevDetails) {
        _cached_encoder_for_RevDetails = function (
            value: RevDetails,
            elGetter: __utils.ASN1Encoder<RevDetails>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CertTemplate(
                            value.certDetails,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.crlEntryDetails === undefined
                            ? undefined
                            : _encode_Extensions(
                                  value.crlEntryDetails,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_RevDetails(value, elGetter);
}

export type RevReqContent = RevDetails[]; // SequenceOfType
let _cached_decoder_for_RevReqContent: __utils.ASN1Decoder<
    RevReqContent
> | null = null;
let _cached_encoder_for_RevReqContent: __utils.ASN1Encoder<
    RevReqContent
> | null = null;
export function _decode_RevReqContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RevReqContent) {
        _cached_decoder_for_RevReqContent = __utils._decodeSequenceOf<
            RevDetails
        >(() => _decode_RevDetails);
    }
    return _cached_decoder_for_RevReqContent(el);
}
export function _encode_RevReqContent(
    value: RevReqContent,
    elGetter: __utils.ASN1Encoder<RevReqContent>
) {
    if (!_cached_encoder_for_RevReqContent) {
        _cached_encoder_for_RevReqContent = __utils._encodeSequenceOf<
            RevDetails
        >(() => _encode_RevDetails, __utils.BER);
    }
    return _cached_encoder_for_RevReqContent(value, elGetter);
}

export class RevRepContent {
    constructor(
        readonly status: PKIStatusInfo[],
        readonly revCerts: asn1.OPTIONAL<CertId[]>,
        readonly crls: asn1.OPTIONAL<CertificateList[]>
    ) {}
}
export const _root_component_type_list_1_spec_for_RevRepContent: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "status",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "revCerts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "crls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RevRepContent: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RevRepContent: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RevRepContent: __utils.ASN1Decoder<
    RevRepContent
> | null = null;
let _cached_encoder_for_RevRepContent: __utils.ASN1Encoder<
    RevRepContent
> | null = null;
export function _decode_RevRepContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RevRepContent) {
        _cached_decoder_for_RevRepContent = function (
            el: asn1.ASN1Element
        ): RevRepContent {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let status!: PKIStatusInfo[];
            let revCerts: asn1.OPTIONAL<CertId[]>;
            let crls: asn1.OPTIONAL<CertificateList[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                status: (_el: asn1.ASN1Element): void => {
                    status = __utils._decodeSequenceOf<PKIStatusInfo>(
                        () => _decode_PKIStatusInfo
                    )(_el);
                },
                revCerts: (_el: asn1.ASN1Element): void => {
                    revCerts = __utils._decode_explicit<CertId[]>(() =>
                        __utils._decodeSequenceOf<CertId>(() => _decode_CertId)
                    )(_el);
                },
                crls: (_el: asn1.ASN1Element): void => {
                    crls = __utils._decode_explicit<CertificateList[]>(() =>
                        __utils._decodeSequenceOf<CertificateList>(
                            () => _decode_CertificateList
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RevRepContent,
                _extension_additions_list_spec_for_RevRepContent,
                _root_component_type_list_2_spec_for_RevRepContent,
                undefined
            );
            return new RevRepContent /* SEQUENCE_CONSTRUCTOR_CALL */(
                status,
                revCerts,
                crls
            );
        };
    }
    return _cached_decoder_for_RevRepContent(el);
}
export function _encode_RevRepContent(
    value: RevRepContent,
    elGetter: __utils.ASN1Encoder<RevRepContent>
) {
    if (!_cached_encoder_for_RevRepContent) {
        _cached_encoder_for_RevRepContent = function (
            value: RevRepContent,
            elGetter: __utils.ASN1Encoder<RevRepContent>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeSequenceOf<
                            PKIStatusInfo
                        >(() => _encode_PKIStatusInfo, __utils.BER)(
                            value.status,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.revCerts === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () =>
                                      __utils._encodeSequenceOf<CertId>(
                                          () => _encode_CertId,
                                          __utils.BER
                                      ),
                                  __utils.BER
                              )(value.revCerts, __utils.BER),
                        /* IF_ABSENT  */ value.crls === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () =>
                                      __utils._encodeSequenceOf<
                                          CertificateList
                                      >(
                                          () => _encode_CertificateList,
                                          __utils.BER
                                      ),
                                  __utils.BER
                              )(value.crls, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_RevRepContent(value, elGetter);
}

export class CAKeyUpdAnnContent {
    constructor(
        readonly oldWithNew: CMPCertificate,
        readonly newWithOld: CMPCertificate,
        readonly newWithNew: CMPCertificate
    ) {}
}
export const _root_component_type_list_1_spec_for_CAKeyUpdAnnContent: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "oldWithNew",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "newWithOld",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "newWithNew",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CAKeyUpdAnnContent: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CAKeyUpdAnnContent: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CAKeyUpdAnnContent: __utils.ASN1Decoder<
    CAKeyUpdAnnContent
> | null = null;
let _cached_encoder_for_CAKeyUpdAnnContent: __utils.ASN1Encoder<
    CAKeyUpdAnnContent
> | null = null;
export function _decode_CAKeyUpdAnnContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CAKeyUpdAnnContent) {
        _cached_decoder_for_CAKeyUpdAnnContent = function (
            el: asn1.ASN1Element
        ): CAKeyUpdAnnContent {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "CAKeyUpdAnnContent contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "oldWithNew";
            sequence[1].name = "newWithOld";
            sequence[2].name = "newWithNew";
            let oldWithNew!: CMPCertificate;
            let newWithOld!: CMPCertificate;
            let newWithNew!: CMPCertificate;
            oldWithNew = _decode_CMPCertificate(sequence[0]);
            newWithOld = _decode_CMPCertificate(sequence[1]);
            newWithNew = _decode_CMPCertificate(sequence[2]);
            return new CAKeyUpdAnnContent(oldWithNew, newWithOld, newWithNew);
        };
    }
    return _cached_decoder_for_CAKeyUpdAnnContent(el);
}
export function _encode_CAKeyUpdAnnContent(
    value: CAKeyUpdAnnContent,
    elGetter: __utils.ASN1Encoder<CAKeyUpdAnnContent>
) {
    if (!_cached_encoder_for_CAKeyUpdAnnContent) {
        _cached_encoder_for_CAKeyUpdAnnContent = function (
            value: CAKeyUpdAnnContent,
            elGetter: __utils.ASN1Encoder<CAKeyUpdAnnContent>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMPCertificate(
                            value.oldWithNew,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_CMPCertificate(
                            value.newWithOld,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_CMPCertificate(
                            value.newWithNew,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_CAKeyUpdAnnContent(value, elGetter);
}

export type CertAnnContent = CMPCertificate; // DefinedType
let _cached_decoder_for_CertAnnContent: __utils.ASN1Decoder<
    CertAnnContent
> | null = null;
let _cached_encoder_for_CertAnnContent: __utils.ASN1Encoder<
    CertAnnContent
> | null = null;
export function _decode_CertAnnContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertAnnContent) {
        _cached_decoder_for_CertAnnContent = _decode_CMPCertificate;
    }
    return _cached_decoder_for_CertAnnContent(el);
}
export function _encode_CertAnnContent(
    value: CertAnnContent,
    elGetter: __utils.ASN1Encoder<CertAnnContent>
) {
    if (!_cached_encoder_for_CertAnnContent) {
        _cached_encoder_for_CertAnnContent = _encode_CMPCertificate;
    }
    return _cached_encoder_for_CertAnnContent(value, elGetter);
}

export class RevAnnContent {
    constructor(
        readonly status: PKIStatus,
        readonly certId: CertId,
        readonly willBeRevokedAt: asn1.GeneralizedTime,
        readonly badSinceDate: asn1.GeneralizedTime,
        readonly crlDetails: asn1.OPTIONAL<Extensions>
    ) {}
}
export const _root_component_type_list_1_spec_for_RevAnnContent: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "status",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "willBeRevokedAt",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "badSinceDate",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "crlDetails",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RevAnnContent: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RevAnnContent: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RevAnnContent: __utils.ASN1Decoder<
    RevAnnContent
> | null = null;
let _cached_encoder_for_RevAnnContent: __utils.ASN1Encoder<
    RevAnnContent
> | null = null;
export function _decode_RevAnnContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RevAnnContent) {
        _cached_decoder_for_RevAnnContent = function (
            el: asn1.ASN1Element
        ): RevAnnContent {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let status!: PKIStatus;
            let certId!: CertId;
            let willBeRevokedAt!: asn1.GeneralizedTime;
            let badSinceDate!: asn1.GeneralizedTime;
            let crlDetails: asn1.OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                status: (_el: asn1.ASN1Element): void => {
                    status = _decode_PKIStatus(_el);
                },
                certId: (_el: asn1.ASN1Element): void => {
                    certId = _decode_CertId(_el);
                },
                willBeRevokedAt: (_el: asn1.ASN1Element): void => {
                    willBeRevokedAt = __utils._decodeGeneralizedTime(_el);
                },
                badSinceDate: (_el: asn1.ASN1Element): void => {
                    badSinceDate = __utils._decodeGeneralizedTime(_el);
                },
                crlDetails: (_el: asn1.ASN1Element): void => {
                    crlDetails = _decode_Extensions(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RevAnnContent,
                _extension_additions_list_spec_for_RevAnnContent,
                _root_component_type_list_2_spec_for_RevAnnContent,
                undefined
            );
            return new RevAnnContent /* SEQUENCE_CONSTRUCTOR_CALL */(
                status,
                certId,
                willBeRevokedAt,
                badSinceDate,
                crlDetails
            );
        };
    }
    return _cached_decoder_for_RevAnnContent(el);
}
export function _encode_RevAnnContent(
    value: RevAnnContent,
    elGetter: __utils.ASN1Encoder<RevAnnContent>
) {
    if (!_cached_encoder_for_RevAnnContent) {
        _cached_encoder_for_RevAnnContent = function (
            value: RevAnnContent,
            elGetter: __utils.ASN1Encoder<RevAnnContent>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PKIStatus(
                            value.status,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_CertId(
                            value.certId,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeGeneralizedTime(
                            value.willBeRevokedAt,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeGeneralizedTime(
                            value.badSinceDate,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.crlDetails === undefined
                            ? undefined
                            : _encode_Extensions(value.crlDetails, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_RevAnnContent(value, elGetter);
}

export type CRLAnnContent = CertificateList[]; // SequenceOfType
let _cached_decoder_for_CRLAnnContent: __utils.ASN1Decoder<
    CRLAnnContent
> | null = null;
let _cached_encoder_for_CRLAnnContent: __utils.ASN1Encoder<
    CRLAnnContent
> | null = null;
export function _decode_CRLAnnContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CRLAnnContent) {
        _cached_decoder_for_CRLAnnContent = __utils._decodeSequenceOf<
            CertificateList
        >(() => _decode_CertificateList);
    }
    return _cached_decoder_for_CRLAnnContent(el);
}
export function _encode_CRLAnnContent(
    value: CRLAnnContent,
    elGetter: __utils.ASN1Encoder<CRLAnnContent>
) {
    if (!_cached_encoder_for_CRLAnnContent) {
        _cached_encoder_for_CRLAnnContent = __utils._encodeSequenceOf<
            CertificateList
        >(() => _encode_CertificateList, __utils.BER);
    }
    return _cached_encoder_for_CRLAnnContent(value, elGetter);
}

export type PKIConfirmContent = asn1.NULL; // NullType
let _cached_decoder_for_PKIConfirmContent: __utils.ASN1Decoder<
    PKIConfirmContent
> | null = null;
let _cached_encoder_for_PKIConfirmContent: __utils.ASN1Encoder<
    PKIConfirmContent
> | null = null;
export function _decode_PKIConfirmContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIConfirmContent) {
        _cached_decoder_for_PKIConfirmContent = __utils._decodeNull;
    }
    return _cached_decoder_for_PKIConfirmContent(el);
}
export function _encode_PKIConfirmContent(
    value: PKIConfirmContent,
    elGetter: __utils.ASN1Encoder<PKIConfirmContent>
) {
    if (!_cached_encoder_for_PKIConfirmContent) {
        _cached_encoder_for_PKIConfirmContent = __utils._encodeNull;
    }
    return _cached_encoder_for_PKIConfirmContent(value, elGetter);
}

export type PKIProtection = asn1.BIT_STRING;
let _cached_decoder_for_PKIProtection: __utils.ASN1Decoder<
    PKIProtection
> | null = null;
let _cached_encoder_for_PKIProtection: __utils.ASN1Encoder<
    PKIProtection
> | null = null;
export function _decode_PKIProtection(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIProtection) {
        _cached_decoder_for_PKIProtection = __utils._decodeBitString;
    }
    return _cached_decoder_for_PKIProtection(el);
}
export function _encode_PKIProtection(
    value: PKIProtection,
    elGetter: __utils.ASN1Encoder<PKIProtection>
) {
    if (!_cached_encoder_for_PKIProtection) {
        _cached_encoder_for_PKIProtection = __utils._encodeBitString;
    }
    return _cached_encoder_for_PKIProtection(value, elGetter);
}

export class PKIMessage {
    constructor(
        readonly header: PKIHeader,
        readonly body: PKIBody,
        readonly protection: asn1.OPTIONAL<PKIProtection>,
        readonly extraCerts: asn1.OPTIONAL<CMPCertificate[]>
    ) {}
}
export const _root_component_type_list_1_spec_for_PKIMessage: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "header",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "body",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "protection",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extraCerts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PKIMessage: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PKIMessage: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PKIMessage: __utils.ASN1Decoder<
    PKIMessage
> | null = null;
let _cached_encoder_for_PKIMessage: __utils.ASN1Encoder<
    PKIMessage
> | null = null;
export function _decode_PKIMessage(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIMessage) {
        _cached_decoder_for_PKIMessage = function (
            el: asn1.ASN1Element
        ): PKIMessage {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let header!: PKIHeader;
            let body!: PKIBody;
            let protection: asn1.OPTIONAL<PKIProtection>;
            let extraCerts: asn1.OPTIONAL<CMPCertificate[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                header: (_el: asn1.ASN1Element): void => {
                    header = _decode_PKIHeader(_el);
                },
                body: (_el: asn1.ASN1Element): void => {
                    body = _decode_PKIBody(_el);
                },
                protection: (_el: asn1.ASN1Element): void => {
                    protection = __utils._decode_explicit<PKIProtection>(
                        () => _decode_PKIProtection
                    )(_el);
                },
                extraCerts: (_el: asn1.ASN1Element): void => {
                    extraCerts = __utils._decode_explicit<CMPCertificate[]>(
                        () =>
                            __utils._decodeSequenceOf<CMPCertificate>(
                                () => _decode_CMPCertificate
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PKIMessage,
                _extension_additions_list_spec_for_PKIMessage,
                _root_component_type_list_2_spec_for_PKIMessage,
                undefined
            );
            return new PKIMessage /* SEQUENCE_CONSTRUCTOR_CALL */(
                header,
                body,
                protection,
                extraCerts
            );
        };
    }
    return _cached_decoder_for_PKIMessage(el);
}
export function _encode_PKIMessage(
    value: PKIMessage,
    elGetter: __utils.ASN1Encoder<PKIMessage>
) {
    if (!_cached_encoder_for_PKIMessage) {
        _cached_encoder_for_PKIMessage = function (
            value: PKIMessage,
            elGetter: __utils.ASN1Encoder<PKIMessage>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PKIHeader(
                            value.header,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_PKIBody(
                            value.body,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.protection === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_PKIProtection,
                                  __utils.BER
                              )(value.protection, __utils.BER),
                        /* IF_ABSENT  */ value.extraCerts === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () =>
                                      __utils._encodeSequenceOf<CMPCertificate>(
                                          () => _encode_CMPCertificate,
                                          __utils.BER
                                      ),
                                  __utils.BER
                              )(value.extraCerts, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PKIMessage(value, elGetter);
}

export type PKIMessages = PKIMessage[]; // SequenceOfType
let _cached_decoder_for_PKIMessages: __utils.ASN1Decoder<
    PKIMessages
> | null = null;
let _cached_encoder_for_PKIMessages: __utils.ASN1Encoder<
    PKIMessages
> | null = null;
export function _decode_PKIMessages(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIMessages) {
        _cached_decoder_for_PKIMessages = __utils._decodeSequenceOf<PKIMessage>(
            () => _decode_PKIMessage
        );
    }
    return _cached_decoder_for_PKIMessages(el);
}
export function _encode_PKIMessages(
    value: PKIMessages,
    elGetter: __utils.ASN1Encoder<PKIMessages>
) {
    if (!_cached_encoder_for_PKIMessages) {
        _cached_encoder_for_PKIMessages = __utils._encodeSequenceOf<PKIMessage>(
            () => _encode_PKIMessage,
            __utils.BER
        );
    }
    return _cached_encoder_for_PKIMessages(value, elGetter);
}

export type NestedMessageContent = PKIMessages; // DefinedType
let _cached_decoder_for_NestedMessageContent: __utils.ASN1Decoder<
    NestedMessageContent
> | null = null;
let _cached_encoder_for_NestedMessageContent: __utils.ASN1Encoder<
    NestedMessageContent
> | null = null;
export function _decode_NestedMessageContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NestedMessageContent) {
        _cached_decoder_for_NestedMessageContent = _decode_PKIMessages;
    }
    return _cached_decoder_for_NestedMessageContent(el);
}
export function _encode_NestedMessageContent(
    value: NestedMessageContent,
    elGetter: __utils.ASN1Encoder<NestedMessageContent>
) {
    if (!_cached_encoder_for_NestedMessageContent) {
        _cached_encoder_for_NestedMessageContent = _encode_PKIMessages;
    }
    return _cached_encoder_for_NestedMessageContent(value, elGetter);
}

export type GenMsgContent = InfoTypeAndValue[]; // SequenceOfType
let _cached_decoder_for_GenMsgContent: __utils.ASN1Decoder<
    GenMsgContent
> | null = null;
let _cached_encoder_for_GenMsgContent: __utils.ASN1Encoder<
    GenMsgContent
> | null = null;
export function _decode_GenMsgContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_GenMsgContent) {
        _cached_decoder_for_GenMsgContent = __utils._decodeSequenceOf<
            InfoTypeAndValue
        >(() => _decode_InfoTypeAndValue);
    }
    return _cached_decoder_for_GenMsgContent(el);
}
export function _encode_GenMsgContent(
    value: GenMsgContent,
    elGetter: __utils.ASN1Encoder<GenMsgContent>
) {
    if (!_cached_encoder_for_GenMsgContent) {
        _cached_encoder_for_GenMsgContent = __utils._encodeSequenceOf<
            InfoTypeAndValue
        >(() => _encode_InfoTypeAndValue, __utils.BER);
    }
    return _cached_encoder_for_GenMsgContent(value, elGetter);
}

export type GenRepContent = InfoTypeAndValue[]; // SequenceOfType
let _cached_decoder_for_GenRepContent: __utils.ASN1Decoder<
    GenRepContent
> | null = null;
let _cached_encoder_for_GenRepContent: __utils.ASN1Encoder<
    GenRepContent
> | null = null;
export function _decode_GenRepContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_GenRepContent) {
        _cached_decoder_for_GenRepContent = __utils._decodeSequenceOf<
            InfoTypeAndValue
        >(() => _decode_InfoTypeAndValue);
    }
    return _cached_decoder_for_GenRepContent(el);
}
export function _encode_GenRepContent(
    value: GenRepContent,
    elGetter: __utils.ASN1Encoder<GenRepContent>
) {
    if (!_cached_encoder_for_GenRepContent) {
        _cached_encoder_for_GenRepContent = __utils._encodeSequenceOf<
            InfoTypeAndValue
        >(() => _encode_InfoTypeAndValue, __utils.BER);
    }
    return _cached_encoder_for_GenRepContent(value, elGetter);
}

export class ErrorMsgContent {
    constructor(
        readonly pKIStatusInfo: PKIStatusInfo,
        readonly errorCode: asn1.OPTIONAL<asn1.INTEGER>,
        readonly errorDetails: asn1.OPTIONAL<PKIFreeText>
    ) {}
}
export const _root_component_type_list_1_spec_for_ErrorMsgContent: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "pKIStatusInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "errorCode",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "errorDetails",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ErrorMsgContent: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ErrorMsgContent: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ErrorMsgContent: __utils.ASN1Decoder<
    ErrorMsgContent
> | null = null;
let _cached_encoder_for_ErrorMsgContent: __utils.ASN1Encoder<
    ErrorMsgContent
> | null = null;
export function _decode_ErrorMsgContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ErrorMsgContent) {
        _cached_decoder_for_ErrorMsgContent = function (
            el: asn1.ASN1Element
        ): ErrorMsgContent {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let pKIStatusInfo!: PKIStatusInfo;
            let errorCode: asn1.OPTIONAL<asn1.INTEGER>;
            let errorDetails: asn1.OPTIONAL<PKIFreeText>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                pKIStatusInfo: (_el: asn1.ASN1Element): void => {
                    pKIStatusInfo = _decode_PKIStatusInfo(_el);
                },
                errorCode: (_el: asn1.ASN1Element): void => {
                    errorCode = __utils._decodeInteger(_el);
                },
                errorDetails: (_el: asn1.ASN1Element): void => {
                    errorDetails = _decode_PKIFreeText(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ErrorMsgContent,
                _extension_additions_list_spec_for_ErrorMsgContent,
                _root_component_type_list_2_spec_for_ErrorMsgContent,
                undefined
            );
            return new ErrorMsgContent /* SEQUENCE_CONSTRUCTOR_CALL */(
                pKIStatusInfo,
                errorCode,
                errorDetails
            );
        };
    }
    return _cached_decoder_for_ErrorMsgContent(el);
}
export function _encode_ErrorMsgContent(
    value: ErrorMsgContent,
    elGetter: __utils.ASN1Encoder<ErrorMsgContent>
) {
    if (!_cached_encoder_for_ErrorMsgContent) {
        _cached_encoder_for_ErrorMsgContent = function (
            value: ErrorMsgContent,
            elGetter: __utils.ASN1Encoder<ErrorMsgContent>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PKIStatusInfo(
                            value.pKIStatusInfo,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.errorCode === undefined
                            ? undefined
                            : __utils._encodeInteger(
                                  value.errorCode,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.errorDetails === undefined
                            ? undefined
                            : _encode_PKIFreeText(
                                  value.errorDetails,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ErrorMsgContent(value, elGetter);
}

export class CertStatus {
    constructor(
        readonly certHash: asn1.OCTET_STRING,
        readonly certReqId: asn1.INTEGER,
        readonly statusInfo: asn1.OPTIONAL<PKIStatusInfo>
    ) {}
}
export const _root_component_type_list_1_spec_for_CertStatus: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certHash",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certReqId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "statusInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertStatus: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertStatus: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertStatus: __utils.ASN1Decoder<
    CertStatus
> | null = null;
let _cached_encoder_for_CertStatus: __utils.ASN1Encoder<
    CertStatus
> | null = null;
export function _decode_CertStatus(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertStatus) {
        _cached_decoder_for_CertStatus = function (
            el: asn1.ASN1Element
        ): CertStatus {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certHash!: asn1.OCTET_STRING;
            let certReqId!: asn1.INTEGER;
            let statusInfo: asn1.OPTIONAL<PKIStatusInfo>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                certHash: (_el: asn1.ASN1Element): void => {
                    certHash = __utils._decodeOctetString(_el);
                },
                certReqId: (_el: asn1.ASN1Element): void => {
                    certReqId = __utils._decodeInteger(_el);
                },
                statusInfo: (_el: asn1.ASN1Element): void => {
                    statusInfo = _decode_PKIStatusInfo(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertStatus,
                _extension_additions_list_spec_for_CertStatus,
                _root_component_type_list_2_spec_for_CertStatus,
                undefined
            );
            return new CertStatus /* SEQUENCE_CONSTRUCTOR_CALL */(
                certHash,
                certReqId,
                statusInfo
            );
        };
    }
    return _cached_decoder_for_CertStatus(el);
}
export function _encode_CertStatus(
    value: CertStatus,
    elGetter: __utils.ASN1Encoder<CertStatus>
) {
    if (!_cached_encoder_for_CertStatus) {
        _cached_encoder_for_CertStatus = function (
            value: CertStatus,
            elGetter: __utils.ASN1Encoder<CertStatus>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.certHash,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.certReqId,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.statusInfo === undefined
                            ? undefined
                            : _encode_PKIStatusInfo(
                                  value.statusInfo,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_CertStatus(value, elGetter);
}

export type CertConfirmContent = CertStatus[]; // SequenceOfType
let _cached_decoder_for_CertConfirmContent: __utils.ASN1Decoder<
    CertConfirmContent
> | null = null;
let _cached_encoder_for_CertConfirmContent: __utils.ASN1Encoder<
    CertConfirmContent
> | null = null;
export function _decode_CertConfirmContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertConfirmContent) {
        _cached_decoder_for_CertConfirmContent = __utils._decodeSequenceOf<
            CertStatus
        >(() => _decode_CertStatus);
    }
    return _cached_decoder_for_CertConfirmContent(el);
}
export function _encode_CertConfirmContent(
    value: CertConfirmContent,
    elGetter: __utils.ASN1Encoder<CertConfirmContent>
) {
    if (!_cached_encoder_for_CertConfirmContent) {
        _cached_encoder_for_CertConfirmContent = __utils._encodeSequenceOf<
            CertStatus
        >(() => _encode_CertStatus, __utils.BER);
    }
    return _cached_encoder_for_CertConfirmContent(value, elGetter);
}

export class PollReqContent_Item {
    constructor(readonly certReqId: asn1.INTEGER) {}
}
export const _root_component_type_list_1_spec_for_PollReqContent_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certReqId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PollReqContent_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PollReqContent_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PollReqContent_Item: __utils.ASN1Decoder<
    PollReqContent_Item
> | null = null;
let _cached_encoder_for_PollReqContent_Item: __utils.ASN1Encoder<
    PollReqContent_Item
> | null = null;
export function _decode_PollReqContent_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PollReqContent_Item) {
        _cached_decoder_for_PollReqContent_Item = function (
            el: asn1.ASN1Element
        ): PollReqContent_Item {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "PollReqContent-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "certReqId";
            let certReqId!: asn1.INTEGER;
            certReqId = __utils._decodeInteger(sequence[0]);
            return new PollReqContent_Item(certReqId);
        };
    }
    return _cached_decoder_for_PollReqContent_Item(el);
}
export function _encode_PollReqContent_Item(
    value: PollReqContent_Item,
    elGetter: __utils.ASN1Encoder<PollReqContent_Item>
) {
    if (!_cached_encoder_for_PollReqContent_Item) {
        _cached_encoder_for_PollReqContent_Item = function (
            value: PollReqContent_Item,
            elGetter: __utils.ASN1Encoder<PollReqContent_Item>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.certReqId,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PollReqContent_Item(value, elGetter);
}

export type PollReqContent = PollReqContent_Item[]; // SequenceOfType
let _cached_decoder_for_PollReqContent: __utils.ASN1Decoder<
    PollReqContent
> | null = null;
let _cached_encoder_for_PollReqContent: __utils.ASN1Encoder<
    PollReqContent
> | null = null;
export function _decode_PollReqContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PollReqContent) {
        _cached_decoder_for_PollReqContent = __utils._decodeSequenceOf<
            PollReqContent_Item
        >(() => _decode_PollReqContent_Item);
    }
    return _cached_decoder_for_PollReqContent(el);
}
export function _encode_PollReqContent(
    value: PollReqContent,
    elGetter: __utils.ASN1Encoder<PollReqContent>
) {
    if (!_cached_encoder_for_PollReqContent) {
        _cached_encoder_for_PollReqContent = __utils._encodeSequenceOf<
            PollReqContent_Item
        >(() => _encode_PollReqContent_Item, __utils.BER);
    }
    return _cached_encoder_for_PollReqContent(value, elGetter);
}

export class PollRepContent_Item {
    constructor(
        readonly certReqId: asn1.INTEGER,
        readonly checkAfter: asn1.INTEGER,
        readonly reason: asn1.OPTIONAL<PKIFreeText>
    ) {}
}
export const _root_component_type_list_1_spec_for_PollRepContent_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certReqId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "checkAfter",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "reason",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PollRepContent_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PollRepContent_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PollRepContent_Item: __utils.ASN1Decoder<
    PollRepContent_Item
> | null = null;
let _cached_encoder_for_PollRepContent_Item: __utils.ASN1Encoder<
    PollRepContent_Item
> | null = null;
export function _decode_PollRepContent_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PollRepContent_Item) {
        _cached_decoder_for_PollRepContent_Item = function (
            el: asn1.ASN1Element
        ): PollRepContent_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certReqId!: asn1.INTEGER;
            let checkAfter!: asn1.INTEGER;
            let reason: asn1.OPTIONAL<PKIFreeText>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                certReqId: (_el: asn1.ASN1Element): void => {
                    certReqId = __utils._decodeInteger(_el);
                },
                checkAfter: (_el: asn1.ASN1Element): void => {
                    checkAfter = __utils._decodeInteger(_el);
                },
                reason: (_el: asn1.ASN1Element): void => {
                    reason = _decode_PKIFreeText(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PollRepContent_Item,
                _extension_additions_list_spec_for_PollRepContent_Item,
                _root_component_type_list_2_spec_for_PollRepContent_Item,
                undefined
            );
            return new PollRepContent_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                certReqId,
                checkAfter,
                reason
            );
        };
    }
    return _cached_decoder_for_PollRepContent_Item(el);
}
export function _encode_PollRepContent_Item(
    value: PollRepContent_Item,
    elGetter: __utils.ASN1Encoder<PollRepContent_Item>
) {
    if (!_cached_encoder_for_PollRepContent_Item) {
        _cached_encoder_for_PollRepContent_Item = function (
            value: PollRepContent_Item,
            elGetter: __utils.ASN1Encoder<PollRepContent_Item>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.certReqId,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.checkAfter,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.reason === undefined
                            ? undefined
                            : _encode_PKIFreeText(value.reason, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PollRepContent_Item(value, elGetter);
}

export type PollRepContent = PollRepContent_Item[]; // SequenceOfType
let _cached_decoder_for_PollRepContent: __utils.ASN1Decoder<
    PollRepContent
> | null = null;
let _cached_encoder_for_PollRepContent: __utils.ASN1Encoder<
    PollRepContent
> | null = null;
export function _decode_PollRepContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PollRepContent) {
        _cached_decoder_for_PollRepContent = __utils._decodeSequenceOf<
            PollRepContent_Item
        >(() => _decode_PollRepContent_Item);
    }
    return _cached_decoder_for_PollRepContent(el);
}
export function _encode_PollRepContent(
    value: PollRepContent,
    elGetter: __utils.ASN1Encoder<PollRepContent>
) {
    if (!_cached_encoder_for_PollRepContent) {
        _cached_encoder_for_PollRepContent = __utils._encodeSequenceOf<
            PollRepContent_Item
        >(() => _encode_PollRepContent_Item, __utils.BER);
    }
    return _cached_encoder_for_PollRepContent(value, elGetter);
}

export type PKIBody =
    | { ir: CertReqMessages } /* CHOICE_ALT_ROOT */
    | { ip: CertRepMessage } /* CHOICE_ALT_ROOT */
    | { cr: CertReqMessages } /* CHOICE_ALT_ROOT */
    | { cp: CertRepMessage } /* CHOICE_ALT_ROOT */
    | { p10cr: CertificationRequest } /* CHOICE_ALT_ROOT */
    | { popdecc: POPODecKeyChallContent } /* CHOICE_ALT_ROOT */
    | { popdecr: POPODecKeyRespContent } /* CHOICE_ALT_ROOT */
    | { kur: CertReqMessages } /* CHOICE_ALT_ROOT */
    | { kup: CertRepMessage } /* CHOICE_ALT_ROOT */
    | { krr: CertReqMessages } /* CHOICE_ALT_ROOT */
    | { krp: KeyRecRepContent } /* CHOICE_ALT_ROOT */
    | { rr: RevReqContent } /* CHOICE_ALT_ROOT */
    | { rp: RevRepContent } /* CHOICE_ALT_ROOT */
    | { ccr: CertReqMessages } /* CHOICE_ALT_ROOT */
    | { ccp: CertRepMessage } /* CHOICE_ALT_ROOT */
    | { ckuann: CAKeyUpdAnnContent } /* CHOICE_ALT_ROOT */
    | { cann: CertAnnContent } /* CHOICE_ALT_ROOT */
    | { rann: RevAnnContent } /* CHOICE_ALT_ROOT */
    | { crlann: CRLAnnContent } /* CHOICE_ALT_ROOT */
    | { pkiconf: PKIConfirmContent } /* CHOICE_ALT_ROOT */
    | { nested: NestedMessageContent } /* CHOICE_ALT_ROOT */
    | { genm: GenMsgContent } /* CHOICE_ALT_ROOT */
    | { genp: GenRepContent } /* CHOICE_ALT_ROOT */
    | { error: ErrorMsgContent } /* CHOICE_ALT_ROOT */
    | { certConf: CertConfirmContent } /* CHOICE_ALT_ROOT */
    | { pollReq: PollReqContent } /* CHOICE_ALT_ROOT */
    | { pollRep: PollRepContent } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_PKIBody: __utils.ASN1Decoder<PKIBody> | null = null;
let _cached_encoder_for_PKIBody: __utils.ASN1Encoder<PKIBody> | null = null;
export function _decode_PKIBody(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIBody) {
        _cached_decoder_for_PKIBody = __utils._decode_inextensible_choice<
            PKIBody
        >({
            "CONTEXT 0": [
                "ir",
                __utils._decode_explicit<CertReqMessages>(
                    () => _decode_CertReqMessages
                ),
            ],
            "CONTEXT 1": [
                "ip",
                __utils._decode_explicit<CertRepMessage>(
                    () => _decode_CertRepMessage
                ),
            ],
            "CONTEXT 2": [
                "cr",
                __utils._decode_explicit<CertReqMessages>(
                    () => _decode_CertReqMessages
                ),
            ],
            "CONTEXT 3": [
                "cp",
                __utils._decode_explicit<CertRepMessage>(
                    () => _decode_CertRepMessage
                ),
            ],
            "CONTEXT 4": [
                "p10cr",
                __utils._decode_explicit<CertificationRequest>(
                    () => _decode_CertificationRequest
                ),
            ],
            "CONTEXT 5": [
                "popdecc",
                __utils._decode_explicit<POPODecKeyChallContent>(
                    () => _decode_POPODecKeyChallContent
                ),
            ],
            "CONTEXT 6": [
                "popdecr",
                __utils._decode_explicit<POPODecKeyRespContent>(
                    () => _decode_POPODecKeyRespContent
                ),
            ],
            "CONTEXT 7": [
                "kur",
                __utils._decode_explicit<CertReqMessages>(
                    () => _decode_CertReqMessages
                ),
            ],
            "CONTEXT 8": [
                "kup",
                __utils._decode_explicit<CertRepMessage>(
                    () => _decode_CertRepMessage
                ),
            ],
            "CONTEXT 9": [
                "krr",
                __utils._decode_explicit<CertReqMessages>(
                    () => _decode_CertReqMessages
                ),
            ],
            "CONTEXT 10": [
                "krp",
                __utils._decode_explicit<KeyRecRepContent>(
                    () => _decode_KeyRecRepContent
                ),
            ],
            "CONTEXT 11": [
                "rr",
                __utils._decode_explicit<RevReqContent>(
                    () => _decode_RevReqContent
                ),
            ],
            "CONTEXT 12": [
                "rp",
                __utils._decode_explicit<RevRepContent>(
                    () => _decode_RevRepContent
                ),
            ],
            "CONTEXT 13": [
                "ccr",
                __utils._decode_explicit<CertReqMessages>(
                    () => _decode_CertReqMessages
                ),
            ],
            "CONTEXT 14": [
                "ccp",
                __utils._decode_explicit<CertRepMessage>(
                    () => _decode_CertRepMessage
                ),
            ],
            "CONTEXT 15": [
                "ckuann",
                __utils._decode_explicit<CAKeyUpdAnnContent>(
                    () => _decode_CAKeyUpdAnnContent
                ),
            ],
            "CONTEXT 16": [
                "cann",
                __utils._decode_explicit<CertAnnContent>(
                    () => _decode_CertAnnContent
                ),
            ],
            "CONTEXT 17": [
                "rann",
                __utils._decode_explicit<RevAnnContent>(
                    () => _decode_RevAnnContent
                ),
            ],
            "CONTEXT 18": [
                "crlann",
                __utils._decode_explicit<CRLAnnContent>(
                    () => _decode_CRLAnnContent
                ),
            ],
            "CONTEXT 19": [
                "pkiconf",
                __utils._decode_explicit<PKIConfirmContent>(
                    () => _decode_PKIConfirmContent
                ),
            ],
            "CONTEXT 20": [
                "nested",
                __utils._decode_explicit<NestedMessageContent>(
                    () => _decode_NestedMessageContent
                ),
            ],
            "CONTEXT 21": [
                "genm",
                __utils._decode_explicit<GenMsgContent>(
                    () => _decode_GenMsgContent
                ),
            ],
            "CONTEXT 22": [
                "genp",
                __utils._decode_explicit<GenRepContent>(
                    () => _decode_GenRepContent
                ),
            ],
            "CONTEXT 23": [
                "error",
                __utils._decode_explicit<ErrorMsgContent>(
                    () => _decode_ErrorMsgContent
                ),
            ],
            "CONTEXT 24": [
                "certConf",
                __utils._decode_explicit<CertConfirmContent>(
                    () => _decode_CertConfirmContent
                ),
            ],
            "CONTEXT 25": [
                "pollReq",
                __utils._decode_explicit<PollReqContent>(
                    () => _decode_PollReqContent
                ),
            ],
            "CONTEXT 26": [
                "pollRep",
                __utils._decode_explicit<PollRepContent>(
                    () => _decode_PollRepContent
                ),
            ],
        });
    }
    return _cached_decoder_for_PKIBody(el);
}
export function _encode_PKIBody(
    value: PKIBody,
    elGetter: __utils.ASN1Encoder<PKIBody>
) {
    if (!_cached_encoder_for_PKIBody) {
        _cached_encoder_for_PKIBody = __utils._encode_choice<PKIBody>(
            {
                ir: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_CertReqMessages,
                    __utils.BER
                ),
                ip: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_CertRepMessage,
                    __utils.BER
                ),
                cr: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () => _encode_CertReqMessages,
                    __utils.BER
                ),
                cp: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    3,
                    () => _encode_CertRepMessage,
                    __utils.BER
                ),
                p10cr: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    4,
                    () => _encode_CertificationRequest,
                    __utils.BER
                ),
                popdecc: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    5,
                    () => _encode_POPODecKeyChallContent,
                    __utils.BER
                ),
                popdecr: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    6,
                    () => _encode_POPODecKeyRespContent,
                    __utils.BER
                ),
                kur: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    7,
                    () => _encode_CertReqMessages,
                    __utils.BER
                ),
                kup: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    8,
                    () => _encode_CertRepMessage,
                    __utils.BER
                ),
                krr: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    9,
                    () => _encode_CertReqMessages,
                    __utils.BER
                ),
                krp: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    10,
                    () => _encode_KeyRecRepContent,
                    __utils.BER
                ),
                rr: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    11,
                    () => _encode_RevReqContent,
                    __utils.BER
                ),
                rp: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    12,
                    () => _encode_RevRepContent,
                    __utils.BER
                ),
                ccr: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    13,
                    () => _encode_CertReqMessages,
                    __utils.BER
                ),
                ccp: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    14,
                    () => _encode_CertRepMessage,
                    __utils.BER
                ),
                ckuann: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    15,
                    () => _encode_CAKeyUpdAnnContent,
                    __utils.BER
                ),
                cann: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    16,
                    () => _encode_CertAnnContent,
                    __utils.BER
                ),
                rann: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    17,
                    () => _encode_RevAnnContent,
                    __utils.BER
                ),
                crlann: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    18,
                    () => _encode_CRLAnnContent,
                    __utils.BER
                ),
                pkiconf: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    19,
                    () => _encode_PKIConfirmContent,
                    __utils.BER
                ),
                nested: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    20,
                    () => _encode_NestedMessageContent,
                    __utils.BER
                ),
                genm: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    21,
                    () => _encode_GenMsgContent,
                    __utils.BER
                ),
                genp: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    22,
                    () => _encode_GenRepContent,
                    __utils.BER
                ),
                error: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    23,
                    () => _encode_ErrorMsgContent,
                    __utils.BER
                ),
                certConf: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    24,
                    () => _encode_CertConfirmContent,
                    __utils.BER
                ),
                pollReq: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    25,
                    () => _encode_PollReqContent,
                    __utils.BER
                ),
                pollRep: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    26,
                    () => _encode_PollRepContent,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_PKIBody(value, elGetter);
}

export class ProtectedPart {
    constructor(readonly header: PKIHeader, readonly body: PKIBody) {}
}
export const _root_component_type_list_1_spec_for_ProtectedPart: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "header",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "body",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ProtectedPart: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ProtectedPart: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ProtectedPart: __utils.ASN1Decoder<
    ProtectedPart
> | null = null;
let _cached_encoder_for_ProtectedPart: __utils.ASN1Encoder<
    ProtectedPart
> | null = null;
export function _decode_ProtectedPart(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ProtectedPart) {
        _cached_decoder_for_ProtectedPart = function (
            el: asn1.ASN1Element
        ): ProtectedPart {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "ProtectedPart contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "header";
            sequence[1].name = "body";
            let header!: PKIHeader;
            let body!: PKIBody;
            header = _decode_PKIHeader(sequence[0]);
            body = _decode_PKIBody(sequence[1]);
            return new ProtectedPart(header, body);
        };
    }
    return _cached_decoder_for_ProtectedPart(el);
}
export function _encode_ProtectedPart(
    value: ProtectedPart,
    elGetter: __utils.ASN1Encoder<ProtectedPart>
) {
    if (!_cached_encoder_for_ProtectedPart) {
        _cached_encoder_for_ProtectedPart = function (
            value: ProtectedPart,
            elGetter: __utils.ASN1Encoder<ProtectedPart>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PKIHeader(
                            value.header,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_PKIBody(
                            value.body,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ProtectedPart(value, elGetter);
}

export const id_PasswordBasedMac: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* usa */ 840,
        /* nt */ 113533,
        /* nsn */ 7,
        /* algorithms */ 66,
        13,
    ]
);

export class PBMParameter {
    constructor(
        readonly salt: asn1.OCTET_STRING,
        readonly owf: AlgorithmIdentifier,
        readonly iterationCount: asn1.INTEGER,
        readonly mac: AlgorithmIdentifier
    ) {}
}
export const _root_component_type_list_1_spec_for_PBMParameter: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "salt",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "owf",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "iterationCount",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "mac",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PBMParameter: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PBMParameter: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PBMParameter: __utils.ASN1Decoder<
    PBMParameter
> | null = null;
let _cached_encoder_for_PBMParameter: __utils.ASN1Encoder<
    PBMParameter
> | null = null;
export function _decode_PBMParameter(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PBMParameter) {
        _cached_decoder_for_PBMParameter = function (
            el: asn1.ASN1Element
        ): PBMParameter {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new asn1.ASN1ConstructionError(
                    "PBMParameter contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "salt";
            sequence[1].name = "owf";
            sequence[2].name = "iterationCount";
            sequence[3].name = "mac";
            let salt!: asn1.OCTET_STRING;
            let owf!: AlgorithmIdentifier;
            let iterationCount!: asn1.INTEGER;
            let mac!: AlgorithmIdentifier;
            salt = __utils._decodeOctetString(sequence[0]);
            owf = _decode_AlgorithmIdentifier(sequence[1]);
            iterationCount = __utils._decodeInteger(sequence[2]);
            mac = _decode_AlgorithmIdentifier(sequence[3]);
            return new PBMParameter(salt, owf, iterationCount, mac);
        };
    }
    return _cached_decoder_for_PBMParameter(el);
}
export function _encode_PBMParameter(
    value: PBMParameter,
    elGetter: __utils.ASN1Encoder<PBMParameter>
) {
    if (!_cached_encoder_for_PBMParameter) {
        _cached_encoder_for_PBMParameter = function (
            value: PBMParameter,
            elGetter: __utils.ASN1Encoder<PBMParameter>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.salt,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.owf,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.iterationCount,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.mac,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PBMParameter(value, elGetter);
}

export const id_DHBasedMac: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* usa */ 840,
    /* nt */ 113533,
    /* nsn */ 7,
    /* algorithms */ 66,
    30,
]);

export class DHBMParameter {
    constructor(
        readonly owf: AlgorithmIdentifier,
        readonly mac: AlgorithmIdentifier
    ) {}
}
export const _root_component_type_list_1_spec_for_DHBMParameter: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "owf",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "mac",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DHBMParameter: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DHBMParameter: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DHBMParameter: __utils.ASN1Decoder<
    DHBMParameter
> | null = null;
let _cached_encoder_for_DHBMParameter: __utils.ASN1Encoder<
    DHBMParameter
> | null = null;
export function _decode_DHBMParameter(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DHBMParameter) {
        _cached_decoder_for_DHBMParameter = function (
            el: asn1.ASN1Element
        ): DHBMParameter {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "DHBMParameter contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "owf";
            sequence[1].name = "mac";
            let owf!: AlgorithmIdentifier;
            let mac!: AlgorithmIdentifier;
            owf = _decode_AlgorithmIdentifier(sequence[0]);
            mac = _decode_AlgorithmIdentifier(sequence[1]);
            return new DHBMParameter(owf, mac);
        };
    }
    return _cached_decoder_for_DHBMParameter(el);
}
export function _encode_DHBMParameter(
    value: DHBMParameter,
    elGetter: __utils.ASN1Encoder<DHBMParameter>
) {
    if (!_cached_encoder_for_DHBMParameter) {
        _cached_encoder_for_DHBMParameter = function (
            value: DHBMParameter,
            elGetter: __utils.ASN1Encoder<DHBMParameter>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.owf,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.mac,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_DHBMParameter(value, elGetter);
}

export type OOBCert = CMPCertificate; // DefinedType
let _cached_decoder_for_OOBCert: __utils.ASN1Decoder<OOBCert> | null = null;
let _cached_encoder_for_OOBCert: __utils.ASN1Encoder<OOBCert> | null = null;
export function _decode_OOBCert(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OOBCert) {
        _cached_decoder_for_OOBCert = _decode_CMPCertificate;
    }
    return _cached_decoder_for_OOBCert(el);
}
export function _encode_OOBCert(
    value: OOBCert,
    elGetter: __utils.ASN1Encoder<OOBCert>
) {
    if (!_cached_encoder_for_OOBCert) {
        _cached_encoder_for_OOBCert = _encode_CMPCertificate;
    }
    return _cached_encoder_for_OOBCert(value, elGetter);
}

export class OOBCertHash {
    constructor(
        readonly hashAlg: asn1.OPTIONAL<AlgorithmIdentifier>,
        readonly certId: asn1.OPTIONAL<CertId>,
        readonly hashVal: asn1.BIT_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_OOBCertHash: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "hashAlg",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certId",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "hashVal",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_OOBCertHash: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_OOBCertHash: __utils.ComponentSpec[] = [];
let _cached_decoder_for_OOBCertHash: __utils.ASN1Decoder<
    OOBCertHash
> | null = null;
let _cached_encoder_for_OOBCertHash: __utils.ASN1Encoder<
    OOBCertHash
> | null = null;
export function _decode_OOBCertHash(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OOBCertHash) {
        _cached_decoder_for_OOBCertHash = function (
            el: asn1.ASN1Element
        ): OOBCertHash {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let hashAlg: asn1.OPTIONAL<AlgorithmIdentifier>;
            let certId: asn1.OPTIONAL<CertId>;
            let hashVal!: asn1.BIT_STRING;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                hashAlg: (_el: asn1.ASN1Element): void => {
                    hashAlg = __utils._decode_explicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                certId: (_el: asn1.ASN1Element): void => {
                    certId = __utils._decode_explicit<CertId>(
                        () => _decode_CertId
                    )(_el);
                },
                hashVal: (_el: asn1.ASN1Element): void => {
                    hashVal = __utils._decodeBitString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OOBCertHash,
                _extension_additions_list_spec_for_OOBCertHash,
                _root_component_type_list_2_spec_for_OOBCertHash,
                undefined
            );
            return new OOBCertHash /* SEQUENCE_CONSTRUCTOR_CALL */(
                hashAlg,
                certId,
                hashVal
            );
        };
    }
    return _cached_decoder_for_OOBCertHash(el);
}
export function _encode_OOBCertHash(
    value: OOBCertHash,
    elGetter: __utils.ASN1Encoder<OOBCertHash>
) {
    if (!_cached_encoder_for_OOBCertHash) {
        _cached_encoder_for_OOBCertHash = function (
            value: OOBCertHash,
            elGetter: __utils.ASN1Encoder<OOBCertHash>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.hashAlg === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_AlgorithmIdentifier,
                                  __utils.BER
                              )(value.hashAlg, __utils.BER),
                        /* IF_ABSENT  */ value.certId === undefined
                            ? undefined
                            : __utils._encode_explicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_CertId,
                                  __utils.BER
                              )(value.certId, __utils.BER),
                        /* REQUIRED   */ __utils._encodeBitString(
                            value.hashVal,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_OOBCertHash(value, elGetter);
}

// TODO: ObjectClassAssignment: INFO-TYPE-AND-VALUE

// TODO: ObjectSetAssignment: SupportedInfoSet

/* END_MODULE PKIXCMP-2009 */
