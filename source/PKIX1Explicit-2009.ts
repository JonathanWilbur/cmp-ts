
/*
    BEGIN_MODULE PKIX1Explicit-2009
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-pkix1-explicit-02
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
    Extensions,
    SingleAttribute,
    _decode_Extensions,
    _encode_Extensions,
    _decode_SingleAttribute,
    _encode_SingleAttribute
} from "./PKIX-CommonTypes-2009";
export {
    EXTENSION,
    ATTRIBUTE,
    Extensions,
    SingleAttribute,
    _decode_Extensions,
    _encode_Extensions,
    _decode_SingleAttribute,
    _encode_SingleAttribute
} from "./PKIX-CommonTypes-2009";

import * as AlgorithmInformation_2009 from "./AlgorithmInformation-2009";
import {
    PUBLIC_KEY,
    SIGNATURE_ALGORITHM,
    AlgorithmIdentifier,
    _get_decoder_for_AlgorithmIdentifier,
    _get_encoder_for_AlgorithmIdentifier
} from "./AlgorithmInformation-2009";
export {
    PUBLIC_KEY,
    SIGNATURE_ALGORITHM,
    AlgorithmIdentifier,
    _get_decoder_for_AlgorithmIdentifier,
    _get_encoder_for_AlgorithmIdentifier
} from "./AlgorithmInformation-2009";

import * as PKIX1Implicit_2009 from "./PKIX1Implicit-2009";
import {
    CertExtensions,
    CrlExtensions,
    CrlEntryExtensions
} from "./PKIX1Implicit-2009";
export {
    CertExtensions,
    CrlExtensions,
    CrlEntryExtensions
} from "./PKIX1Implicit-2009";

import * as PKIXAlgs_2009 from "./PKIXAlgs-2009";
import {
    SignatureAlgs,
    PublicKeys,
    _decode_SignatureAlgs,
    _encode_SignatureAlgs,
    _decode_PublicKeys,
    _encode_PublicKeys
} from "./PKIXAlgs-2009";
export {
    SignatureAlgs,
    PublicKeys,
    _decode_SignatureAlgs,
    _encode_SignatureAlgs,
    _decode_PublicKeys,
    _encode_PublicKeys
} from "./PKIXAlgs-2009";

import * as PKIX1_PSS_OAEP_Algorithms_2009 from "./PKIX1-PSS-OAEP-Algorithms-2009";
import {
    SignatureAlgs,
    PublicKeys,
    _decode_SignatureAlgs,
    _encode_SignatureAlgs,
    _decode_PublicKeys,
    _encode_PublicKeys
} from "./PKIX1-PSS-OAEP-Algorithms-2009";
export {
    SignatureAlgs,
    PublicKeys,
    _decode_SignatureAlgs,
    _encode_SignatureAlgs,
    _decode_PublicKeys,
    _encode_PublicKeys
} from "./PKIX1-PSS-OAEP-Algorithms-2009";

import * as PKIX_X400Address_2009 from "./PKIX-X400Address-2009";
import {
    ORAddress,
    _decode_ORAddress,
    _encode_ORAddress
} from "./PKIX-X400Address-2009";
export {
    ORAddress,
    _decode_ORAddress,
    _encode_ORAddress
} from "./PKIX-X400Address-2009";


export const id_pkix: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    /* pkix */ 7,
]);

export const id_pe: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_pkix);

export const id_qt: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_pkix);

export const id_kp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_pkix);

export const id_ad: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    48,
], id_pkix);

export const id_qt_cps: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_qt);

export const id_qt_unotice: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_qt);

export const id_ad_ocsp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_ad);

export const id_ad_caIssuers: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_ad);

export const id_ad_timeStamping: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_ad);

export const id_ad_caRepository: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    5,
], id_ad);

export const id_at: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* joint-iso-ccitt */ 2,
    /* ds */ 5,
    4,
]);

export type AttributeType = asn1.OBJECT_IDENTIFIER; // ObjectClassFieldType
let _cached_decoder_for_AttributeType: __utils.ASN1Decoder<AttributeType> | null = null;
let _cached_encoder_for_AttributeType: __utils.ASN1Encoder<AttributeType> | null = null;
export function _decode_AttributeType (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeType) { _cached_decoder_for_AttributeType = __utils._decodeObjectIdentifier; }
    return _cached_decoder_for_AttributeType(el);
}
export function _encode_AttributeType (value: AttributeType, elGetter: __utils.ASN1Encoder<AttributeType>) {
    if (!_cached_encoder_for_AttributeType) { _cached_encoder_for_AttributeType = __utils._encodeObjectIdentifier; }
    return _cached_encoder_for_AttributeType(value, elGetter);
}


export const id_at_name: AttributeType = new asn1.ObjectIdentifier([
    41,
], id_at);

// TODO: ObjectAssignment: at-name

export const id_at_surname: AttributeType = new asn1.ObjectIdentifier([
    4,
], id_at);

// TODO: ObjectAssignment: at-surname

export const id_at_givenName: AttributeType = new asn1.ObjectIdentifier([
    42,
], id_at);

// TODO: ObjectAssignment: at-givenName

export const id_at_initials: AttributeType = new asn1.ObjectIdentifier([
    43,
], id_at);

// TODO: ObjectAssignment: at-initials

export const id_at_generationQualifier: AttributeType = new asn1.ObjectIdentifier([
    44,
], id_at);

// TODO: ObjectAssignment: at-generationQualifier

