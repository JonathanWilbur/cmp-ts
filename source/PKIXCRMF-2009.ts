
/*
    BEGIN_MODULE PKIXCRMF-2009
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-crmf2005-02
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
} from "./__utils";
import * as PKIX_CommonTypes_2009 from "./PKIX-CommonTypes-2009";
import {
    EXTENSION,
    ATTRIBUTE,
    AttributeSet,
    Extensions,
    SingleAttribute,
    _decode_AttributeSet,
    _encode_AttributeSet,
    _decode_Extensions,
    _encode_Extensions,
    _decode_SingleAttribute,
    _encode_SingleAttribute
} from "./PKIX-CommonTypes-2009";
export {
    EXTENSION,
    ATTRIBUTE,
    AttributeSet,
    Extensions,
    SingleAttribute,
    _decode_AttributeSet,
    _encode_AttributeSet,
    _decode_Extensions,
    _encode_Extensions,
    _decode_SingleAttribute,
    _encode_SingleAttribute
} from "./PKIX-CommonTypes-2009";

import * as AlgorithmInformation_2009 from "./AlgorithmInformation-2009";
import {
    SIGNATURE_ALGORITHM,
    ALGORITHM,
    DIGEST_ALGORITHM,
    MAC_ALGORITHM,
    PUBLIC_KEY,
    AlgorithmIdentifier,
    _get_decoder_for_AlgorithmIdentifier,
    _get_encoder_for_AlgorithmIdentifier
} from "./AlgorithmInformation-2009";
export {
    SIGNATURE_ALGORITHM,
    ALGORITHM,
    DIGEST_ALGORITHM,
    MAC_ALGORITHM,
    PUBLIC_KEY,
    AlgorithmIdentifier,
    _get_decoder_for_AlgorithmIdentifier,
    _get_encoder_for_AlgorithmIdentifier
} from "./AlgorithmInformation-2009";

import * as PKIX1Explicit_2009 from "./PKIX1Explicit-2009";
import {
    Version,
    Name,
    Time,
    SubjectPublicKeyInfo,
    UniqueIdentifier,
    id_pkix,
    SignatureAlgorithms,
    Version_v1 as v1 /* IMPORTED_NAMED_INTEGER */,
    Version_v2 as v2 /* IMPORTED_NAMED_INTEGER */,
    Version_v3 as v3 /* IMPORTED_NAMED_INTEGER */,
    _decode_Version,
    _encode_Version,
    _decode_Name,
    _encode_Name,
    _decode_Time,
    _encode_Time,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier
} from "./PKIX1Explicit-2009";
export {
    Version,
    Name,
    Time,
    SubjectPublicKeyInfo,
    UniqueIdentifier,
    id_pkix,
    SignatureAlgorithms,
    Version_v1 as v1 /* IMPORTED_NAMED_INTEGER */,
    Version_v2 as v2 /* IMPORTED_NAMED_INTEGER */,
    Version_v3 as v3 /* IMPORTED_NAMED_INTEGER */,
    _decode_Version,
    _encode_Version,
    _decode_Name,
    _encode_Name,
    _decode_Time,
    _encode_Time,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier
} from "./PKIX1Explicit-2009";

import * as PKIX1Implicit_2009 from "./PKIX1Implicit-2009";
import {
    GeneralName,
    CertExtensions,
    _decode_GeneralName,
    _encode_GeneralName
} from "./PKIX1Implicit-2009";
export {
    GeneralName,
    CertExtensions,
    _decode_GeneralName,
    _encode_GeneralName
} from "./PKIX1Implicit-2009";

import * as CryptographicMessageSyntax_2009 from "./CryptographicMessageSyntax-2009";
import {
    EnvelopedData,
    CONTENT_TYPE,
    _decode_EnvelopedData,
    _encode_EnvelopedData,
    _decode_CONTENT_TYPE,
    _encode_CONTENT_TYPE
} from "./CryptographicMessageSyntax-2009";
export {
    EnvelopedData,
    CONTENT_TYPE,
    _decode_EnvelopedData,
    _encode_EnvelopedData,
    _decode_CONTENT_TYPE,
    _encode_CONTENT_TYPE
} from "./CryptographicMessageSyntax-2009";

import * as CryptographicMessageSyntaxAlgorithms_2009 from "./CryptographicMessageSyntaxAlgorithms-2009";
import {
    maca_hMAC_SHA1
} from "./CryptographicMessageSyntaxAlgorithms-2009";
export {
    maca_hMAC_SHA1
} from "./CryptographicMessageSyntaxAlgorithms-2009";

import * as PKIXAlgs_2009 from "./PKIXAlgs-2009";
import {
    mda_sha1
} from "./PKIXAlgs-2009";
export {
    mda_sha1
} from "./PKIXAlgs-2009";


export const id_pkip: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_pkix);

export const id_smime: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    16,
]);

export const id_ct: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_smime);