export type DirectoryString =
    { teletexString: asn1.TeletexString } /* CHOICE_ALT_ROOT */
    | { printableString: asn1.PrintableString } /* CHOICE_ALT_ROOT */
    | { bmpString: asn1.BMPString } /* CHOICE_ALT_ROOT */
    | { universalString: asn1.UniversalString } /* CHOICE_ALT_ROOT */
    | { uTF8String: asn1.UTF8String } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_DirectoryString: __utils.ASN1Decoder<DirectoryString> | null = null;
let _cached_encoder_for_DirectoryString: __utils.ASN1Encoder<DirectoryString> | null = null;
export function _decode_DirectoryString (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DirectoryString) { _cached_decoder_for_DirectoryString = __utils._decode_inextensible_choice<DirectoryString>({
    "UNIVERSAL 20": [ "teletexString", __utils._decodeTeletexString ],
    "UNIVERSAL 19": [ "printableString", __utils._decodePrintableString ],
    "UNIVERSAL 30": [ "bmpString", __utils._decodeBMPString ],
    "UNIVERSAL 28": [ "universalString", __utils._decodeUniversalString ],
    "UNIVERSAL 12": [ "uTF8String", __utils._decodeUTF8String ]
}); }
    return _cached_decoder_for_DirectoryString(el);
}
export function _encode_DirectoryString (value: DirectoryString, elGetter: __utils.ASN1Encoder<DirectoryString>) {
    if (!_cached_encoder_for_DirectoryString) { _cached_encoder_for_DirectoryString = __utils._encode_choice<DirectoryString>({
    "teletexString": __utils._encodeTeletexString,
    "printableString": __utils._encodePrintableString,
    "bmpString": __utils._encodeBMPString,
    "universalString": __utils._encodeUniversalString,
    "uTF8String": __utils._encodeUTF8String,
}, __utils.BER); }
    return _cached_encoder_for_DirectoryString(value, elGetter);
}


export const ub_name: asn1.INTEGER = 32768;

export type X520name = DirectoryString; // DefinedType
let _cached_decoder_for_X520name: __utils.ASN1Decoder<X520name> | null = null;
let _cached_encoder_for_X520name: __utils.ASN1Encoder<X520name> | null = null;
export function _decode_X520name (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_X520name) { _cached_decoder_for_X520name = _decode_DirectoryString; }
    return _cached_decoder_for_X520name(el);
}
export function _encode_X520name (value: X520name, elGetter: __utils.ASN1Encoder<X520name>) {
    if (!_cached_encoder_for_X520name) { _cached_encoder_for_X520name = _encode_DirectoryString; }
    return _cached_encoder_for_X520name(value, elGetter);
}


export const id_at_commonName: AttributeType = new asn1.ObjectIdentifier([
    3,
], id_at);

// TODO: ObjectAssignment: at-x520CommonName

export const ub_common_name: asn1.INTEGER = 64;

export type X520CommonName = DirectoryString; // DefinedType
let _cached_decoder_for_X520CommonName: __utils.ASN1Decoder<X520CommonName> | null = null;
let _cached_encoder_for_X520CommonName: __utils.ASN1Encoder<X520CommonName> | null = null;
export function _decode_X520CommonName (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_X520CommonName) { _cached_decoder_for_X520CommonName = _decode_DirectoryString; }
    return _cached_decoder_for_X520CommonName(el);
}
export function _encode_X520CommonName (value: X520CommonName, elGetter: __utils.ASN1Encoder<X520CommonName>) {
    if (!_cached_encoder_for_X520CommonName) { _cached_encoder_for_X520CommonName = _encode_DirectoryString; }
    return _cached_encoder_for_X520CommonName(value, elGetter);
}


export const id_at_localityName: AttributeType = new asn1.ObjectIdentifier([
    7,
], id_at);

// TODO: ObjectAssignment: at-x520LocalityName

export const ub_locality_name: asn1.INTEGER = 128;

export type X520LocalityName = DirectoryString; // DefinedType
let _cached_decoder_for_X520LocalityName: __utils.ASN1Decoder<X520LocalityName> | null = null;
let _cached_encoder_for_X520LocalityName: __utils.ASN1Encoder<X520LocalityName> | null = null;
export function _decode_X520LocalityName (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_X520LocalityName) { _cached_decoder_for_X520LocalityName = _decode_DirectoryString; }
    return _cached_decoder_for_X520LocalityName(el);
}
export function _encode_X520LocalityName (value: X520LocalityName, elGetter: __utils.ASN1Encoder<X520LocalityName>) {
    if (!_cached_encoder_for_X520LocalityName) { _cached_encoder_for_X520LocalityName = _encode_DirectoryString; }
    return _cached_encoder_for_X520LocalityName(value, elGetter);
}


export const id_at_stateOrProvinceName: AttributeType = new asn1.ObjectIdentifier([
    8,
], id_at);

// TODO: ObjectAssignment: at-x520StateOrProvinceName

export const ub_state_name: asn1.INTEGER = 128;

export type X520StateOrProvinceName = DirectoryString; // DefinedType
let _cached_decoder_for_X520StateOrProvinceName: __utils.ASN1Decoder<X520StateOrProvinceName> | null = null;
let _cached_encoder_for_X520StateOrProvinceName: __utils.ASN1Encoder<X520StateOrProvinceName> | null = null;
export function _decode_X520StateOrProvinceName (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_X520StateOrProvinceName) { _cached_decoder_for_X520StateOrProvinceName = _decode_DirectoryString; }
    return _cached_decoder_for_X520StateOrProvinceName(el);
}
export function _encode_X520StateOrProvinceName (value: X520StateOrProvinceName, elGetter: __utils.ASN1Encoder<X520StateOrProvinceName>) {
    if (!_cached_encoder_for_X520StateOrProvinceName) { _cached_encoder_for_X520StateOrProvinceName = _encode_DirectoryString; }
    return _cached_encoder_for_X520StateOrProvinceName(value, elGetter);
}


export const id_at_organizationName: AttributeType = new asn1.ObjectIdentifier([
    10,
], id_at);

// TODO: ObjectAssignment: at-x520OrganizationName

export const ub_organization_name: asn1.INTEGER = 64;

export type X520OrganizationName = DirectoryString; // DefinedType
let _cached_decoder_for_X520OrganizationName: __utils.ASN1Decoder<X520OrganizationName> | null = null;
let _cached_encoder_for_X520OrganizationName: __utils.ASN1Encoder<X520OrganizationName> | null = null;
export function _decode_X520OrganizationName (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_X520OrganizationName) { _cached_decoder_for_X520OrganizationName = _decode_DirectoryString; }
    return _cached_decoder_for_X520OrganizationName(el);
}
export function _encode_X520OrganizationName (value: X520OrganizationName, elGetter: __utils.ASN1Encoder<X520OrganizationName>) {
    if (!_cached_encoder_for_X520OrganizationName) { _cached_encoder_for_X520OrganizationName = _encode_DirectoryString; }
    return _cached_encoder_for_X520OrganizationName(value, elGetter);
}


export const id_at_organizationalUnitName: AttributeType = new asn1.ObjectIdentifier([
    11,
], id_at);

// TODO: ObjectAssignment: at-x520OrganizationalUnitName

export const ub_organizational_unit_name: asn1.INTEGER = 64;

export type X520OrganizationalUnitName = DirectoryString; // DefinedType
let _cached_decoder_for_X520OrganizationalUnitName: __utils.ASN1Decoder<X520OrganizationalUnitName> | null = null;
let _cached_encoder_for_X520OrganizationalUnitName: __utils.ASN1Encoder<X520OrganizationalUnitName> | null = null;
export function _decode_X520OrganizationalUnitName (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_X520OrganizationalUnitName) { _cached_decoder_for_X520OrganizationalUnitName = _decode_DirectoryString; }
    return _cached_decoder_for_X520OrganizationalUnitName(el);
}
export function _encode_X520OrganizationalUnitName (value: X520OrganizationalUnitName, elGetter: __utils.ASN1Encoder<X520OrganizationalUnitName>) {
    if (!_cached_encoder_for_X520OrganizationalUnitName) { _cached_encoder_for_X520OrganizationalUnitName = _encode_DirectoryString; }
    return _cached_encoder_for_X520OrganizationalUnitName(value, elGetter);
}


export const id_at_title: AttributeType = new asn1.ObjectIdentifier([
    12,
], id_at);

// TODO: ObjectAssignment: at-x520Title

export const id_at_dnQualifier: AttributeType = new asn1.ObjectIdentifier([
    46,
], id_at);

// TODO: ObjectAssignment: at-x520dnQualifier

export const id_at_countryName: AttributeType = new asn1.ObjectIdentifier([
    6,
], id_at);

// TODO: ObjectAssignment: at-x520countryName

export const id_at_serialNumber: AttributeType = new asn1.ObjectIdentifier([
    5,
], id_at);

// TODO: ObjectAssignment: at-x520SerialNumber

export const id_at_pseudonym: AttributeType = new asn1.ObjectIdentifier([
    65,
], id_at);

// TODO: ObjectAssignment: at-x520Pseudonym

export const id_domainComponent: AttributeType = new asn1.ObjectIdentifier([
    /* itu-t */ 0,
    /* data */ 9,
    /* pss */ 2342,
    /* ucl */ 19200300,
    /* pilot */ 100,
    /* pilotAttributeType */ 1,
    25,
]);

// TODO: ObjectAssignment: at-domainComponent

export const pkcs_9: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    9,
]);

export const id_emailAddress: AttributeType = new asn1.ObjectIdentifier([
    1,
], pkcs_9);

// TODO: ObjectAssignment: at-emailAddress

export type RelativeDistinguishedName = SingleAttribute[]; // SetOfType
let _cached_decoder_for_RelativeDistinguishedName: __utils.ASN1Decoder<RelativeDistinguishedName> | null = null;
let _cached_encoder_for_RelativeDistinguishedName: __utils.ASN1Encoder<RelativeDistinguishedName> | null = null;
export function _decode_RelativeDistinguishedName (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RelativeDistinguishedName) { _cached_decoder_for_RelativeDistinguishedName = __utils._decodeSetOf<SingleAttribute>(() => _decode_SingleAttribute); }
    return _cached_decoder_for_RelativeDistinguishedName(el);
}
export function _encode_RelativeDistinguishedName (value: RelativeDistinguishedName, elGetter: __utils.ASN1Encoder<RelativeDistinguishedName>) {
    if (!_cached_encoder_for_RelativeDistinguishedName) { _cached_encoder_for_RelativeDistinguishedName = __utils._encodeSetOf<SingleAttribute>(() => _encode_SingleAttribute, __utils.BER); }
    return _cached_encoder_for_RelativeDistinguishedName(value, elGetter);
}