export class OptionalValidity {
    constructor (
        readonly notBefore: asn1.OPTIONAL<Time>,
        readonly notAfter: asn1.OPTIONAL<Time>
    ) {}

}
export const _root_component_type_list_1_spec_for_OptionalValidity: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("notBefore", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("notAfter", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_OptionalValidity: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_OptionalValidity: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_OptionalValidity: __utils.ASN1Decoder<OptionalValidity> | null = null;
let _cached_encoder_for_OptionalValidity: __utils.ASN1Encoder<OptionalValidity> | null = null;
export function _decode_OptionalValidity (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OptionalValidity) { _cached_decoder_for_OptionalValidity = function (el: asn1.ASN1Element): OptionalValidity {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let notBefore: asn1.OPTIONAL<Time>;
    let notAfter: asn1.OPTIONAL<Time>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "notBefore": (_el: asn1.ASN1Element): void => { notBefore = __utils._decode_implicit<Time>(() => _decode_Time)(_el); },
        "notAfter": (_el: asn1.ASN1Element): void => { notAfter = __utils._decode_implicit<Time>(() => _decode_Time)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OptionalValidity,
        _extension_additions_list_spec_for_OptionalValidity,
        _root_component_type_list_2_spec_for_OptionalValidity,
        undefined,
    );
    return new OptionalValidity( /* SEQUENCE_CONSTRUCTOR_CALL */
        notBefore,
        notAfter
    );
}; }
    return _cached_decoder_for_OptionalValidity(el);
}
export function _encode_OptionalValidity (value: OptionalValidity, elGetter: __utils.ASN1Encoder<OptionalValidity>) {
    if (!_cached_encoder_for_OptionalValidity) { _cached_encoder_for_OptionalValidity = function (value: OptionalValidity, elGetter: __utils.ASN1Encoder<OptionalValidity>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.notBefore === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_Time, __utils.BER)(value.notBefore, __utils.BER)),
            /* IF_ABSENT  */ ((value.notAfter === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_Time, __utils.BER)(value.notAfter, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_OptionalValidity(value, elGetter);
}


export class CertTemplate {
    constructor (
        readonly version: asn1.OPTIONAL<Version>,
        readonly serialNumber: asn1.OPTIONAL<asn1.INTEGER>,
        readonly signingAlg: asn1.OPTIONAL<AlgorithmIdentifier>,
        readonly issuer: asn1.OPTIONAL<Name>,
        readonly validity: asn1.OPTIONAL<OptionalValidity>,
        readonly subject: asn1.OPTIONAL<Name>,
        readonly publicKey: asn1.OPTIONAL<SubjectPublicKeyInfo>,
        readonly issuerUID: asn1.OPTIONAL<UniqueIdentifier>,
        readonly subjectUID: asn1.OPTIONAL<UniqueIdentifier>,
        readonly extensions: asn1.OPTIONAL<Extensions>
    ) {}

}
export const _root_component_type_list_1_spec_for_CertTemplate: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("serialNumber", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("signingAlg", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("issuer", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("validity", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("subject", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("publicKey", true, __utils.hasTag(asn1.ASN1TagClass.context, 6), undefined, undefined),
    new __utils.ComponentSpec("issuerUID", true, __utils.hasTag(asn1.ASN1TagClass.context, 7), undefined, undefined),
    new __utils.ComponentSpec("subjectUID", true, __utils.hasTag(asn1.ASN1TagClass.context, 8), undefined, undefined),
    new __utils.ComponentSpec("extensions", true, __utils.hasTag(asn1.ASN1TagClass.context, 9), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CertTemplate: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_CertTemplate: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_CertTemplate: __utils.ASN1Decoder<CertTemplate> | null = null;
let _cached_encoder_for_CertTemplate: __utils.ASN1Encoder<CertTemplate> | null = null;
export function _decode_CertTemplate (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertTemplate) { _cached_decoder_for_CertTemplate = function (el: asn1.ASN1Element): CertTemplate {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<Version>;
    let serialNumber: asn1.OPTIONAL<asn1.INTEGER>;
    let signingAlg: asn1.OPTIONAL<AlgorithmIdentifier>;
    let issuer: asn1.OPTIONAL<Name>;
    let validity: asn1.OPTIONAL<OptionalValidity>;
    let subject: asn1.OPTIONAL<Name>;
    let publicKey: asn1.OPTIONAL<SubjectPublicKeyInfo>;
    let issuerUID: asn1.OPTIONAL<UniqueIdentifier>;
    let subjectUID: asn1.OPTIONAL<UniqueIdentifier>;
    let extensions: asn1.OPTIONAL<Extensions>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = __utils._decode_implicit<Version>(() => _decode_Version)(_el); },
        "serialNumber": (_el: asn1.ASN1Element): void => { serialNumber = __utils._decode_implicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "signingAlg": (_el: asn1.ASN1Element): void => { signingAlg = __utils._decode_implicit<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier)(_el); },
        "issuer": (_el: asn1.ASN1Element): void => { issuer = __utils._decode_implicit<Name>(() => _decode_Name)(_el); },
        "validity": (_el: asn1.ASN1Element): void => { validity = __utils._decode_implicit<OptionalValidity>(() => _decode_OptionalValidity)(_el); },
        "subject": (_el: asn1.ASN1Element): void => { subject = __utils._decode_implicit<Name>(() => _decode_Name)(_el); },
        "publicKey": (_el: asn1.ASN1Element): void => { publicKey = __utils._decode_implicit<SubjectPublicKeyInfo>(() => _decode_SubjectPublicKeyInfo)(_el); },
        "issuerUID": (_el: asn1.ASN1Element): void => { issuerUID = __utils._decode_implicit<UniqueIdentifier>(() => _decode_UniqueIdentifier)(_el); },
        "subjectUID": (_el: asn1.ASN1Element): void => { subjectUID = __utils._decode_implicit<UniqueIdentifier>(() => _decode_UniqueIdentifier)(_el); },
        "extensions": (_el: asn1.ASN1Element): void => { extensions = __utils._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertTemplate,
        _extension_additions_list_spec_for_CertTemplate,
        _root_component_type_list_2_spec_for_CertTemplate,
        undefined,
    );
    return new CertTemplate( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        serialNumber,
        signingAlg,
        issuer,
        validity,
        subject,
        publicKey,
        issuerUID,
        subjectUID,
        extensions
    );
}; }
    return _cached_decoder_for_CertTemplate(el);
}
export function _encode_CertTemplate (value: CertTemplate, elGetter: __utils.ASN1Encoder<CertTemplate>) {
    if (!_cached_encoder_for_CertTemplate) { _cached_encoder_for_CertTemplate = function (value: CertTemplate, elGetter: __utils.ASN1Encoder<CertTemplate>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.version === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_Version, __utils.BER)(value.version, __utils.BER)),
            /* IF_ABSENT  */ ((value.serialNumber === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeInteger, __utils.BER)(value.serialNumber, __utils.BER)),
            /* IF_ABSENT  */ ((value.signingAlg === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_AlgorithmIdentifier, __utils.BER)(value.signingAlg, __utils.BER)),
            /* IF_ABSENT  */ ((value.issuer === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_Name, __utils.BER)(value.issuer, __utils.BER)),
            /* IF_ABSENT  */ ((value.validity === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => _encode_OptionalValidity, __utils.BER)(value.validity, __utils.BER)),
            /* IF_ABSENT  */ ((value.subject === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 5, () => _encode_Name, __utils.BER)(value.subject, __utils.BER)),
            /* IF_ABSENT  */ ((value.publicKey === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 6, () => _encode_SubjectPublicKeyInfo, __utils.BER)(value.publicKey, __utils.BER)),
            /* IF_ABSENT  */ ((value.issuerUID === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 7, () => _encode_UniqueIdentifier, __utils.BER)(value.issuerUID, __utils.BER)),
            /* IF_ABSENT  */ ((value.subjectUID === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 8, () => _encode_UniqueIdentifier, __utils.BER)(value.subjectUID, __utils.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 9, () => _encode_Extensions, __utils.BER)(value.extensions, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_CertTemplate(value, elGetter);
}


export type Controls = SingleAttribute[]; // SequenceOfType
let _cached_decoder_for_Controls: __utils.ASN1Decoder<Controls> | null = null;
let _cached_encoder_for_Controls: __utils.ASN1Encoder<Controls> | null = null;
export function _decode_Controls (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Controls) { _cached_decoder_for_Controls = __utils._decodeSequenceOf<SingleAttribute>(() => _decode_SingleAttribute); }
    return _cached_decoder_for_Controls(el);
}
export function _encode_Controls (value: Controls, elGetter: __utils.ASN1Encoder<Controls>) {
    if (!_cached_encoder_for_Controls) { _cached_encoder_for_Controls = __utils._encodeSequenceOf<SingleAttribute>(() => _encode_SingleAttribute, __utils.BER); }
    return _cached_encoder_for_Controls(value, elGetter);
}


export class CertRequest {
    constructor (
        readonly certReqId: asn1.INTEGER,
        readonly certTemplate: CertTemplate,
        readonly controls: asn1.OPTIONAL<Controls>
    ) {}

}
export const _root_component_type_list_1_spec_for_CertRequest: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("certReqId", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("certTemplate", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("controls", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CertRequest: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_CertRequest: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_CertRequest: __utils.ASN1Decoder<CertRequest> | null = null;
let _cached_encoder_for_CertRequest: __utils.ASN1Encoder<CertRequest> | null = null;
export function _decode_CertRequest (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertRequest) { _cached_decoder_for_CertRequest = function (el: asn1.ASN1Element): CertRequest {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let certReqId!: asn1.INTEGER;
    let certTemplate!: CertTemplate;
    let controls: asn1.OPTIONAL<Controls>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "certReqId": (_el: asn1.ASN1Element): void => { certReqId = __utils._decodeInteger(_el); },
        "certTemplate": (_el: asn1.ASN1Element): void => { certTemplate = _decode_CertTemplate(_el); },
        "controls": (_el: asn1.ASN1Element): void => { controls = _decode_Controls(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertRequest,
        _extension_additions_list_spec_for_CertRequest,
        _root_component_type_list_2_spec_for_CertRequest,
        undefined,
    );
    return new CertRequest( /* SEQUENCE_CONSTRUCTOR_CALL */
        certReqId,
        certTemplate,
        controls
    );
}; }
    return _cached_decoder_for_CertRequest(el);
}
export function _encode_CertRequest (value: CertRequest, elGetter: __utils.ASN1Encoder<CertRequest>) {
    if (!_cached_encoder_for_CertRequest) { _cached_encoder_for_CertRequest = function (value: CertRequest, elGetter: __utils.ASN1Encoder<CertRequest>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeInteger(value.certReqId, __utils.BER),
            /* REQUIRED   */ _encode_CertTemplate(value.certTemplate, __utils.BER),
            /* IF_ABSENT  */ ((value.controls === undefined) ? undefined : _encode_Controls(value.controls, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_CertRequest(value, elGetter);
}


export class PKMACValue {
    constructor (
        readonly algId: AlgorithmIdentifier,
        readonly value: asn1.BIT_STRING
    ) {}

}
export const _root_component_type_list_1_spec_for_PKMACValue: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("algId", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("value", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PKMACValue: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_PKMACValue: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_PKMACValue: __utils.ASN1Decoder<PKMACValue> | null = null;
let _cached_encoder_for_PKMACValue: __utils.ASN1Encoder<PKMACValue> | null = null;
export function _decode_PKMACValue (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKMACValue) { _cached_decoder_for_PKMACValue = function (el: asn1.ASN1Element): PKMACValue {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("PKMACValue contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "algId";
    sequence[1].name = "value";
    let algId!: AlgorithmIdentifier;
    let value!: asn1.BIT_STRING;
    algId = _decode_AlgorithmIdentifier(sequence[0]);
    value = __utils._decodeBitString(sequence[1]);
    // TODO: Validate values.
    return new PKMACValue(
        algId,
        value,

    );
}; }
    return _cached_decoder_for_PKMACValue(el);
}
export function _encode_PKMACValue (value: PKMACValue, elGetter: __utils.ASN1Encoder<PKMACValue>) {
    if (!_cached_encoder_for_PKMACValue) { _cached_encoder_for_PKMACValue = function (value: PKMACValue, elGetter: __utils.ASN1Encoder<PKMACValue>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.algId, __utils.BER),
            /* REQUIRED   */ __utils._encodeBitString(value.value, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_PKMACValue(value, elGetter);
}


export type POPOSigningKeyInput_authInfo =
    { sender: GeneralName } /* CHOICE_ALT_ROOT */
    | { publicKeyMAC: PKMACValue } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_POPOSigningKeyInput_authInfo: __utils.ASN1Decoder<POPOSigningKeyInput_authInfo> | null = null;
let _cached_encoder_for_POPOSigningKeyInput_authInfo: __utils.ASN1Encoder<POPOSigningKeyInput_authInfo> | null = null;
export function _decode_POPOSigningKeyInput_authInfo (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_POPOSigningKeyInput_authInfo) { _cached_decoder_for_POPOSigningKeyInput_authInfo = __utils._decode_inextensible_choice<POPOSigningKeyInput_authInfo>({
    "CONTEXT 0": [ "sender", __utils._decode_implicit<GeneralName>(() => _decode_GeneralName) ],
    "UNIVERSAL 16": [ "publicKeyMAC", _decode_PKMACValue ]
}); }
    return _cached_decoder_for_POPOSigningKeyInput_authInfo(el);
}
export function _encode_POPOSigningKeyInput_authInfo (value: POPOSigningKeyInput_authInfo, elGetter: __utils.ASN1Encoder<POPOSigningKeyInput_authInfo>) {
    if (!_cached_encoder_for_POPOSigningKeyInput_authInfo) { _cached_encoder_for_POPOSigningKeyInput_authInfo = __utils._encode_choice<POPOSigningKeyInput_authInfo>({
    "sender": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_GeneralName, __utils.BER),
    "publicKeyMAC": _encode_PKMACValue,
}, __utils.BER); }
    return _cached_encoder_for_POPOSigningKeyInput_authInfo(value, elGetter);
}


export class POPOSigningKeyInput {
    constructor (
        readonly authInfo: POPOSigningKeyInput_authInfo,
        readonly publicKey: SubjectPublicKeyInfo
    ) {}

}
export const _root_component_type_list_1_spec_for_POPOSigningKeyInput: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("authInfo", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("publicKey", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_POPOSigningKeyInput: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_POPOSigningKeyInput: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_POPOSigningKeyInput: __utils.ASN1Decoder<POPOSigningKeyInput> | null = null;
let _cached_encoder_for_POPOSigningKeyInput: __utils.ASN1Encoder<POPOSigningKeyInput> | null = null;
export function _decode_POPOSigningKeyInput (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_POPOSigningKeyInput) { _cached_decoder_for_POPOSigningKeyInput = function (el: asn1.ASN1Element): POPOSigningKeyInput {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("POPOSigningKeyInput contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "authInfo";
    sequence[1].name = "publicKey";
    let authInfo!: POPOSigningKeyInput_authInfo;
    let publicKey!: SubjectPublicKeyInfo;
    authInfo = _decode_POPOSigningKeyInput_authInfo(sequence[0]);
    publicKey = _decode_SubjectPublicKeyInfo(sequence[1]);
    // TODO: Validate values.
    return new POPOSigningKeyInput(
        authInfo,
        publicKey,

    );
}; }
    return _cached_decoder_for_POPOSigningKeyInput(el);
}
export function _encode_POPOSigningKeyInput (value: POPOSigningKeyInput, elGetter: __utils.ASN1Encoder<POPOSigningKeyInput>) {
    if (!_cached_encoder_for_POPOSigningKeyInput) { _cached_encoder_for_POPOSigningKeyInput = function (value: POPOSigningKeyInput, elGetter: __utils.ASN1Encoder<POPOSigningKeyInput>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_POPOSigningKeyInput_authInfo(value.authInfo, __utils.BER),
            /* REQUIRED   */ _encode_SubjectPublicKeyInfo(value.publicKey, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_POPOSigningKeyInput(value, elGetter);
}


export class POPOSigningKey {
    constructor (
        readonly poposkInput: asn1.OPTIONAL<POPOSigningKeyInput>,
        readonly algorithmIdentifier: AlgorithmIdentifier,
        readonly signature: asn1.BIT_STRING
    ) {}

}
export const _root_component_type_list_1_spec_for_POPOSigningKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("poposkInput", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("algorithmIdentifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("signature", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_POPOSigningKey: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_POPOSigningKey: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_POPOSigningKey: __utils.ASN1Decoder<POPOSigningKey> | null = null;
let _cached_encoder_for_POPOSigningKey: __utils.ASN1Encoder<POPOSigningKey> | null = null;
export function _decode_POPOSigningKey (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_POPOSigningKey) { _cached_decoder_for_POPOSigningKey = function (el: asn1.ASN1Element): POPOSigningKey {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let poposkInput: asn1.OPTIONAL<POPOSigningKeyInput>;
    let algorithmIdentifier!: AlgorithmIdentifier;
    let signature!: asn1.BIT_STRING;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "poposkInput": (_el: asn1.ASN1Element): void => { poposkInput = __utils._decode_implicit<POPOSigningKeyInput>(() => _decode_POPOSigningKeyInput)(_el); },
        "algorithmIdentifier": (_el: asn1.ASN1Element): void => { algorithmIdentifier = _decode_AlgorithmIdentifier(_el); },
        "signature": (_el: asn1.ASN1Element): void => { signature = __utils._decodeBitString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_POPOSigningKey,
        _extension_additions_list_spec_for_POPOSigningKey,
        _root_component_type_list_2_spec_for_POPOSigningKey,
        undefined,
    );
    return new POPOSigningKey( /* SEQUENCE_CONSTRUCTOR_CALL */
        poposkInput,
        algorithmIdentifier,
        signature
    );
}; }
    return _cached_decoder_for_POPOSigningKey(el);
}
export function _encode_POPOSigningKey (value: POPOSigningKey, elGetter: __utils.ASN1Encoder<POPOSigningKey>) {
    if (!_cached_encoder_for_POPOSigningKey) { _cached_encoder_for_POPOSigningKey = function (value: POPOSigningKey, elGetter: __utils.ASN1Encoder<POPOSigningKey>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.poposkInput === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_POPOSigningKeyInput, __utils.BER)(value.poposkInput, __utils.BER)),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.algorithmIdentifier, __utils.BER),
            /* REQUIRED   */ __utils._encodeBitString(value.signature, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_POPOSigningKey(value, elGetter);
}


export type SubsequentMessage = asn1.INTEGER;
export const SubsequentMessage_encrCert: SubsequentMessage = 0; /* LONG_NAMED_INTEGER_VALUE */
export const SubsequentMessage_challengeResp: SubsequentMessage = 1; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_SubsequentMessage: __utils.ASN1Decoder<SubsequentMessage> | null = null;
let _cached_encoder_for_SubsequentMessage: __utils.ASN1Encoder<SubsequentMessage> | null = null;
export function _decode_SubsequentMessage (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SubsequentMessage) { _cached_decoder_for_SubsequentMessage = __utils._decodeInteger; }
    return _cached_decoder_for_SubsequentMessage(el);
}
export function _encode_SubsequentMessage (value: SubsequentMessage, elGetter: __utils.ASN1Encoder<SubsequentMessage>) {
    if (!_cached_encoder_for_SubsequentMessage) { _cached_encoder_for_SubsequentMessage = __utils._encodeInteger; }
    return _cached_encoder_for_SubsequentMessage(value, elGetter);
}


export type POPOPrivKey =
    { thisMessage: asn1.BIT_STRING } /* CHOICE_ALT_ROOT */
    | { subsequentMessage: SubsequentMessage } /* CHOICE_ALT_ROOT */
    | { dhMAC: asn1.BIT_STRING } /* CHOICE_ALT_ROOT */
    | { agreeMAC: PKMACValue } /* CHOICE_ALT_ROOT */
    | { encryptedKey: EnvelopedData } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_POPOPrivKey: __utils.ASN1Decoder<POPOPrivKey> | null = null;
let _cached_encoder_for_POPOPrivKey: __utils.ASN1Encoder<POPOPrivKey> | null = null;
export function _decode_POPOPrivKey (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_POPOPrivKey) { _cached_decoder_for_POPOPrivKey = __utils._decode_inextensible_choice<POPOPrivKey>({
    "CONTEXT 0": [ "thisMessage", __utils._decode_implicit<asn1.BIT_STRING>(() => __utils._decodeBitString) ],
    "CONTEXT 1": [ "subsequentMessage", __utils._decode_implicit<SubsequentMessage>(() => _decode_SubsequentMessage) ],
    "CONTEXT 2": [ "dhMAC", __utils._decode_implicit<asn1.BIT_STRING>(() => __utils._decodeBitString) ],
    "CONTEXT 3": [ "agreeMAC", __utils._decode_implicit<PKMACValue>(() => _decode_PKMACValue) ],
    "CONTEXT 4": [ "encryptedKey", __utils._decode_implicit<EnvelopedData>(() => _decode_EnvelopedData) ]
}); }
    return _cached_decoder_for_POPOPrivKey(el);
}
export function _encode_POPOPrivKey (value: POPOPrivKey, elGetter: __utils.ASN1Encoder<POPOPrivKey>) {
    if (!_cached_encoder_for_POPOPrivKey) { _cached_encoder_for_POPOPrivKey = __utils._encode_choice<POPOPrivKey>({
    "thisMessage": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeBitString, __utils.BER),
    "subsequentMessage": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_SubsequentMessage, __utils.BER),
    "dhMAC": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeBitString, __utils.BER),
    "agreeMAC": __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_PKMACValue, __utils.BER),
    "encryptedKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => _encode_EnvelopedData, __utils.BER),
}, __utils.BER); }
    return _cached_encoder_for_POPOPrivKey(value, elGetter);
}


export type ProofOfPossession =
    { raVerified: asn1.NULL } /* CHOICE_ALT_ROOT */
    | { signature: POPOSigningKey } /* CHOICE_ALT_ROOT */
    | { keyEncipherment: POPOPrivKey } /* CHOICE_ALT_ROOT */
    | { keyAgreement: POPOPrivKey } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ProofOfPossession: __utils.ASN1Decoder<ProofOfPossession> | null = null;
let _cached_encoder_for_ProofOfPossession: __utils.ASN1Encoder<ProofOfPossession> | null = null;
export function _decode_ProofOfPossession (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ProofOfPossession) { _cached_decoder_for_ProofOfPossession = __utils._decode_inextensible_choice<ProofOfPossession>({
    "CONTEXT 0": [ "raVerified", __utils._decode_implicit<asn1.NULL>(() => __utils._decodeNull) ],
    "CONTEXT 1": [ "signature", __utils._decode_implicit<POPOSigningKey>(() => _decode_POPOSigningKey) ],
    "CONTEXT 2": [ "keyEncipherment", __utils._decode_implicit<POPOPrivKey>(() => _decode_POPOPrivKey) ],
    "CONTEXT 3": [ "keyAgreement", __utils._decode_implicit<POPOPrivKey>(() => _decode_POPOPrivKey) ]
}); }
    return _cached_decoder_for_ProofOfPossession(el);
}
export function _encode_ProofOfPossession (value: ProofOfPossession, elGetter: __utils.ASN1Encoder<ProofOfPossession>) {
    if (!_cached_encoder_for_ProofOfPossession) { _cached_encoder_for_ProofOfPossession = __utils._encode_choice<ProofOfPossession>({
    "raVerified": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeNull, __utils.BER),
    "signature": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_POPOSigningKey, __utils.BER),
    "keyEncipherment": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_POPOPrivKey, __utils.BER),
    "keyAgreement": __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_POPOPrivKey, __utils.BER),
}, __utils.BER); }
    return _cached_encoder_for_ProofOfPossession(value, elGetter);
}


export class CertReqMsg {
    constructor (
        readonly certReq: CertRequest,
        readonly popo: asn1.OPTIONAL<ProofOfPossession>,
        readonly regInfo: asn1.OPTIONAL<SingleAttribute[]>
    ) {}

}
export const _root_component_type_list_1_spec_for_CertReqMsg: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("certReq", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("popo", true, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("regInfo", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CertReqMsg: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_CertReqMsg: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_CertReqMsg: __utils.ASN1Decoder<CertReqMsg> | null = null;
let _cached_encoder_for_CertReqMsg: __utils.ASN1Encoder<CertReqMsg> | null = null;
export function _decode_CertReqMsg (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertReqMsg) { _cached_decoder_for_CertReqMsg = function (el: asn1.ASN1Element): CertReqMsg {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let certReq!: CertRequest;
    let popo: asn1.OPTIONAL<ProofOfPossession>;
    let regInfo: asn1.OPTIONAL<SingleAttribute[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "certReq": (_el: asn1.ASN1Element): void => { certReq = _decode_CertRequest(_el); },
        "popo": (_el: asn1.ASN1Element): void => { popo = _decode_ProofOfPossession(_el); },
        "regInfo": (_el: asn1.ASN1Element): void => { regInfo = __utils._decodeSequenceOf<SingleAttribute>(() => _decode_SingleAttribute)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertReqMsg,
        _extension_additions_list_spec_for_CertReqMsg,
        _root_component_type_list_2_spec_for_CertReqMsg,
        undefined,
    );
    return new CertReqMsg( /* SEQUENCE_CONSTRUCTOR_CALL */
        certReq,
        popo,
        regInfo
    );
}; }
    return _cached_decoder_for_CertReqMsg(el);
}
export function _encode_CertReqMsg (value: CertReqMsg, elGetter: __utils.ASN1Encoder<CertReqMsg>) {
    if (!_cached_encoder_for_CertReqMsg) { _cached_encoder_for_CertReqMsg = function (value: CertReqMsg, elGetter: __utils.ASN1Encoder<CertReqMsg>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CertRequest(value.certReq, __utils.BER),
            /* IF_ABSENT  */ ((value.popo === undefined) ? undefined : _encode_ProofOfPossession(value.popo, __utils.BER)),
            /* IF_ABSENT  */ ((value.regInfo === undefined) ? undefined : __utils._encodeSequenceOf<SingleAttribute>(() => _encode_SingleAttribute, __utils.BER)(value.regInfo, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_CertReqMsg(value, elGetter);
}


export type CertReqMessages = CertReqMsg[]; // SequenceOfType
let _cached_decoder_for_CertReqMessages: __utils.ASN1Decoder<CertReqMessages> | null = null;
let _cached_encoder_for_CertReqMessages: __utils.ASN1Encoder<CertReqMessages> | null = null;
export function _decode_CertReqMessages (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertReqMessages) { _cached_decoder_for_CertReqMessages = __utils._decodeSequenceOf<CertReqMsg>(() => _decode_CertReqMsg); }
    return _cached_decoder_for_CertReqMessages(el);
}
export function _encode_CertReqMessages (value: CertReqMessages, elGetter: __utils.ASN1Encoder<CertReqMessages>) {
    if (!_cached_encoder_for_CertReqMessages) { _cached_encoder_for_CertReqMessages = __utils._encodeSequenceOf<CertReqMsg>(() => _encode_CertReqMsg, __utils.BER); }
    return _cached_encoder_for_CertReqMessages(value, elGetter);
}


export const id_PasswordBasedMac: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* usa */ 840,
    /* nt */ 113533,
    /* nsn */ 7,
    /* algorithms */ 66,
    13,
]);

// TODO: ObjectSetAssignment: Password-MACAlgorithms

export class PBMParameter {
    constructor (
        readonly salt: asn1.OCTET_STRING,
        readonly owf: AlgorithmIdentifier,
        readonly iterationCount: asn1.INTEGER,
        readonly mac: AlgorithmIdentifier
    ) {}

}
export const _root_component_type_list_1_spec_for_PBMParameter: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("salt", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("owf", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("iterationCount", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("mac", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PBMParameter: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_PBMParameter: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_PBMParameter: __utils.ASN1Decoder<PBMParameter> | null = null;
let _cached_encoder_for_PBMParameter: __utils.ASN1Encoder<PBMParameter> | null = null;
export function _decode_PBMParameter (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PBMParameter) { _cached_decoder_for_PBMParameter = function (el: asn1.ASN1Element): PBMParameter {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new asn1.ASN1ConstructionError("PBMParameter contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
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
    // TODO: Validate values.
    return new PBMParameter(
        salt,
        owf,
        iterationCount,
        mac,

    );
}; }
    return _cached_decoder_for_PBMParameter(el);
}
export function _encode_PBMParameter (value: PBMParameter, elGetter: __utils.ASN1Encoder<PBMParameter>) {
    if (!_cached_encoder_for_PBMParameter) { _cached_encoder_for_PBMParameter = function (value: PBMParameter, elGetter: __utils.ASN1Encoder<PBMParameter>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeOctetString(value.salt, __utils.BER),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.owf, __utils.BER),
            /* REQUIRED   */ __utils._encodeInteger(value.iterationCount, __utils.BER),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.mac, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_PBMParameter(value, elGetter);
}


// TODO: ObjectSetAssignment: DigestAlgorithms

// TODO: ObjectSetAssignment: MACAlgorithms

// TODO: ObjectAssignment: ct-encKeyWithID

export const id_ct_encKeyWithID: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    21,
], id_ct);

export type Attributes = AttributeSet[]; // SetOfType
let _cached_decoder_for_Attributes: __utils.ASN1Decoder<Attributes> | null = null;
let _cached_encoder_for_Attributes: __utils.ASN1Encoder<Attributes> | null = null;
export function _decode_Attributes (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Attributes) { _cached_decoder_for_Attributes = __utils._decodeSetOf<AttributeSet>(() => _decode_AttributeSet); }
    return _cached_decoder_for_Attributes(el);
}
export function _encode_Attributes (value: Attributes, elGetter: __utils.ASN1Encoder<Attributes>) {
    if (!_cached_encoder_for_Attributes) { _cached_encoder_for_Attributes = __utils._encodeSetOf<AttributeSet>(() => _encode_AttributeSet, __utils.BER); }
    return _cached_encoder_for_Attributes(value, elGetter);
}


export class PrivateKeyInfo {
    constructor (
        readonly version: asn1.INTEGER,
        readonly privateKeyAlgorithm: AlgorithmIdentifier,
        readonly privateKey: asn1.OCTET_STRING,
        readonly attributes: asn1.OPTIONAL<Attributes>
    ) {}

}
export const _root_component_type_list_1_spec_for_PrivateKeyInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("privateKeyAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("privateKey", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("attributes", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PrivateKeyInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_PrivateKeyInfo: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_PrivateKeyInfo: __utils.ASN1Decoder<PrivateKeyInfo> | null = null;
let _cached_encoder_for_PrivateKeyInfo: __utils.ASN1Encoder<PrivateKeyInfo> | null = null;
export function _decode_PrivateKeyInfo (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PrivateKeyInfo) { _cached_decoder_for_PrivateKeyInfo = function (el: asn1.ASN1Element): PrivateKeyInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: asn1.INTEGER;
    let privateKeyAlgorithm!: AlgorithmIdentifier;
    let privateKey!: asn1.OCTET_STRING;
    let attributes: asn1.OPTIONAL<Attributes>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = __utils._decodeInteger(_el); },
        "privateKeyAlgorithm": (_el: asn1.ASN1Element): void => { privateKeyAlgorithm = _decode_AlgorithmIdentifier(_el); },
        "privateKey": (_el: asn1.ASN1Element): void => { privateKey = __utils._decodeOctetString(_el); },
        "attributes": (_el: asn1.ASN1Element): void => { attributes = __utils._decode_implicit<Attributes>(() => _decode_Attributes)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrivateKeyInfo,
        _extension_additions_list_spec_for_PrivateKeyInfo,
        _root_component_type_list_2_spec_for_PrivateKeyInfo,
        undefined,
    );
    return new PrivateKeyInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        privateKeyAlgorithm,
        privateKey,
        attributes
    );
}; }
    return _cached_decoder_for_PrivateKeyInfo(el);
}
export function _encode_PrivateKeyInfo (value: PrivateKeyInfo, elGetter: __utils.ASN1Encoder<PrivateKeyInfo>) {
    if (!_cached_encoder_for_PrivateKeyInfo) { _cached_encoder_for_PrivateKeyInfo = function (value: PrivateKeyInfo, elGetter: __utils.ASN1Encoder<PrivateKeyInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeInteger(value.version, __utils.BER),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.privateKeyAlgorithm, __utils.BER),
            /* REQUIRED   */ __utils._encodeOctetString(value.privateKey, __utils.BER),
            /* IF_ABSENT  */ ((value.attributes === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_Attributes, __utils.BER)(value.attributes, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_PrivateKeyInfo(value, elGetter);
}


export type EncKeyWithID_identifier =
    { string_: asn1.UTF8String } /* CHOICE_ALT_ROOT */
    | { generalName: GeneralName } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_EncKeyWithID_identifier: __utils.ASN1Decoder<EncKeyWithID_identifier> | null = null;
let _cached_encoder_for_EncKeyWithID_identifier: __utils.ASN1Encoder<EncKeyWithID_identifier> | null = null;
export function _decode_EncKeyWithID_identifier (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncKeyWithID_identifier) { _cached_decoder_for_EncKeyWithID_identifier = __utils._decode_inextensible_choice<EncKeyWithID_identifier>({
    "UNIVERSAL 12": [ "string_", __utils._decodeUTF8String ],
    "CONTEXT 0": [ "generalName", _decode_GeneralName ],
    "CONTEXT 1": [ "generalName", _decode_GeneralName ],
    "CONTEXT 2": [ "generalName", _decode_GeneralName ],
    "CONTEXT 3": [ "generalName", _decode_GeneralName ],
    "CONTEXT 4": [ "generalName", _decode_GeneralName ],
    "CONTEXT 5": [ "generalName", _decode_GeneralName ],
    "CONTEXT 6": [ "generalName", _decode_GeneralName ],
    "CONTEXT 7": [ "generalName", _decode_GeneralName ],
    "CONTEXT 8": [ "generalName", _decode_GeneralName ]
}); }
    return _cached_decoder_for_EncKeyWithID_identifier(el);
}
export function _encode_EncKeyWithID_identifier (value: EncKeyWithID_identifier, elGetter: __utils.ASN1Encoder<EncKeyWithID_identifier>) {
    if (!_cached_encoder_for_EncKeyWithID_identifier) { _cached_encoder_for_EncKeyWithID_identifier = __utils._encode_choice<EncKeyWithID_identifier>({
    "string_": __utils._encodeUTF8String,
    "generalName": _encode_GeneralName,
}, __utils.BER); }
    return _cached_encoder_for_EncKeyWithID_identifier(value, elGetter);
}


export class EncKeyWithID {
    constructor (
        readonly privateKey: PrivateKeyInfo,
        readonly identifier: asn1.OPTIONAL<EncKeyWithID_identifier>
    ) {}

}
export const _root_component_type_list_1_spec_for_EncKeyWithID: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("privateKey", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("identifier", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_EncKeyWithID: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_EncKeyWithID: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_EncKeyWithID: __utils.ASN1Decoder<EncKeyWithID> | null = null;
let _cached_encoder_for_EncKeyWithID: __utils.ASN1Encoder<EncKeyWithID> | null = null;
export function _decode_EncKeyWithID (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncKeyWithID) { _cached_decoder_for_EncKeyWithID = function (el: asn1.ASN1Element): EncKeyWithID {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let privateKey!: PrivateKeyInfo;
    let identifier: asn1.OPTIONAL<EncKeyWithID_identifier>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "privateKey": (_el: asn1.ASN1Element): void => { privateKey = _decode_PrivateKeyInfo(_el); },
        "identifier": (_el: asn1.ASN1Element): void => { identifier = _decode_EncKeyWithID_identifier(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EncKeyWithID,
        _extension_additions_list_spec_for_EncKeyWithID,
        _root_component_type_list_2_spec_for_EncKeyWithID,
        undefined,
    );
    return new EncKeyWithID( /* SEQUENCE_CONSTRUCTOR_CALL */
        privateKey,
        identifier
    );
}; }
    return _cached_decoder_for_EncKeyWithID(el);
}
export function _encode_EncKeyWithID (value: EncKeyWithID, elGetter: __utils.ASN1Encoder<EncKeyWithID>) {
    if (!_cached_encoder_for_EncKeyWithID) { _cached_encoder_for_EncKeyWithID = function (value: EncKeyWithID, elGetter: __utils.ASN1Encoder<EncKeyWithID>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PrivateKeyInfo(value.privateKey, __utils.BER),
            /* IF_ABSENT  */ ((value.identifier === undefined) ? undefined : _encode_EncKeyWithID_identifier(value.identifier, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_EncKeyWithID(value, elGetter);
}


// TODO: ObjectSetAssignment: PrivateKeyAttributes

export const id_regCtrl: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_pkip);

// TODO: ObjectSetAssignment: RegControlSet

// TODO: ObjectAssignment: regCtrl-regToken

export const id_regCtrl_regToken: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_regCtrl);

export type RegToken = asn1.UTF8String; // UTF8String
let _cached_decoder_for_RegToken: __utils.ASN1Decoder<RegToken> | null = null;
let _cached_encoder_for_RegToken: __utils.ASN1Encoder<RegToken> | null = null;
export function _decode_RegToken (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RegToken) { _cached_decoder_for_RegToken = __utils._decodeUTF8String; }
    return _cached_decoder_for_RegToken(el);
}
export function _encode_RegToken (value: RegToken, elGetter: __utils.ASN1Encoder<RegToken>) {
    if (!_cached_encoder_for_RegToken) { _cached_encoder_for_RegToken = __utils._encodeUTF8String; }
    return _cached_encoder_for_RegToken(value, elGetter);
}


// TODO: ObjectAssignment: regCtrl-authenticator

export const id_regCtrl_authenticator: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_regCtrl);

export type Authenticator = asn1.UTF8String; // UTF8String
let _cached_decoder_for_Authenticator: __utils.ASN1Decoder<Authenticator> | null = null;
let _cached_encoder_for_Authenticator: __utils.ASN1Encoder<Authenticator> | null = null;
export function _decode_Authenticator (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Authenticator) { _cached_decoder_for_Authenticator = __utils._decodeUTF8String; }
    return _cached_decoder_for_Authenticator(el);
}
export function _encode_Authenticator (value: Authenticator, elGetter: __utils.ASN1Encoder<Authenticator>) {
    if (!_cached_encoder_for_Authenticator) { _cached_encoder_for_Authenticator = __utils._encodeUTF8String; }
    return _cached_encoder_for_Authenticator(value, elGetter);
}


// TODO: ObjectAssignment: regCtrl-pkiPublicationInfo

export const id_regCtrl_pkiPublicationInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_regCtrl);

export type PKIPublicationInfo_action = asn1.INTEGER;
export const PKIPublicationInfo_action_dontPublish: PKIPublicationInfo_action = 0; /* LONG_NAMED_INTEGER_VALUE */
export const PKIPublicationInfo_action_pleasePublish: PKIPublicationInfo_action = 1; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_PKIPublicationInfo_action: __utils.ASN1Decoder<PKIPublicationInfo_action> | null = null;
let _cached_encoder_for_PKIPublicationInfo_action: __utils.ASN1Encoder<PKIPublicationInfo_action> | null = null;
export function _decode_PKIPublicationInfo_action (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIPublicationInfo_action) { _cached_decoder_for_PKIPublicationInfo_action = __utils._decodeInteger; }
    return _cached_decoder_for_PKIPublicationInfo_action(el);
}
export function _encode_PKIPublicationInfo_action (value: PKIPublicationInfo_action, elGetter: __utils.ASN1Encoder<PKIPublicationInfo_action>) {
    if (!_cached_encoder_for_PKIPublicationInfo_action) { _cached_encoder_for_PKIPublicationInfo_action = __utils._encodeInteger; }
    return _cached_encoder_for_PKIPublicationInfo_action(value, elGetter);
}


export type SinglePubInfo_pubMethod = asn1.INTEGER;
export const SinglePubInfo_pubMethod_dontCare: SinglePubInfo_pubMethod = 0; /* LONG_NAMED_INTEGER_VALUE */
export const SinglePubInfo_pubMethod_x500: SinglePubInfo_pubMethod = 1; /* LONG_NAMED_INTEGER_VALUE */
export const SinglePubInfo_pubMethod_web: SinglePubInfo_pubMethod = 2; /* LONG_NAMED_INTEGER_VALUE */
export const SinglePubInfo_pubMethod_ldap: SinglePubInfo_pubMethod = 3; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_SinglePubInfo_pubMethod: __utils.ASN1Decoder<SinglePubInfo_pubMethod> | null = null;
let _cached_encoder_for_SinglePubInfo_pubMethod: __utils.ASN1Encoder<SinglePubInfo_pubMethod> | null = null;
export function _decode_SinglePubInfo_pubMethod (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SinglePubInfo_pubMethod) { _cached_decoder_for_SinglePubInfo_pubMethod = __utils._decodeInteger; }
    return _cached_decoder_for_SinglePubInfo_pubMethod(el);
}
export function _encode_SinglePubInfo_pubMethod (value: SinglePubInfo_pubMethod, elGetter: __utils.ASN1Encoder<SinglePubInfo_pubMethod>) {
    if (!_cached_encoder_for_SinglePubInfo_pubMethod) { _cached_encoder_for_SinglePubInfo_pubMethod = __utils._encodeInteger; }
    return _cached_encoder_for_SinglePubInfo_pubMethod(value, elGetter);
}


export class SinglePubInfo {
    constructor (
        readonly pubMethod: SinglePubInfo_pubMethod,
        readonly pubLocation: asn1.OPTIONAL<GeneralName>
    ) {}

}
export const _root_component_type_list_1_spec_for_SinglePubInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("pubMethod", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("pubLocation", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SinglePubInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SinglePubInfo: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_SinglePubInfo: __utils.ASN1Decoder<SinglePubInfo> | null = null;
let _cached_encoder_for_SinglePubInfo: __utils.ASN1Encoder<SinglePubInfo> | null = null;
export function _decode_SinglePubInfo (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SinglePubInfo) { _cached_decoder_for_SinglePubInfo = function (el: asn1.ASN1Element): SinglePubInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let pubMethod!: SinglePubInfo_pubMethod;
    let pubLocation: asn1.OPTIONAL<GeneralName>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "pubMethod": (_el: asn1.ASN1Element): void => { pubMethod = _decode_SinglePubInfo_pubMethod(_el); },
        "pubLocation": (_el: asn1.ASN1Element): void => { pubLocation = _decode_GeneralName(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SinglePubInfo,
        _extension_additions_list_spec_for_SinglePubInfo,
        _root_component_type_list_2_spec_for_SinglePubInfo,
        undefined,
    );
    return new SinglePubInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        pubMethod,
        pubLocation
    );
}; }
    return _cached_decoder_for_SinglePubInfo(el);
}
export function _encode_SinglePubInfo (value: SinglePubInfo, elGetter: __utils.ASN1Encoder<SinglePubInfo>) {
    if (!_cached_encoder_for_SinglePubInfo) { _cached_encoder_for_SinglePubInfo = function (value: SinglePubInfo, elGetter: __utils.ASN1Encoder<SinglePubInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SinglePubInfo_pubMethod(value.pubMethod, __utils.BER),
            /* IF_ABSENT  */ ((value.pubLocation === undefined) ? undefined : _encode_GeneralName(value.pubLocation, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_SinglePubInfo(value, elGetter);
}


export class PKIPublicationInfo {
    constructor (
        readonly action: PKIPublicationInfo_action,
        readonly pubInfos: asn1.OPTIONAL<SinglePubInfo[]>
    ) {}

}
export const _root_component_type_list_1_spec_for_PKIPublicationInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("action", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("pubInfos", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PKIPublicationInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_PKIPublicationInfo: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_PKIPublicationInfo: __utils.ASN1Decoder<PKIPublicationInfo> | null = null;
let _cached_encoder_for_PKIPublicationInfo: __utils.ASN1Encoder<PKIPublicationInfo> | null = null;
export function _decode_PKIPublicationInfo (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIPublicationInfo) { _cached_decoder_for_PKIPublicationInfo = function (el: asn1.ASN1Element): PKIPublicationInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let action!: PKIPublicationInfo_action;
    let pubInfos: asn1.OPTIONAL<SinglePubInfo[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "action": (_el: asn1.ASN1Element): void => { action = _decode_PKIPublicationInfo_action(_el); },
        "pubInfos": (_el: asn1.ASN1Element): void => { pubInfos = __utils._decodeSequenceOf<SinglePubInfo>(() => _decode_SinglePubInfo)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PKIPublicationInfo,
        _extension_additions_list_spec_for_PKIPublicationInfo,
        _root_component_type_list_2_spec_for_PKIPublicationInfo,
        undefined,
    );
    return new PKIPublicationInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        action,
        pubInfos
    );
}; }
    return _cached_decoder_for_PKIPublicationInfo(el);
}
export function _encode_PKIPublicationInfo (value: PKIPublicationInfo, elGetter: __utils.ASN1Encoder<PKIPublicationInfo>) {
    if (!_cached_encoder_for_PKIPublicationInfo) { _cached_encoder_for_PKIPublicationInfo = function (value: PKIPublicationInfo, elGetter: __utils.ASN1Encoder<PKIPublicationInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PKIPublicationInfo_action(value.action, __utils.BER),
            /* IF_ABSENT  */ ((value.pubInfos === undefined) ? undefined : __utils._encodeSequenceOf<SinglePubInfo>(() => _encode_SinglePubInfo, __utils.BER)(value.pubInfos, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_PKIPublicationInfo(value, elGetter);
}


// TODO: ObjectAssignment: regCtrl-pkiArchiveOptions

export const id_regCtrl_pkiArchiveOptions: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_regCtrl);

export class EncryptedValue {
    constructor (
        readonly intendedAlg: asn1.OPTIONAL<AlgorithmIdentifier>,
        readonly symmAlg: asn1.OPTIONAL<AlgorithmIdentifier>,
        readonly encSymmKey: asn1.OPTIONAL<asn1.BIT_STRING>,
        readonly keyAlg: asn1.OPTIONAL<AlgorithmIdentifier>,
        readonly valueHint: asn1.OPTIONAL<asn1.OCTET_STRING>,
        readonly encValue: asn1.BIT_STRING
    ) {}

}
export const _root_component_type_list_1_spec_for_EncryptedValue: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("intendedAlg", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("symmAlg", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("encSymmKey", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("keyAlg", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("valueHint", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("encValue", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_EncryptedValue: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_EncryptedValue: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_EncryptedValue: __utils.ASN1Decoder<EncryptedValue> | null = null;
let _cached_encoder_for_EncryptedValue: __utils.ASN1Encoder<EncryptedValue> | null = null;
export function _decode_EncryptedValue (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncryptedValue) { _cached_decoder_for_EncryptedValue = function (el: asn1.ASN1Element): EncryptedValue {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let intendedAlg: asn1.OPTIONAL<AlgorithmIdentifier>;
    let symmAlg: asn1.OPTIONAL<AlgorithmIdentifier>;
    let encSymmKey: asn1.OPTIONAL<asn1.BIT_STRING>;
    let keyAlg: asn1.OPTIONAL<AlgorithmIdentifier>;
    let valueHint: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let encValue!: asn1.BIT_STRING;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "intendedAlg": (_el: asn1.ASN1Element): void => { intendedAlg = __utils._decode_implicit<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier)(_el); },
        "symmAlg": (_el: asn1.ASN1Element): void => { symmAlg = __utils._decode_implicit<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier)(_el); },
        "encSymmKey": (_el: asn1.ASN1Element): void => { encSymmKey = __utils._decode_implicit<asn1.BIT_STRING>(() => __utils._decodeBitString)(_el); },
        "keyAlg": (_el: asn1.ASN1Element): void => { keyAlg = __utils._decode_implicit<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier)(_el); },
        "valueHint": (_el: asn1.ASN1Element): void => { valueHint = __utils._decode_implicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString)(_el); },
        "encValue": (_el: asn1.ASN1Element): void => { encValue = __utils._decodeBitString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EncryptedValue,
        _extension_additions_list_spec_for_EncryptedValue,
        _root_component_type_list_2_spec_for_EncryptedValue,
        undefined,
    );
    return new EncryptedValue( /* SEQUENCE_CONSTRUCTOR_CALL */
        intendedAlg,
        symmAlg,
        encSymmKey,
        keyAlg,
        valueHint,
        encValue
    );
}; }
    return _cached_decoder_for_EncryptedValue(el);
}
export function _encode_EncryptedValue (value: EncryptedValue, elGetter: __utils.ASN1Encoder<EncryptedValue>) {
    if (!_cached_encoder_for_EncryptedValue) { _cached_encoder_for_EncryptedValue = function (value: EncryptedValue, elGetter: __utils.ASN1Encoder<EncryptedValue>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.intendedAlg === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_AlgorithmIdentifier, __utils.BER)(value.intendedAlg, __utils.BER)),
            /* IF_ABSENT  */ ((value.symmAlg === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_AlgorithmIdentifier, __utils.BER)(value.symmAlg, __utils.BER)),
            /* IF_ABSENT  */ ((value.encSymmKey === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeBitString, __utils.BER)(value.encSymmKey, __utils.BER)),
            /* IF_ABSENT  */ ((value.keyAlg === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_AlgorithmIdentifier, __utils.BER)(value.keyAlg, __utils.BER)),
            /* IF_ABSENT  */ ((value.valueHint === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => __utils._encodeOctetString, __utils.BER)(value.valueHint, __utils.BER)),
            /* REQUIRED   */ __utils._encodeBitString(value.encValue, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_EncryptedValue(value, elGetter);
}


export type EncryptedKey =
    { encryptedValue: EncryptedValue } /* CHOICE_ALT_ROOT */
    | { envelopedData: EnvelopedData } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_EncryptedKey: __utils.ASN1Decoder<EncryptedKey> | null = null;
let _cached_encoder_for_EncryptedKey: __utils.ASN1Encoder<EncryptedKey> | null = null;
export function _decode_EncryptedKey (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncryptedKey) { _cached_decoder_for_EncryptedKey = __utils._decode_inextensible_choice<EncryptedKey>({
    "UNIVERSAL 16": [ "encryptedValue", _decode_EncryptedValue ],
    "CONTEXT 0": [ "envelopedData", __utils._decode_implicit<EnvelopedData>(() => _decode_EnvelopedData) ]
}); }
    return _cached_decoder_for_EncryptedKey(el);
}
export function _encode_EncryptedKey (value: EncryptedKey, elGetter: __utils.ASN1Encoder<EncryptedKey>) {
    if (!_cached_encoder_for_EncryptedKey) { _cached_encoder_for_EncryptedKey = __utils._encode_choice<EncryptedKey>({
    "encryptedValue": _encode_EncryptedValue,
    "envelopedData": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_EnvelopedData, __utils.BER),
}, __utils.BER); }
    return _cached_encoder_for_EncryptedKey(value, elGetter);
}


export type KeyGenParameters = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_KeyGenParameters: __utils.ASN1Decoder<KeyGenParameters> | null = null;
let _cached_encoder_for_KeyGenParameters: __utils.ASN1Encoder<KeyGenParameters> | null = null;
export function _decode_KeyGenParameters (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyGenParameters) { _cached_decoder_for_KeyGenParameters = __utils._decodeOctetString; }
    return _cached_decoder_for_KeyGenParameters(el);
}
export function _encode_KeyGenParameters (value: KeyGenParameters, elGetter: __utils.ASN1Encoder<KeyGenParameters>) {
    if (!_cached_encoder_for_KeyGenParameters) { _cached_encoder_for_KeyGenParameters = __utils._encodeOctetString; }
    return _cached_encoder_for_KeyGenParameters(value, elGetter);
}


export type PKIArchiveOptions =
    { encryptedPrivKey: EncryptedKey } /* CHOICE_ALT_ROOT */
    | { keyGenParameters: KeyGenParameters } /* CHOICE_ALT_ROOT */
    | { archiveRemGenPrivKey: asn1.BOOLEAN } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_PKIArchiveOptions: __utils.ASN1Decoder<PKIArchiveOptions> | null = null;
let _cached_encoder_for_PKIArchiveOptions: __utils.ASN1Encoder<PKIArchiveOptions> | null = null;
export function _decode_PKIArchiveOptions (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIArchiveOptions) { _cached_decoder_for_PKIArchiveOptions = __utils._decode_inextensible_choice<PKIArchiveOptions>({
    "CONTEXT 0": [ "encryptedPrivKey", __utils._decode_implicit<EncryptedKey>(() => _decode_EncryptedKey) ],
    "CONTEXT 1": [ "keyGenParameters", __utils._decode_implicit<KeyGenParameters>(() => _decode_KeyGenParameters) ],
    "CONTEXT 2": [ "archiveRemGenPrivKey", __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean) ]
}); }
    return _cached_decoder_for_PKIArchiveOptions(el);
}
export function _encode_PKIArchiveOptions (value: PKIArchiveOptions, elGetter: __utils.ASN1Encoder<PKIArchiveOptions>) {
    if (!_cached_encoder_for_PKIArchiveOptions) { _cached_encoder_for_PKIArchiveOptions = __utils._encode_choice<PKIArchiveOptions>({
    "encryptedPrivKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_EncryptedKey, __utils.BER),
    "keyGenParameters": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_KeyGenParameters, __utils.BER),
    "archiveRemGenPrivKey": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeBoolean, __utils.BER),
}, __utils.BER); }
    return _cached_encoder_for_PKIArchiveOptions(value, elGetter);
}


// TODO: ObjectAssignment: regCtrl-oldCertID

export const id_regCtrl_oldCertID: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_regCtrl);

export class CertId {
    constructor (
        readonly issuer: GeneralName,
        readonly serialNumber: asn1.INTEGER
    ) {}

}
export const _root_component_type_list_1_spec_for_CertId: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("issuer", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("serialNumber", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CertId: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_CertId: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_CertId: __utils.ASN1Decoder<CertId> | null = null;
let _cached_encoder_for_CertId: __utils.ASN1Encoder<CertId> | null = null;
export function _decode_CertId (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertId) { _cached_decoder_for_CertId = function (el: asn1.ASN1Element): CertId {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("CertId contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "issuer";
    sequence[1].name = "serialNumber";
    let issuer!: GeneralName;
    let serialNumber!: asn1.INTEGER;
    issuer = _decode_GeneralName(sequence[0]);
    serialNumber = __utils._decodeInteger(sequence[1]);
    // TODO: Validate values.
    return new CertId(
        issuer,
        serialNumber,

    );
}; }
    return _cached_decoder_for_CertId(el);
}
export function _encode_CertId (value: CertId, elGetter: __utils.ASN1Encoder<CertId>) {
    if (!_cached_encoder_for_CertId) { _cached_encoder_for_CertId = function (value: CertId, elGetter: __utils.ASN1Encoder<CertId>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GeneralName(value.issuer, __utils.BER),
            /* REQUIRED   */ __utils._encodeInteger(value.serialNumber, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_CertId(value, elGetter);
}


export type OldCertId = CertId; // DefinedType
let _cached_decoder_for_OldCertId: __utils.ASN1Decoder<OldCertId> | null = null;
let _cached_encoder_for_OldCertId: __utils.ASN1Encoder<OldCertId> | null = null;
export function _decode_OldCertId (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OldCertId) { _cached_decoder_for_OldCertId = _decode_CertId; }
    return _cached_decoder_for_OldCertId(el);
}
export function _encode_OldCertId (value: OldCertId, elGetter: __utils.ASN1Encoder<OldCertId>) {
    if (!_cached_encoder_for_OldCertId) { _cached_encoder_for_OldCertId = _encode_CertId; }
    return _cached_encoder_for_OldCertId(value, elGetter);
}


// TODO: ObjectAssignment: regCtrl-protocolEncrKey

export const id_regCtrl_protocolEncrKey: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    6,
], id_regCtrl);

export type ProtocolEncrKey = SubjectPublicKeyInfo; // DefinedType
let _cached_decoder_for_ProtocolEncrKey: __utils.ASN1Decoder<ProtocolEncrKey> | null = null;
let _cached_encoder_for_ProtocolEncrKey: __utils.ASN1Encoder<ProtocolEncrKey> | null = null;
export function _decode_ProtocolEncrKey (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ProtocolEncrKey) { _cached_decoder_for_ProtocolEncrKey = _decode_SubjectPublicKeyInfo; }
    return _cached_decoder_for_ProtocolEncrKey(el);
}
export function _encode_ProtocolEncrKey (value: ProtocolEncrKey, elGetter: __utils.ASN1Encoder<ProtocolEncrKey>) {
    if (!_cached_encoder_for_ProtocolEncrKey) { _cached_encoder_for_ProtocolEncrKey = _encode_SubjectPublicKeyInfo; }
    return _cached_encoder_for_ProtocolEncrKey(value, elGetter);
}


export const id_regInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_pkip);

// TODO: ObjectSetAssignment: RegInfoSet

// TODO: ObjectAssignment: regInfo-utf8Pairs

export const id_regInfo_utf8Pairs: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_regInfo);

export type UTF8Pairs = asn1.UTF8String; // UTF8String
let _cached_decoder_for_UTF8Pairs: __utils.ASN1Decoder<UTF8Pairs> | null = null;
let _cached_encoder_for_UTF8Pairs: __utils.ASN1Encoder<UTF8Pairs> | null = null;
export function _decode_UTF8Pairs (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UTF8Pairs) { _cached_decoder_for_UTF8Pairs = __utils._decodeUTF8String; }
    return _cached_decoder_for_UTF8Pairs(el);
}
export function _encode_UTF8Pairs (value: UTF8Pairs, elGetter: __utils.ASN1Encoder<UTF8Pairs>) {
    if (!_cached_encoder_for_UTF8Pairs) { _cached_encoder_for_UTF8Pairs = __utils._encodeUTF8String; }
    return _cached_encoder_for_UTF8Pairs(value, elGetter);
}


// TODO: ObjectAssignment: regInfo-certReq

export const id_regInfo_certReq: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_regInfo);

export type CertReq = CertRequest; // DefinedType
let _cached_decoder_for_CertReq: __utils.ASN1Decoder<CertReq> | null = null;
let _cached_encoder_for_CertReq: __utils.ASN1Encoder<CertReq> | null = null;
export function _decode_CertReq (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertReq) { _cached_decoder_for_CertReq = _decode_CertRequest; }
    return _cached_decoder_for_CertReq(el);
}
export function _encode_CertReq (value: CertReq, elGetter: __utils.ASN1Encoder<CertReq>) {
    if (!_cached_encoder_for_CertReq) { _cached_encoder_for_CertReq = _encode_CertRequest; }
    return _cached_encoder_for_CertReq(value, elGetter);
}


/* END_MODULE PKIXCRMF-2009 */