export type RDNSequence = RelativeDistinguishedName[]; // SequenceOfType
let _cached_decoder_for_RDNSequence: __utils.ASN1Decoder<RDNSequence> | null = null;
let _cached_encoder_for_RDNSequence: __utils.ASN1Encoder<RDNSequence> | null = null;
export function _decode_RDNSequence (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RDNSequence) { _cached_decoder_for_RDNSequence = __utils._decodeSequenceOf<RelativeDistinguishedName>(() => _decode_RelativeDistinguishedName); }
    return _cached_decoder_for_RDNSequence(el);
}
export function _encode_RDNSequence (value: RDNSequence, elGetter: __utils.ASN1Encoder<RDNSequence>) {
    if (!_cached_encoder_for_RDNSequence) { _cached_encoder_for_RDNSequence = __utils._encodeSequenceOf<RelativeDistinguishedName>(() => _encode_RelativeDistinguishedName, __utils.BER); }
    return _cached_encoder_for_RDNSequence(value, elGetter);
}


export type DistinguishedName = RDNSequence; // DefinedType
let _cached_decoder_for_DistinguishedName: __utils.ASN1Decoder<DistinguishedName> | null = null;
let _cached_encoder_for_DistinguishedName: __utils.ASN1Encoder<DistinguishedName> | null = null;
export function _decode_DistinguishedName (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DistinguishedName) { _cached_decoder_for_DistinguishedName = _decode_RDNSequence; }
    return _cached_decoder_for_DistinguishedName(el);
}
export function _encode_DistinguishedName (value: DistinguishedName, elGetter: __utils.ASN1Encoder<DistinguishedName>) {
    if (!_cached_encoder_for_DistinguishedName) { _cached_encoder_for_DistinguishedName = _encode_RDNSequence; }
    return _cached_encoder_for_DistinguishedName(value, elGetter);
}


// TODO: ObjectSetAssignment: SupportedAttributes

export class SIGNED_algorithmIdentifier<ToBeSigned> {
    constructor (
        readonly algorithm: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.OPTIONAL<asn1.ASN1Element>
    ) {}

}
export const _root_component_type_list_1_spec_for_SIGNED_algorithmIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("algorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("parameters", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SIGNED_algorithmIdentifier: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SIGNED_algorithmIdentifier: __utils.ComponentSpec[] = [
    
];
export function _get_decoder_for_SIGNED_algorithmIdentifier<ToBeSigned>(_decode_ToBeSigned: __utils.ASN1Decoder<ToBeSigned>) {
    return function (el: asn1.ASN1Element): SIGNED_algorithmIdentifier<ToBeSigned> {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let algorithm!: asn1.OBJECT_IDENTIFIER;
    let parameters: asn1.OPTIONAL<asn1.ASN1Element>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "algorithm": (_el: asn1.ASN1Element): void => { algorithm = __utils._decodeObjectIdentifier(_el); },
        "parameters": (_el: asn1.ASN1Element): void => { parameters = __utils._decodeAny(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SIGNED_algorithmIdentifier,
        _extension_additions_list_spec_for_SIGNED_algorithmIdentifier,
        _root_component_type_list_2_spec_for_SIGNED_algorithmIdentifier,
        undefined,
    );
    return new SIGNED_algorithmIdentifier( /* SEQUENCE_CONSTRUCTOR_CALL */
        algorithm,
        parameters
    );
};
}
export function _get_encoder_for_SIGNED_algorithmIdentifier<ToBeSigned>(_encode_ToBeSigned: __utils.ASN1Encoder<ToBeSigned>) {
    return function (value: SIGNED_algorithmIdentifier<ToBeSigned>, elGetter: __utils.ASN1Encoder<SIGNED_algorithmIdentifier<ToBeSigned>>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.algorithm, __utils.BER),
            /* IF_ABSENT  */ ((value.parameters === undefined) ? undefined : __utils._encodeAny(value.parameters, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};
}


export class SIGNED<ToBeSigned> {
    constructor (
        readonly toBeSigned: ToBeSigned,
        readonly algorithmIdentifier: SIGNED_algorithmIdentifier,
        readonly signature: asn1.BIT_STRING
    ) {}

}
export const _root_component_type_list_1_spec_for_SIGNED: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("toBeSigned", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("algorithmIdentifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("signature", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SIGNED: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SIGNED: __utils.ComponentSpec[] = [
    
];
export function _get_decoder_for_SIGNED<ToBeSigned>(_decode_ToBeSigned: __utils.ASN1Decoder<ToBeSigned>) {
    return function <ToBeSigned>(el: asn1.ASN1Element): SIGNED<ToBeSigned> {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError("SIGNED contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "toBeSigned";
    sequence[1].name = "algorithmIdentifier";
    sequence[2].name = "signature";
    let toBeSigned!: ToBeSigned;
    let algorithmIdentifier!: SIGNED_algorithmIdentifier;
    let signature!: asn1.BIT_STRING;
    toBeSigned = _decode_ToBeSigned(sequence[0]);
    algorithmIdentifier = _decode_SIGNED_algorithmIdentifier(sequence[1]);
    signature = __utils._decodeBitString(sequence[2]);
    // TODO: Validate values.
    return new SIGNED<ToBeSigned>(
        toBeSigned,
        algorithmIdentifier,
        signature,

    );
};
}
export function _get_encoder_for_SIGNED<ToBeSigned>(_encode_ToBeSigned: __utils.ASN1Encoder<ToBeSigned>) {
    return function (value: SIGNED<ToBeSigned>, elGetter: __utils.ASN1Encoder<SIGNED<ToBeSigned>>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ToBeSigned(value.toBeSigned, __utils.BER),
            /* REQUIRED   */ _encode_SIGNED_algorithmIdentifier(value.algorithmIdentifier, __utils.BER),
            /* REQUIRED   */ __utils._encodeBitString(value.signature, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};
}


export type Version = asn1.INTEGER;
export const Version_v1: Version = 0; /* LONG_NAMED_INTEGER_VALUE */
export const Version_v2: Version = 1; /* LONG_NAMED_INTEGER_VALUE */
export const Version_v3: Version = 2; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_Version: __utils.ASN1Decoder<Version> | null = null;
let _cached_encoder_for_Version: __utils.ASN1Encoder<Version> | null = null;
export function _decode_Version (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Version) { _cached_decoder_for_Version = __utils._decodeInteger; }
    return _cached_decoder_for_Version(el);
}
export function _encode_Version (value: Version, elGetter: __utils.ASN1Encoder<Version>) {
    if (!_cached_encoder_for_Version) { _cached_encoder_for_Version = __utils._encodeInteger; }
    return _cached_encoder_for_Version(value, elGetter);
}


export type CertificateSerialNumber = asn1.INTEGER;
let _cached_decoder_for_CertificateSerialNumber: __utils.ASN1Decoder<CertificateSerialNumber> | null = null;
let _cached_encoder_for_CertificateSerialNumber: __utils.ASN1Encoder<CertificateSerialNumber> | null = null;
export function _decode_CertificateSerialNumber (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificateSerialNumber) { _cached_decoder_for_CertificateSerialNumber = __utils._decodeInteger; }
    return _cached_decoder_for_CertificateSerialNumber(el);
}
export function _encode_CertificateSerialNumber (value: CertificateSerialNumber, elGetter: __utils.ASN1Encoder<CertificateSerialNumber>) {
    if (!_cached_encoder_for_CertificateSerialNumber) { _cached_encoder_for_CertificateSerialNumber = __utils._encodeInteger; }
    return _cached_encoder_for_CertificateSerialNumber(value, elGetter);
}


export type Name =
    { rdnSequence: RDNSequence } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_Name: __utils.ASN1Decoder<Name> | null = null;
let _cached_encoder_for_Name: __utils.ASN1Encoder<Name> | null = null;
export function _decode_Name (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Name) { _cached_decoder_for_Name = __utils._decode_inextensible_choice<Name>({
    "UNIVERSAL 16": [ "rdnSequence", _decode_RDNSequence ]
}); }
    return _cached_decoder_for_Name(el);
}
export function _encode_Name (value: Name, elGetter: __utils.ASN1Encoder<Name>) {
    if (!_cached_encoder_for_Name) { _cached_encoder_for_Name = __utils._encode_choice<Name>({
    "rdnSequence": _encode_RDNSequence,
}, __utils.BER); }
    return _cached_encoder_for_Name(value, elGetter);
}


export type Time =
    { utcTime: asn1.UTCTime } /* CHOICE_ALT_ROOT */
    | { generalTime: asn1.GeneralizedTime } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_Time: __utils.ASN1Decoder<Time> | null = null;
let _cached_encoder_for_Time: __utils.ASN1Encoder<Time> | null = null;
export function _decode_Time (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Time) { _cached_decoder_for_Time = __utils._decode_inextensible_choice<Time>({
    "UNIVERSAL 23": [ "utcTime", __utils._decodeUTCTime ],
    "UNIVERSAL 24": [ "generalTime", __utils._decodeGeneralizedTime ]
}); }
    return _cached_decoder_for_Time(el);
}
export function _encode_Time (value: Time, elGetter: __utils.ASN1Encoder<Time>) {
    if (!_cached_encoder_for_Time) { _cached_encoder_for_Time = __utils._encode_choice<Time>({
    "utcTime": __utils._encodeUTCTime,
    "generalTime": __utils._encodeGeneralizedTime,
}, __utils.BER); }
    return _cached_encoder_for_Time(value, elGetter);
}


export class Validity {
    constructor (
        readonly notBefore: Time,
        readonly notAfter: Time
    ) {}

}
export const _root_component_type_list_1_spec_for_Validity: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("notBefore", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("notAfter", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Validity: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_Validity: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_Validity: __utils.ASN1Decoder<Validity> | null = null;
let _cached_encoder_for_Validity: __utils.ASN1Encoder<Validity> | null = null;
export function _decode_Validity (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Validity) { _cached_decoder_for_Validity = function (el: asn1.ASN1Element): Validity {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("Validity contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "notBefore";
    sequence[1].name = "notAfter";
    let notBefore!: Time;
    let notAfter!: Time;
    notBefore = _decode_Time(sequence[0]);
    notAfter = _decode_Time(sequence[1]);
    // TODO: Validate values.
    return new Validity(
        notBefore,
        notAfter,

    );
}; }
    return _cached_decoder_for_Validity(el);
}
export function _encode_Validity (value: Validity, elGetter: __utils.ASN1Encoder<Validity>) {
    if (!_cached_encoder_for_Validity) { _cached_encoder_for_Validity = function (value: Validity, elGetter: __utils.ASN1Encoder<Validity>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Time(value.notBefore, __utils.BER),
            /* REQUIRED   */ _encode_Time(value.notAfter, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_Validity(value, elGetter);
}


export class SubjectPublicKeyInfo {
    constructor (
        readonly algorithm: AlgorithmIdentifier,
        readonly subjectPublicKey: asn1.BIT_STRING
    ) {}

}
export const _root_component_type_list_1_spec_for_SubjectPublicKeyInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("algorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("subjectPublicKey", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SubjectPublicKeyInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SubjectPublicKeyInfo: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_SubjectPublicKeyInfo: __utils.ASN1Decoder<SubjectPublicKeyInfo> | null = null;
let _cached_encoder_for_SubjectPublicKeyInfo: __utils.ASN1Encoder<SubjectPublicKeyInfo> | null = null;
export function _decode_SubjectPublicKeyInfo (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SubjectPublicKeyInfo) { _cached_decoder_for_SubjectPublicKeyInfo = function (el: asn1.ASN1Element): SubjectPublicKeyInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("SubjectPublicKeyInfo contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "algorithm";
    sequence[1].name = "subjectPublicKey";
    let algorithm!: AlgorithmIdentifier;
    let subjectPublicKey!: asn1.BIT_STRING;
    algorithm = _decode_AlgorithmIdentifier(sequence[0]);
    subjectPublicKey = __utils._decodeBitString(sequence[1]);
    // TODO: Validate values.
    return new SubjectPublicKeyInfo(
        algorithm,
        subjectPublicKey,

    );
}; }
    return _cached_decoder_for_SubjectPublicKeyInfo(el);
}
export function _encode_SubjectPublicKeyInfo (value: SubjectPublicKeyInfo, elGetter: __utils.ASN1Encoder<SubjectPublicKeyInfo>) {
    if (!_cached_encoder_for_SubjectPublicKeyInfo) { _cached_encoder_for_SubjectPublicKeyInfo = function (value: SubjectPublicKeyInfo, elGetter: __utils.ASN1Encoder<SubjectPublicKeyInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.algorithm, __utils.BER),
            /* REQUIRED   */ __utils._encodeBitString(value.subjectPublicKey, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_SubjectPublicKeyInfo(value, elGetter);
}


export type UniqueIdentifier = asn1.BIT_STRING;
let _cached_decoder_for_UniqueIdentifier: __utils.ASN1Decoder<UniqueIdentifier> | null = null;
let _cached_encoder_for_UniqueIdentifier: __utils.ASN1Encoder<UniqueIdentifier> | null = null;
export function _decode_UniqueIdentifier (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UniqueIdentifier) { _cached_decoder_for_UniqueIdentifier = __utils._decodeBitString; }
    return _cached_decoder_for_UniqueIdentifier(el);
}
export function _encode_UniqueIdentifier (value: UniqueIdentifier, elGetter: __utils.ASN1Encoder<UniqueIdentifier>) {
    if (!_cached_encoder_for_UniqueIdentifier) { _cached_encoder_for_UniqueIdentifier = __utils._encodeBitString; }
    return _cached_encoder_for_UniqueIdentifier(value, elGetter);
}


export class TBSCertificate {
    constructor (
        readonly version: asn1.OPTIONAL<Version>,
        readonly serialNumber: CertificateSerialNumber,
        readonly signature: AlgorithmIdentifier,
        readonly issuer: Name,
        readonly validity: Validity,
        readonly subject: Name,
        readonly subjectPublicKeyInfo: SubjectPublicKeyInfo,
        readonly issuerUniqueID: asn1.OPTIONAL<UniqueIdentifier>,
        readonly subjectUniqueID: asn1.OPTIONAL<UniqueIdentifier>,
        readonly extensions: asn1.OPTIONAL<Extensions>,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version () { return v1; }
}
export const _root_component_type_list_1_spec_for_TBSCertificate: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("serialNumber", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("signature", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("issuer", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("validity", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("subject", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("subjectPublicKeyInfo", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_TBSCertificate: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_TBSCertificate: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("issuerUniqueID", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), 0, 2),
    new __utils.ComponentSpec("subjectUniqueID", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), 0, 2),
    new __utils.ComponentSpec("extensions", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), 1, 3)
];
let _cached_decoder_for_TBSCertificate: __utils.ASN1Decoder<TBSCertificate> | null = null;
let _cached_encoder_for_TBSCertificate: __utils.ASN1Encoder<TBSCertificate> | null = null;
export function _decode_TBSCertificate (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TBSCertificate) { _cached_decoder_for_TBSCertificate = function (el: asn1.ASN1Element): TBSCertificate {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<Version> = TBSCertificate._default_value_for_version;
    let serialNumber!: CertificateSerialNumber;
    let signature!: AlgorithmIdentifier;
    let issuer!: Name;
    let validity!: Validity;
    let subject!: Name;
    let subjectPublicKeyInfo!: SubjectPublicKeyInfo;
    let issuerUniqueID: asn1.OPTIONAL<UniqueIdentifier>; // Only present in version 2 and higher.
    let subjectUniqueID: asn1.OPTIONAL<UniqueIdentifier>; // Only present in version 2 and higher.
    let extensions: asn1.OPTIONAL<Extensions>; // Only present in version 3 and higher.
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = __utils._decode_explicit<Version>(() => _decode_Version)(_el); },
        "serialNumber": (_el: asn1.ASN1Element): void => { serialNumber = _decode_CertificateSerialNumber(_el); },
        "signature": (_el: asn1.ASN1Element): void => { signature = _decode_AlgorithmIdentifier(_el); },
        "issuer": (_el: asn1.ASN1Element): void => { issuer = _decode_Name(_el); },
        "validity": (_el: asn1.ASN1Element): void => { validity = _decode_Validity(_el); },
        "subject": (_el: asn1.ASN1Element): void => { subject = _decode_Name(_el); },
        "subjectPublicKeyInfo": (_el: asn1.ASN1Element): void => { subjectPublicKeyInfo = _decode_SubjectPublicKeyInfo(_el); },
        "issuerUniqueID": (_el: asn1.ASN1Element): void => { issuerUniqueID = __utils._decode_explicit<UniqueIdentifier>(() => _decode_UniqueIdentifier)(_el); },
        "subjectUniqueID": (_el: asn1.ASN1Element): void => { subjectUniqueID = __utils._decode_explicit<UniqueIdentifier>(() => _decode_UniqueIdentifier)(_el); },
        "extensions": (_el: asn1.ASN1Element): void => { extensions = __utils._decode_explicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TBSCertificate,
        _extension_additions_list_spec_for_TBSCertificate,
        _root_component_type_list_2_spec_for_TBSCertificate,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TBSCertificate( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        serialNumber,
        signature,
        issuer,
        validity,
        subject,
        subjectPublicKeyInfo,
        issuerUniqueID,
        subjectUniqueID,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TBSCertificate(el);
}
export function _encode_TBSCertificate (value: TBSCertificate, elGetter: __utils.ASN1Encoder<TBSCertificate>) {
    if (!_cached_encoder_for_TBSCertificate) { _cached_encoder_for_TBSCertificate = function (value: TBSCertificate, elGetter: __utils.ASN1Encoder<TBSCertificate>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.version === undefined || __utils.deepEq(value.version, TBSCertificate._default_value_for_version) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Version, __utils.BER)(value.version, __utils.BER)),
            /* REQUIRED   */ _encode_CertificateSerialNumber(value.serialNumber, __utils.BER),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.signature, __utils.BER),
            /* REQUIRED   */ _encode_Name(value.issuer, __utils.BER),
            /* REQUIRED   */ _encode_Validity(value.validity, __utils.BER),
            /* REQUIRED   */ _encode_Name(value.subject, __utils.BER),
            /* REQUIRED   */ _encode_SubjectPublicKeyInfo(value.subjectPublicKeyInfo, __utils.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.issuerUniqueID === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_UniqueIdentifier, __utils.BER)(value.issuerUniqueID, __utils.BER)),
            /* IF_ABSENT  */ ((value.subjectUniqueID === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_UniqueIdentifier, __utils.BER)(value.subjectUniqueID, __utils.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_Extensions, __utils.BER)(value.extensions, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_TBSCertificate(value, elGetter);
}


export type Certificate = SIGNED<TBSCertificate>; // DefinedType
let _cached_decoder_for_Certificate: __utils.ASN1Decoder<Certificate> | null = null;
let _cached_encoder_for_Certificate: __utils.ASN1Encoder<Certificate> | null = null;
export function _decode_Certificate (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Certificate) { _cached_decoder_for_Certificate = _get_decoder_for_SIGNED<TBSCertificate>(_decode_TBSCertificate); }
    return _cached_decoder_for_Certificate(el);
}
export function _encode_Certificate (value: Certificate, elGetter: __utils.ASN1Encoder<Certificate>) {
    if (!_cached_encoder_for_Certificate) { _cached_encoder_for_Certificate = _get_encoder_for_SIGNED<TBSCertificate>(_encode_TBSCertificate); }
    return _cached_encoder_for_Certificate(value, elGetter);
}


export class TBSCertList_revokedCertificates_Item {
    constructor (
        readonly userCertificate: CertificateSerialNumber,
        readonly revocationDate: Time,
        readonly crlEntryExtensions: asn1.OPTIONAL<Extensions>,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}

}
export const _root_component_type_list_1_spec_for_TBSCertList_revokedCertificates_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("userCertificate", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("revocationDate", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_TBSCertList_revokedCertificates_Item: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_TBSCertList_revokedCertificates_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("crlEntryExtensions", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), 0, 2)
];
let _cached_decoder_for_TBSCertList_revokedCertificates_Item: __utils.ASN1Decoder<TBSCertList_revokedCertificates_Item> | null = null;
let _cached_encoder_for_TBSCertList_revokedCertificates_Item: __utils.ASN1Encoder<TBSCertList_revokedCertificates_Item> | null = null;
export function _decode_TBSCertList_revokedCertificates_Item (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TBSCertList_revokedCertificates_Item) { _cached_decoder_for_TBSCertList_revokedCertificates_Item = function (el: asn1.ASN1Element): TBSCertList_revokedCertificates_Item {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let userCertificate!: CertificateSerialNumber;
    let revocationDate!: Time;
    let crlEntryExtensions: asn1.OPTIONAL<Extensions>; // Only present in version 2 and higher.
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "userCertificate": (_el: asn1.ASN1Element): void => { userCertificate = _decode_CertificateSerialNumber(_el); },
        "revocationDate": (_el: asn1.ASN1Element): void => { revocationDate = _decode_Time(_el); },
        "crlEntryExtensions": (_el: asn1.ASN1Element): void => { crlEntryExtensions = _decode_Extensions(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TBSCertList_revokedCertificates_Item,
        _extension_additions_list_spec_for_TBSCertList_revokedCertificates_Item,
        _root_component_type_list_2_spec_for_TBSCertList_revokedCertificates_Item,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TBSCertList_revokedCertificates_Item( /* SEQUENCE_CONSTRUCTOR_CALL */
        userCertificate,
        revocationDate,
        crlEntryExtensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TBSCertList_revokedCertificates_Item(el);
}
export function _encode_TBSCertList_revokedCertificates_Item (value: TBSCertList_revokedCertificates_Item, elGetter: __utils.ASN1Encoder<TBSCertList_revokedCertificates_Item>) {
    if (!_cached_encoder_for_TBSCertList_revokedCertificates_Item) { _cached_encoder_for_TBSCertList_revokedCertificates_Item = function (value: TBSCertList_revokedCertificates_Item, elGetter: __utils.ASN1Encoder<TBSCertList_revokedCertificates_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CertificateSerialNumber(value.userCertificate, __utils.BER),
            /* REQUIRED   */ _encode_Time(value.revocationDate, __utils.BER)
        ],
        [
            /* IF_ABSENT  */ ((value.crlEntryExtensions === undefined) ? undefined : _encode_Extensions(value.crlEntryExtensions, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_TBSCertList_revokedCertificates_Item(value, elGetter);
}


export class TBSCertList {
    constructor (
        readonly version: asn1.OPTIONAL<Version>,
        readonly signature: AlgorithmIdentifier,
        readonly issuer: Name,
        readonly thisUpdate: Time,
        readonly nextUpdate: asn1.OPTIONAL<Time>,
        readonly revokedCertificates: asn1.OPTIONAL<TBSCertList_revokedCertificates_Item[]>,
        readonly crlExtensions: asn1.OPTIONAL<Extensions>,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}

}
export const _root_component_type_list_1_spec_for_TBSCertList: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("signature", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("issuer", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("thisUpdate", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("nextUpdate", true, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("revokedCertificates", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_TBSCertList: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_TBSCertList: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("crlExtensions", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), 0, 2)
];
let _cached_decoder_for_TBSCertList: __utils.ASN1Decoder<TBSCertList> | null = null;
let _cached_encoder_for_TBSCertList: __utils.ASN1Encoder<TBSCertList> | null = null;
export function _decode_TBSCertList (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TBSCertList) { _cached_decoder_for_TBSCertList = function (el: asn1.ASN1Element): TBSCertList {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<Version>;
    let signature!: AlgorithmIdentifier;
    let issuer!: Name;
    let thisUpdate!: Time;
    let nextUpdate: asn1.OPTIONAL<Time>;
    let revokedCertificates: asn1.OPTIONAL<TBSCertList_revokedCertificates_Item[]>;
    let crlExtensions: asn1.OPTIONAL<Extensions>; // Only present in version 2 and higher.
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = _decode_Version(_el); },
        "signature": (_el: asn1.ASN1Element): void => { signature = _decode_AlgorithmIdentifier(_el); },
        "issuer": (_el: asn1.ASN1Element): void => { issuer = _decode_Name(_el); },
        "thisUpdate": (_el: asn1.ASN1Element): void => { thisUpdate = _decode_Time(_el); },
        "nextUpdate": (_el: asn1.ASN1Element): void => { nextUpdate = _decode_Time(_el); },
        "revokedCertificates": (_el: asn1.ASN1Element): void => { revokedCertificates = __utils._decodeSequenceOf<TBSCertList_revokedCertificates_Item>(() => _decode_TBSCertList_revokedCertificates_Item)(_el); },
        "crlExtensions": (_el: asn1.ASN1Element): void => { crlExtensions = __utils._decode_explicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TBSCertList,
        _extension_additions_list_spec_for_TBSCertList,
        _root_component_type_list_2_spec_for_TBSCertList,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TBSCertList( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        signature,
        issuer,
        thisUpdate,
        nextUpdate,
        revokedCertificates,
        crlExtensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TBSCertList(el);
}
export function _encode_TBSCertList (value: TBSCertList, elGetter: __utils.ASN1Encoder<TBSCertList>) {
    if (!_cached_encoder_for_TBSCertList) { _cached_encoder_for_TBSCertList = function (value: TBSCertList, elGetter: __utils.ASN1Encoder<TBSCertList>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.version === undefined) ? undefined : _encode_Version(value.version, __utils.BER)),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.signature, __utils.BER),
            /* REQUIRED   */ _encode_Name(value.issuer, __utils.BER),
            /* REQUIRED   */ _encode_Time(value.thisUpdate, __utils.BER),
            /* IF_ABSENT  */ ((value.nextUpdate === undefined) ? undefined : _encode_Time(value.nextUpdate, __utils.BER)),
            /* IF_ABSENT  */ ((value.revokedCertificates === undefined) ? undefined : __utils._encodeSequenceOf<TBSCertList_revokedCertificates_Item>(() => _encode_TBSCertList_revokedCertificates_Item, __utils.BER)(value.revokedCertificates, __utils.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.crlExtensions === undefined) ? undefined : __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Extensions, __utils.BER)(value.crlExtensions, __utils.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_TBSCertList(value, elGetter);
}


export type CertificateList = SIGNED<TBSCertList>; // DefinedType
let _cached_decoder_for_CertificateList: __utils.ASN1Decoder<CertificateList> | null = null;
let _cached_encoder_for_CertificateList: __utils.ASN1Encoder<CertificateList> | null = null;
export function _decode_CertificateList (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificateList) { _cached_decoder_for_CertificateList = _get_decoder_for_SIGNED<TBSCertList>(_decode_TBSCertList); }
    return _cached_decoder_for_CertificateList(el);
}
export function _encode_CertificateList (value: CertificateList, elGetter: __utils.ASN1Encoder<CertificateList>) {
    if (!_cached_encoder_for_CertificateList) { _cached_encoder_for_CertificateList = _get_encoder_for_SIGNED<TBSCertList>(_encode_TBSCertList); }
    return _cached_encoder_for_CertificateList(value, elGetter);
}


// TODO: ObjectSetAssignment: SignatureAlgorithms

// TODO: ObjectSetAssignment: PublicKeyAlgorithms

export const ub_title: asn1.INTEGER = 64;

export const ub_serial_number: asn1.INTEGER = 64;

export const ub_pseudonym: asn1.INTEGER = 128;

export const ub_emailaddress_length: asn1.INTEGER = 255;

/* END_MODULE PKIX1Explicit-2009 */
