
/*
    BEGIN_MODULE PKIX1Implicit-2009
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-pkix1-implicit-02
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
    _decode_AttributeSet,
    _encode_AttributeSet
} from "./PKIX-CommonTypes-2009";
export {
    EXTENSION,
    ATTRIBUTE,
    AttributeSet,
    _decode_AttributeSet,
    _encode_AttributeSet
} from "./PKIX-CommonTypes-2009";

import * as PKIX1Explicit_2009 from "./PKIX1Explicit-2009";
import {
    id_pe,
    id_kp,
    id_qt_unotice,
    id_qt_cps,
    ORAddress,
    Name,
    RelativeDistinguishedName,
    CertificateSerialNumber,
    SupportedAttributes,
    DirectoryString,
    _decode_ORAddress,
    _encode_ORAddress,
    _decode_Name,
    _encode_Name,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_DirectoryString,
    _encode_DirectoryString
} from "./PKIX1Explicit-2009";
export {
    id_pe,
    id_kp,
    id_qt_unotice,
    id_qt_cps,
    ORAddress,
    Name,
    RelativeDistinguishedName,
    CertificateSerialNumber,
    SupportedAttributes,
    DirectoryString,
    _decode_ORAddress,
    _encode_ORAddress,
    _decode_Name,
    _encode_Name,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_DirectoryString,
    _encode_DirectoryString
} from "./PKIX1Explicit-2009";


// TODO: ObjectSetAssignment: CertExtensions

// TODO: ObjectSetAssignment: CrlExtensions

// TODO: ObjectSetAssignment: CrlEntryExtensions

export const id_ce: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* joint-iso-ccitt */ 2,
    /* ds */ 5,
    29,
]);

// TODO: ObjectAssignment: ext-AuthorityKeyIdentifier

export const id_ce_authorityKeyIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    35,
], id_ce);

export type KeyIdentifier = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_KeyIdentifier: __utils.ASN1Decoder<KeyIdentifier> | null = null;
let _cached_encoder_for_KeyIdentifier: __utils.ASN1Encoder<KeyIdentifier> | null = null;
export function _decode_KeyIdentifier (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyIdentifier) { _cached_decoder_for_KeyIdentifier = __utils._decodeOctetString; }
    return _cached_decoder_for_KeyIdentifier(el);
}
export function _encode_KeyIdentifier (value: KeyIdentifier, elGetter: __utils.ASN1Encoder<KeyIdentifier>) {
    if (!_cached_encoder_for_KeyIdentifier) { _cached_encoder_for_KeyIdentifier = __utils._encodeOctetString; }
    return _cached_encoder_for_KeyIdentifier(value, elGetter);
}


// TODO: ObjectClassAssignment: OTHER-NAME

export const ubMax: asn1.INTEGER = 32768;

export class EDIPartyName {
    constructor (
        readonly nameAssigner: asn1.OPTIONAL<DirectoryString>,
        readonly partyName: DirectoryString
    ) {}

}
export const _root_component_type_list_1_spec_for_EDIPartyName: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("nameAssigner", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("partyName", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_EDIPartyName: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_EDIPartyName: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_EDIPartyName: __utils.ASN1Decoder<EDIPartyName> | null = null;
let _cached_encoder_for_EDIPartyName: __utils.ASN1Encoder<EDIPartyName> | null = null;
export function _decode_EDIPartyName (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EDIPartyName) { _cached_decoder_for_EDIPartyName = function (el: asn1.ASN1Element): EDIPartyName {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let nameAssigner: asn1.OPTIONAL<DirectoryString>;
    let partyName!: DirectoryString;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "nameAssigner": (_el: asn1.ASN1Element): void => { nameAssigner = __utils._decode_implicit<DirectoryString>(() => _decode_DirectoryString)(_el); },
        "partyName": (_el: asn1.ASN1Element): void => { partyName = __utils._decode_implicit<DirectoryString>(() => _decode_DirectoryString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EDIPartyName,
        _extension_additions_list_spec_for_EDIPartyName,
        _root_component_type_list_2_spec_for_EDIPartyName,
        undefined,
    );
    return new EDIPartyName( /* SEQUENCE_CONSTRUCTOR_CALL */
        nameAssigner,
        partyName
    );
}; }
    return _cached_decoder_for_EDIPartyName(el);
}
export function _encode_EDIPartyName (value: EDIPartyName, elGetter: __utils.ASN1Encoder<EDIPartyName>) {
    if (!_cached_encoder_for_EDIPartyName) { _cached_encoder_for_EDIPartyName = function (value: EDIPartyName, elGetter: __utils.ASN1Encoder<EDIPartyName>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.nameAssigner === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_DirectoryString, __utils.BER)(value.nameAssigner, __utils.BER)),
            /* REQUIRED   */ __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_DirectoryString, __utils.BER)(value.partyName, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_EDIPartyName(value, elGetter);
}


export type GeneralName =
    { otherName: asn1.INSTANCE_OF } /* CHOICE_ALT_ROOT */
    | { rfc822Name: asn1.IA5String } /* CHOICE_ALT_ROOT */
    | { dNSName: asn1.IA5String } /* CHOICE_ALT_ROOT */
    | { x400Address: ORAddress } /* CHOICE_ALT_ROOT */
    | { directoryName: Name } /* CHOICE_ALT_ROOT */
    | { ediPartyName: EDIPartyName } /* CHOICE_ALT_ROOT */
    | { uniformResourceIdentifier: asn1.IA5String } /* CHOICE_ALT_ROOT */
    | { iPAddress: asn1.OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { registeredID: asn1.OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_GeneralName: __utils.ASN1Decoder<GeneralName> | null = null;
let _cached_encoder_for_GeneralName: __utils.ASN1Encoder<GeneralName> | null = null;
export function _decode_GeneralName (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_GeneralName) { _cached_decoder_for_GeneralName = __utils._decode_inextensible_choice<GeneralName>({
    "CONTEXT 0": [ "otherName", __utils._decode_implicit<asn1.INSTANCE_OF>(() => __utils._decodeInstanceOf) ],
    "CONTEXT 1": [ "rfc822Name", __utils._decode_implicit<asn1.IA5String>(() => __utils._decodeIA5String) ],
    "CONTEXT 2": [ "dNSName", __utils._decode_implicit<asn1.IA5String>(() => __utils._decodeIA5String) ],
    "CONTEXT 3": [ "x400Address", __utils._decode_implicit<ORAddress>(() => _decode_ORAddress) ],
    "CONTEXT 4": [ "directoryName", __utils._decode_implicit<Name>(() => _decode_Name) ],
    "CONTEXT 5": [ "ediPartyName", __utils._decode_implicit<EDIPartyName>(() => _decode_EDIPartyName) ],
    "CONTEXT 6": [ "uniformResourceIdentifier", __utils._decode_implicit<asn1.IA5String>(() => __utils._decodeIA5String) ],
    "CONTEXT 7": [ "iPAddress", __utils._decode_implicit<asn1.OCTET_STRING>(() => __utils._decodeOctetString) ],
    "CONTEXT 8": [ "registeredID", __utils._decode_implicit<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier) ]
}); }
    return _cached_decoder_for_GeneralName(el);
}
export function _encode_GeneralName (value: GeneralName, elGetter: __utils.ASN1Encoder<GeneralName>) {
    if (!_cached_encoder_for_GeneralName) { _cached_encoder_for_GeneralName = __utils._encode_choice<GeneralName>({
    "otherName": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeInstanceOf, __utils.BER),
    "rfc822Name": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeIA5String, __utils.BER),
    "dNSName": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeIA5String, __utils.BER),
    "x400Address": __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_ORAddress, __utils.BER),
    "directoryName": __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => _encode_Name, __utils.BER),
    "ediPartyName": __utils._encode_implicit(asn1.ASN1TagClass.context, 5, () => _encode_EDIPartyName, __utils.BER),
    "uniformResourceIdentifier": __utils._encode_implicit(asn1.ASN1TagClass.context, 6, () => __utils._encodeIA5String, __utils.BER),
    "iPAddress": __utils._encode_implicit(asn1.ASN1TagClass.context, 7, () => __utils._encodeOctetString, __utils.BER),
    "registeredID": __utils._encode_implicit(asn1.ASN1TagClass.context, 8, () => __utils._encodeObjectIdentifier, __utils.BER),
}, __utils.BER); }
    return _cached_encoder_for_GeneralName(value, elGetter);
}


export type GeneralNames = GeneralName[]; // SequenceOfType
let _cached_decoder_for_GeneralNames: __utils.ASN1Decoder<GeneralNames> | null = null;
let _cached_encoder_for_GeneralNames: __utils.ASN1Encoder<GeneralNames> | null = null;
export function _decode_GeneralNames (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_GeneralNames) { _cached_decoder_for_GeneralNames = __utils._decodeSequenceOf<GeneralName>(() => _decode_GeneralName); }
    return _cached_decoder_for_GeneralNames(el);
}
export function _encode_GeneralNames (value: GeneralNames, elGetter: __utils.ASN1Encoder<GeneralNames>) {
    if (!_cached_encoder_for_GeneralNames) { _cached_encoder_for_GeneralNames = __utils._encodeSequenceOf<GeneralName>(() => _encode_GeneralName, __utils.BER); }
    return _cached_encoder_for_GeneralNames(value, elGetter);
}


export class AuthorityKeyIdentifier {
    constructor (
        readonly keyIdentifier: asn1.OPTIONAL<KeyIdentifier>,
        readonly authorityCertIssuer: asn1.OPTIONAL<GeneralNames>,
        readonly authorityCertSerialNumber: asn1.OPTIONAL<CertificateSerialNumber>
    ) {}

}
export const _root_component_type_list_1_spec_for_AuthorityKeyIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("keyIdentifier", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("authorityCertIssuer", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("authorityCertSerialNumber", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AuthorityKeyIdentifier: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_AuthorityKeyIdentifier: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_AuthorityKeyIdentifier: __utils.ASN1Decoder<AuthorityKeyIdentifier> | null = null;
let _cached_encoder_for_AuthorityKeyIdentifier: __utils.ASN1Encoder<AuthorityKeyIdentifier> | null = null;
export function _decode_AuthorityKeyIdentifier (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AuthorityKeyIdentifier) { _cached_decoder_for_AuthorityKeyIdentifier = function (el: asn1.ASN1Element): AuthorityKeyIdentifier {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let keyIdentifier: asn1.OPTIONAL<KeyIdentifier>;
    let authorityCertIssuer: asn1.OPTIONAL<GeneralNames>;
    let authorityCertSerialNumber: asn1.OPTIONAL<CertificateSerialNumber>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "keyIdentifier": (_el: asn1.ASN1Element): void => { keyIdentifier = __utils._decode_implicit<KeyIdentifier>(() => _decode_KeyIdentifier)(_el); },
        "authorityCertIssuer": (_el: asn1.ASN1Element): void => { authorityCertIssuer = __utils._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); },
        "authorityCertSerialNumber": (_el: asn1.ASN1Element): void => { authorityCertSerialNumber = __utils._decode_implicit<CertificateSerialNumber>(() => _decode_CertificateSerialNumber)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuthorityKeyIdentifier,
        _extension_additions_list_spec_for_AuthorityKeyIdentifier,
        _root_component_type_list_2_spec_for_AuthorityKeyIdentifier,
        undefined,
    );
    return new AuthorityKeyIdentifier( /* SEQUENCE_CONSTRUCTOR_CALL */
        keyIdentifier,
        authorityCertIssuer,
        authorityCertSerialNumber
    );
}; }
    return _cached_decoder_for_AuthorityKeyIdentifier(el);
}
export function _encode_AuthorityKeyIdentifier (value: AuthorityKeyIdentifier, elGetter: __utils.ASN1Encoder<AuthorityKeyIdentifier>) {
    if (!_cached_encoder_for_AuthorityKeyIdentifier) { _cached_encoder_for_AuthorityKeyIdentifier = function (value: AuthorityKeyIdentifier, elGetter: __utils.ASN1Encoder<AuthorityKeyIdentifier>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.keyIdentifier === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_KeyIdentifier, __utils.BER)(value.keyIdentifier, __utils.BER)),
            /* IF_ABSENT  */ ((value.authorityCertIssuer === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_GeneralNames, __utils.BER)(value.authorityCertIssuer, __utils.BER)),
            /* IF_ABSENT  */ ((value.authorityCertSerialNumber === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_CertificateSerialNumber, __utils.BER)(value.authorityCertSerialNumber, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_AuthorityKeyIdentifier(value, elGetter);
}


// TODO: ObjectAssignment: ext-SubjectKeyIdentifier

export const id_ce_subjectKeyIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    14,
], id_ce);

// TODO: ObjectAssignment: ext-KeyUsage

export const id_ce_keyUsage: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    15,
], id_ce);

export type KeyUsage = asn1.BIT_STRING;
export const KeyUsage_digitalSignature: number = 0; /* LONG_NAMED_BIT */
export const KeyUsage_nonRepudiation: number = 1; /* LONG_NAMED_BIT */
export const KeyUsage_keyEncipherment: number = 2; /* LONG_NAMED_BIT */
export const KeyUsage_dataEncipherment: number = 3; /* LONG_NAMED_BIT */
export const KeyUsage_keyAgreement: number = 4; /* LONG_NAMED_BIT */
export const KeyUsage_keyCertSign: number = 5; /* LONG_NAMED_BIT */
export const KeyUsage_cRLSign: number = 6; /* LONG_NAMED_BIT */
export const KeyUsage_encipherOnly: number = 7; /* LONG_NAMED_BIT */
export const KeyUsage_decipherOnly: number = 8; /* LONG_NAMED_BIT */
let _cached_decoder_for_KeyUsage: __utils.ASN1Decoder<KeyUsage> | null = null;
let _cached_encoder_for_KeyUsage: __utils.ASN1Encoder<KeyUsage> | null = null;
export function _decode_KeyUsage (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyUsage) { _cached_decoder_for_KeyUsage = __utils._decodeBitString; }
    return _cached_decoder_for_KeyUsage(el);
}
export function _encode_KeyUsage (value: KeyUsage, elGetter: __utils.ASN1Encoder<KeyUsage>) {
    if (!_cached_encoder_for_KeyUsage) { _cached_encoder_for_KeyUsage = __utils._encodeBitString; }
    return _cached_encoder_for_KeyUsage(value, elGetter);
}


// TODO: ObjectAssignment: ext-PrivateKeyUsagePeriod

export const id_ce_privateKeyUsagePeriod: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    16,
], id_ce);

export class PrivateKeyUsagePeriod {
    constructor (
        readonly notBefore: asn1.OPTIONAL<asn1.GeneralizedTime>,
        readonly notAfter: asn1.OPTIONAL<asn1.GeneralizedTime>
    ) {}

}
export const _root_component_type_list_1_spec_for_PrivateKeyUsagePeriod: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("notBefore", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("notAfter", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PrivateKeyUsagePeriod: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_PrivateKeyUsagePeriod: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_PrivateKeyUsagePeriod: __utils.ASN1Decoder<PrivateKeyUsagePeriod> | null = null;
let _cached_encoder_for_PrivateKeyUsagePeriod: __utils.ASN1Encoder<PrivateKeyUsagePeriod> | null = null;
export function _decode_PrivateKeyUsagePeriod (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PrivateKeyUsagePeriod) { _cached_decoder_for_PrivateKeyUsagePeriod = function (el: asn1.ASN1Element): PrivateKeyUsagePeriod {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let notBefore: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let notAfter: asn1.OPTIONAL<asn1.GeneralizedTime>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "notBefore": (_el: asn1.ASN1Element): void => { notBefore = __utils._decode_implicit<asn1.GeneralizedTime>(() => __utils._decodeGeneralizedTime)(_el); },
        "notAfter": (_el: asn1.ASN1Element): void => { notAfter = __utils._decode_implicit<asn1.GeneralizedTime>(() => __utils._decodeGeneralizedTime)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrivateKeyUsagePeriod,
        _extension_additions_list_spec_for_PrivateKeyUsagePeriod,
        _root_component_type_list_2_spec_for_PrivateKeyUsagePeriod,
        undefined,
    );
    return new PrivateKeyUsagePeriod( /* SEQUENCE_CONSTRUCTOR_CALL */
        notBefore,
        notAfter
    );
}; }
    return _cached_decoder_for_PrivateKeyUsagePeriod(el);
}
export function _encode_PrivateKeyUsagePeriod (value: PrivateKeyUsagePeriod, elGetter: __utils.ASN1Encoder<PrivateKeyUsagePeriod>) {
    if (!_cached_encoder_for_PrivateKeyUsagePeriod) { _cached_encoder_for_PrivateKeyUsagePeriod = function (value: PrivateKeyUsagePeriod, elGetter: __utils.ASN1Encoder<PrivateKeyUsagePeriod>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.notBefore === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeGeneralizedTime, __utils.BER)(value.notBefore, __utils.BER)),
            /* IF_ABSENT  */ ((value.notAfter === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeGeneralizedTime, __utils.BER)(value.notAfter, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_PrivateKeyUsagePeriod(value, elGetter);
}


// TODO: ObjectAssignment: ext-CertificatePolicies

export const id_ce_certificatePolicies: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    32,
], id_ce);

export type CertPolicyId = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_CertPolicyId: __utils.ASN1Decoder<CertPolicyId> | null = null;
let _cached_encoder_for_CertPolicyId: __utils.ASN1Encoder<CertPolicyId> | null = null;
export function _decode_CertPolicyId (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertPolicyId) { _cached_decoder_for_CertPolicyId = __utils._decodeObjectIdentifier; }
    return _cached_decoder_for_CertPolicyId(el);
}
export function _encode_CertPolicyId (value: CertPolicyId, elGetter: __utils.ASN1Encoder<CertPolicyId>) {
    if (!_cached_encoder_for_CertPolicyId) { _cached_encoder_for_CertPolicyId = __utils._encodeObjectIdentifier; }
    return _cached_encoder_for_CertPolicyId(value, elGetter);
}


export class PolicyQualifierInfo {
    constructor (
        readonly policyQualifierId: asn1.OBJECT_IDENTIFIER,
        readonly qualifier: asn1.ASN1Element
    ) {}

}
export const _root_component_type_list_1_spec_for_PolicyQualifierInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("policyQualifierId", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("qualifier", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PolicyQualifierInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_PolicyQualifierInfo: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_PolicyQualifierInfo: __utils.ASN1Decoder<PolicyQualifierInfo> | null = null;
let _cached_encoder_for_PolicyQualifierInfo: __utils.ASN1Encoder<PolicyQualifierInfo> | null = null;
export function _decode_PolicyQualifierInfo (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PolicyQualifierInfo) { _cached_decoder_for_PolicyQualifierInfo = function (el: asn1.ASN1Element): PolicyQualifierInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("PolicyQualifierInfo contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "policyQualifierId";
    sequence[1].name = "qualifier";
    let policyQualifierId!: asn1.OBJECT_IDENTIFIER;
    let qualifier!: asn1.ASN1Element;
    policyQualifierId = __utils._decodeObjectIdentifier(sequence[0]);
    qualifier = __utils._decodeAny(sequence[1]);
    // TODO: Validate values.
    return new PolicyQualifierInfo(
        policyQualifierId,
        qualifier,

    );
}; }
    return _cached_decoder_for_PolicyQualifierInfo(el);
}
export function _encode_PolicyQualifierInfo (value: PolicyQualifierInfo, elGetter: __utils.ASN1Encoder<PolicyQualifierInfo>) {
    if (!_cached_encoder_for_PolicyQualifierInfo) { _cached_encoder_for_PolicyQualifierInfo = function (value: PolicyQualifierInfo, elGetter: __utils.ASN1Encoder<PolicyQualifierInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.policyQualifierId, __utils.BER),
            /* REQUIRED   */ __utils._encodeAny(value.qualifier, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_PolicyQualifierInfo(value, elGetter);
}


export class PolicyInformation {
    constructor (
        readonly policyIdentifier: CertPolicyId,
        readonly policyQualifiers: asn1.OPTIONAL<PolicyQualifierInfo[]>
    ) {}

}
export const _root_component_type_list_1_spec_for_PolicyInformation: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("policyIdentifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("policyQualifiers", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PolicyInformation: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_PolicyInformation: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_PolicyInformation: __utils.ASN1Decoder<PolicyInformation> | null = null;
let _cached_encoder_for_PolicyInformation: __utils.ASN1Encoder<PolicyInformation> | null = null;
export function _decode_PolicyInformation (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PolicyInformation) { _cached_decoder_for_PolicyInformation = function (el: asn1.ASN1Element): PolicyInformation {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let policyIdentifier!: CertPolicyId;
    let policyQualifiers: asn1.OPTIONAL<PolicyQualifierInfo[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "policyIdentifier": (_el: asn1.ASN1Element): void => { policyIdentifier = _decode_CertPolicyId(_el); },
        "policyQualifiers": (_el: asn1.ASN1Element): void => { policyQualifiers = __utils._decodeSequenceOf<PolicyQualifierInfo>(() => _decode_PolicyQualifierInfo)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PolicyInformation,
        _extension_additions_list_spec_for_PolicyInformation,
        _root_component_type_list_2_spec_for_PolicyInformation,
        undefined,
    );
    return new PolicyInformation( /* SEQUENCE_CONSTRUCTOR_CALL */
        policyIdentifier,
        policyQualifiers
    );
}; }
    return _cached_decoder_for_PolicyInformation(el);
}
export function _encode_PolicyInformation (value: PolicyInformation, elGetter: __utils.ASN1Encoder<PolicyInformation>) {
    if (!_cached_encoder_for_PolicyInformation) { _cached_encoder_for_PolicyInformation = function (value: PolicyInformation, elGetter: __utils.ASN1Encoder<PolicyInformation>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CertPolicyId(value.policyIdentifier, __utils.BER),
            /* IF_ABSENT  */ ((value.policyQualifiers === undefined) ? undefined : __utils._encodeSequenceOf<PolicyQualifierInfo>(() => _encode_PolicyQualifierInfo, __utils.BER)(value.policyQualifiers, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_PolicyInformation(value, elGetter);
}


export type CertificatePolicies = PolicyInformation[]; // SequenceOfType
let _cached_decoder_for_CertificatePolicies: __utils.ASN1Decoder<CertificatePolicies> | null = null;
let _cached_encoder_for_CertificatePolicies: __utils.ASN1Encoder<CertificatePolicies> | null = null;
export function _decode_CertificatePolicies (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificatePolicies) { _cached_decoder_for_CertificatePolicies = __utils._decodeSequenceOf<PolicyInformation>(() => _decode_PolicyInformation); }
    return _cached_decoder_for_CertificatePolicies(el);
}
export function _encode_CertificatePolicies (value: CertificatePolicies, elGetter: __utils.ASN1Encoder<CertificatePolicies>) {
    if (!_cached_encoder_for_CertificatePolicies) { _cached_encoder_for_CertificatePolicies = __utils._encodeSequenceOf<PolicyInformation>(() => _encode_PolicyInformation, __utils.BER); }
    return _cached_encoder_for_CertificatePolicies(value, elGetter);
}


// TODO: ObjectSetAssignment: PolicyQualifierId

// TODO: ObjectClassAssignment: CERT-POLICY-QUALIFIER

// TODO: ObjectAssignment: pqid-cps

// TODO: ObjectAssignment: pqid-unotice

export type CPSuri = asn1.IA5String; // IA5String
let _cached_decoder_for_CPSuri: __utils.ASN1Decoder<CPSuri> | null = null;
let _cached_encoder_for_CPSuri: __utils.ASN1Encoder<CPSuri> | null = null;
export function _decode_CPSuri (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CPSuri) { _cached_decoder_for_CPSuri = __utils._decodeIA5String; }
    return _cached_decoder_for_CPSuri(el);
}
export function _encode_CPSuri (value: CPSuri, elGetter: __utils.ASN1Encoder<CPSuri>) {
    if (!_cached_encoder_for_CPSuri) { _cached_encoder_for_CPSuri = __utils._encodeIA5String; }
    return _cached_encoder_for_CPSuri(value, elGetter);
}


export type DisplayText =
    { ia5String: asn1.IA5String } /* CHOICE_ALT_ROOT */
    | { visibleString: asn1.VisibleString } /* CHOICE_ALT_ROOT */
    | { bmpString: asn1.BMPString } /* CHOICE_ALT_ROOT */
    | { utf8String: asn1.UTF8String } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_DisplayText: __utils.ASN1Decoder<DisplayText> | null = null;
let _cached_encoder_for_DisplayText: __utils.ASN1Encoder<DisplayText> | null = null;
export function _decode_DisplayText (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DisplayText) { _cached_decoder_for_DisplayText = __utils._decode_inextensible_choice<DisplayText>({
    "UNIVERSAL 22": [ "ia5String", __utils._decodeIA5String ],
    "UNIVERSAL 26": [ "visibleString", __utils._decodeVisibleString ],
    "UNIVERSAL 30": [ "bmpString", __utils._decodeBMPString ],
    "UNIVERSAL 12": [ "utf8String", __utils._decodeUTF8String ]
}); }
    return _cached_decoder_for_DisplayText(el);
}
export function _encode_DisplayText (value: DisplayText, elGetter: __utils.ASN1Encoder<DisplayText>) {
    if (!_cached_encoder_for_DisplayText) { _cached_encoder_for_DisplayText = __utils._encode_choice<DisplayText>({
    "ia5String": __utils._encodeIA5String,
    "visibleString": __utils._encodeVisibleString,
    "bmpString": __utils._encodeBMPString,
    "utf8String": __utils._encodeUTF8String,
}, __utils.BER); }
    return _cached_encoder_for_DisplayText(value, elGetter);
}


export class NoticeReference {
    constructor (
        readonly organization: DisplayText,
        readonly noticeNumbers: asn1.INTEGER[]
    ) {}

}
export const _root_component_type_list_1_spec_for_NoticeReference: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("organization", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("noticeNumbers", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_NoticeReference: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_NoticeReference: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_NoticeReference: __utils.ASN1Decoder<NoticeReference> | null = null;
let _cached_encoder_for_NoticeReference: __utils.ASN1Encoder<NoticeReference> | null = null;
export function _decode_NoticeReference (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NoticeReference) { _cached_decoder_for_NoticeReference = function (el: asn1.ASN1Element): NoticeReference {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("NoticeReference contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "organization";
    sequence[1].name = "noticeNumbers";
    let organization!: DisplayText;
    let noticeNumbers!: asn1.INTEGER[];
    organization = _decode_DisplayText(sequence[0]);
    noticeNumbers = __utils._decodeSequenceOf<asn1.INTEGER>(() => __utils._decodeInteger)(sequence[1]);
    // TODO: Validate values.
    return new NoticeReference(
        organization,
        noticeNumbers,

    );
}; }
    return _cached_decoder_for_NoticeReference(el);
}
export function _encode_NoticeReference (value: NoticeReference, elGetter: __utils.ASN1Encoder<NoticeReference>) {
    if (!_cached_encoder_for_NoticeReference) { _cached_encoder_for_NoticeReference = function (value: NoticeReference, elGetter: __utils.ASN1Encoder<NoticeReference>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DisplayText(value.organization, __utils.BER),
            /* REQUIRED   */ __utils._encodeSequenceOf<asn1.INTEGER>(() => __utils._encodeInteger, __utils.BER)(value.noticeNumbers, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_NoticeReference(value, elGetter);
}


export class UserNotice {
    constructor (
        readonly noticeRef: asn1.OPTIONAL<NoticeReference>,
        readonly explicitText: asn1.OPTIONAL<DisplayText>
    ) {}

}
export const _root_component_type_list_1_spec_for_UserNotice: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("noticeRef", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("explicitText", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_UserNotice: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_UserNotice: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_UserNotice: __utils.ASN1Decoder<UserNotice> | null = null;
let _cached_encoder_for_UserNotice: __utils.ASN1Encoder<UserNotice> | null = null;
export function _decode_UserNotice (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UserNotice) { _cached_decoder_for_UserNotice = function (el: asn1.ASN1Element): UserNotice {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let noticeRef: asn1.OPTIONAL<NoticeReference>;
    let explicitText: asn1.OPTIONAL<DisplayText>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "noticeRef": (_el: asn1.ASN1Element): void => { noticeRef = _decode_NoticeReference(_el); },
        "explicitText": (_el: asn1.ASN1Element): void => { explicitText = _decode_DisplayText(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UserNotice,
        _extension_additions_list_spec_for_UserNotice,
        _root_component_type_list_2_spec_for_UserNotice,
        undefined,
    );
    return new UserNotice( /* SEQUENCE_CONSTRUCTOR_CALL */
        noticeRef,
        explicitText
    );
}; }
    return _cached_decoder_for_UserNotice(el);
}
export function _encode_UserNotice (value: UserNotice, elGetter: __utils.ASN1Encoder<UserNotice>) {
    if (!_cached_encoder_for_UserNotice) { _cached_encoder_for_UserNotice = function (value: UserNotice, elGetter: __utils.ASN1Encoder<UserNotice>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.noticeRef === undefined) ? undefined : _encode_NoticeReference(value.noticeRef, __utils.BER)),
            /* IF_ABSENT  */ ((value.explicitText === undefined) ? undefined : _encode_DisplayText(value.explicitText, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_UserNotice(value, elGetter);
}


// TODO: ObjectAssignment: ext-PolicyMappings

export const id_ce_policyMappings: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    33,
], id_ce);

export class PolicyMappings_Item {
    constructor (
        readonly issuerDomainPolicy: CertPolicyId,
        readonly subjectDomainPolicy: CertPolicyId
    ) {}

}
export const _root_component_type_list_1_spec_for_PolicyMappings_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("issuerDomainPolicy", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("subjectDomainPolicy", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PolicyMappings_Item: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_PolicyMappings_Item: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_PolicyMappings_Item: __utils.ASN1Decoder<PolicyMappings_Item> | null = null;
let _cached_encoder_for_PolicyMappings_Item: __utils.ASN1Encoder<PolicyMappings_Item> | null = null;
export function _decode_PolicyMappings_Item (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PolicyMappings_Item) { _cached_decoder_for_PolicyMappings_Item = function (el: asn1.ASN1Element): PolicyMappings_Item {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("PolicyMappings-Item contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "issuerDomainPolicy";
    sequence[1].name = "subjectDomainPolicy";
    let issuerDomainPolicy!: CertPolicyId;
    let subjectDomainPolicy!: CertPolicyId;
    issuerDomainPolicy = _decode_CertPolicyId(sequence[0]);
    subjectDomainPolicy = _decode_CertPolicyId(sequence[1]);
    // TODO: Validate values.
    return new PolicyMappings_Item(
        issuerDomainPolicy,
        subjectDomainPolicy,

    );
}; }
    return _cached_decoder_for_PolicyMappings_Item(el);
}
export function _encode_PolicyMappings_Item (value: PolicyMappings_Item, elGetter: __utils.ASN1Encoder<PolicyMappings_Item>) {
    if (!_cached_encoder_for_PolicyMappings_Item) { _cached_encoder_for_PolicyMappings_Item = function (value: PolicyMappings_Item, elGetter: __utils.ASN1Encoder<PolicyMappings_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CertPolicyId(value.issuerDomainPolicy, __utils.BER),
            /* REQUIRED   */ _encode_CertPolicyId(value.subjectDomainPolicy, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_PolicyMappings_Item(value, elGetter);
}


export type PolicyMappings = PolicyMappings_Item[]; // SequenceOfType
let _cached_decoder_for_PolicyMappings: __utils.ASN1Decoder<PolicyMappings> | null = null;
let _cached_encoder_for_PolicyMappings: __utils.ASN1Encoder<PolicyMappings> | null = null;
export function _decode_PolicyMappings (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PolicyMappings) { _cached_decoder_for_PolicyMappings = __utils._decodeSequenceOf<PolicyMappings_Item>(() => _decode_PolicyMappings_Item); }
    return _cached_decoder_for_PolicyMappings(el);
}
export function _encode_PolicyMappings (value: PolicyMappings, elGetter: __utils.ASN1Encoder<PolicyMappings>) {
    if (!_cached_encoder_for_PolicyMappings) { _cached_encoder_for_PolicyMappings = __utils._encodeSequenceOf<PolicyMappings_Item>(() => _encode_PolicyMappings_Item, __utils.BER); }
    return _cached_encoder_for_PolicyMappings(value, elGetter);
}


// TODO: ObjectAssignment: ext-SubjectAltName

export const id_ce_subjectAltName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    17,
], id_ce);

// TODO: ObjectAssignment: ext-IssuerAltName

export const id_ce_issuerAltName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    18,
], id_ce);

// TODO: ObjectAssignment: ext-SubjectDirectoryAttributes

export const id_ce_subjectDirectoryAttributes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
], id_ce);

export type SubjectDirectoryAttributes = AttributeSet[]; // SequenceOfType
let _cached_decoder_for_SubjectDirectoryAttributes: __utils.ASN1Decoder<SubjectDirectoryAttributes> | null = null;
let _cached_encoder_for_SubjectDirectoryAttributes: __utils.ASN1Encoder<SubjectDirectoryAttributes> | null = null;
export function _decode_SubjectDirectoryAttributes (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SubjectDirectoryAttributes) { _cached_decoder_for_SubjectDirectoryAttributes = __utils._decodeSequenceOf<AttributeSet>(() => _decode_AttributeSet); }
    return _cached_decoder_for_SubjectDirectoryAttributes(el);
}
export function _encode_SubjectDirectoryAttributes (value: SubjectDirectoryAttributes, elGetter: __utils.ASN1Encoder<SubjectDirectoryAttributes>) {
    if (!_cached_encoder_for_SubjectDirectoryAttributes) { _cached_encoder_for_SubjectDirectoryAttributes = __utils._encodeSequenceOf<AttributeSet>(() => _encode_AttributeSet, __utils.BER); }
    return _cached_encoder_for_SubjectDirectoryAttributes(value, elGetter);
}


// TODO: ObjectAssignment: ext-BasicConstraints

export const id_ce_basicConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    19,
], id_ce);

export class BasicConstraints {
    constructor (
        readonly cA: asn1.OPTIONAL<asn1.BOOLEAN>,
        readonly pathLenConstraint: asn1.OPTIONAL<asn1.INTEGER>
    ) {}
    public static get _default_value_for_cA () { return false; }
}
export const _root_component_type_list_1_spec_for_BasicConstraints: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("cA", true, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined),
    new __utils.ComponentSpec("pathLenConstraint", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_BasicConstraints: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_BasicConstraints: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_BasicConstraints: __utils.ASN1Decoder<BasicConstraints> | null = null;
let _cached_encoder_for_BasicConstraints: __utils.ASN1Encoder<BasicConstraints> | null = null;
export function _decode_BasicConstraints (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_BasicConstraints) { _cached_decoder_for_BasicConstraints = function (el: asn1.ASN1Element): BasicConstraints {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let cA: asn1.OPTIONAL<asn1.BOOLEAN> = BasicConstraints._default_value_for_cA;
    let pathLenConstraint: asn1.OPTIONAL<asn1.INTEGER>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "cA": (_el: asn1.ASN1Element): void => { cA = __utils._decodeBoolean(_el); },
        "pathLenConstraint": (_el: asn1.ASN1Element): void => { pathLenConstraint = __utils._decodeInteger(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BasicConstraints,
        _extension_additions_list_spec_for_BasicConstraints,
        _root_component_type_list_2_spec_for_BasicConstraints,
        undefined,
    );
    return new BasicConstraints( /* SEQUENCE_CONSTRUCTOR_CALL */
        cA,
        pathLenConstraint
    );
}; }
    return _cached_decoder_for_BasicConstraints(el);
}
export function _encode_BasicConstraints (value: BasicConstraints, elGetter: __utils.ASN1Encoder<BasicConstraints>) {
    if (!_cached_encoder_for_BasicConstraints) { _cached_encoder_for_BasicConstraints = function (value: BasicConstraints, elGetter: __utils.ASN1Encoder<BasicConstraints>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.cA === undefined || __utils.deepEq(value.cA, BasicConstraints._default_value_for_cA) ? undefined : __utils._encodeBoolean(value.cA, __utils.BER)),
            /* IF_ABSENT  */ ((value.pathLenConstraint === undefined) ? undefined : __utils._encodeInteger(value.pathLenConstraint, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_BasicConstraints(value, elGetter);
}


// TODO: ObjectAssignment: ext-NameConstraints

export const id_ce_nameConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    30,
], id_ce);

export type BaseDistance = asn1.INTEGER;
let _cached_decoder_for_BaseDistance: __utils.ASN1Decoder<BaseDistance> | null = null;
let _cached_encoder_for_BaseDistance: __utils.ASN1Encoder<BaseDistance> | null = null;
export function _decode_BaseDistance (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_BaseDistance) { _cached_decoder_for_BaseDistance = __utils._decodeInteger; }
    return _cached_decoder_for_BaseDistance(el);
}
export function _encode_BaseDistance (value: BaseDistance, elGetter: __utils.ASN1Encoder<BaseDistance>) {
    if (!_cached_encoder_for_BaseDistance) { _cached_encoder_for_BaseDistance = __utils._encodeInteger; }
    return _cached_encoder_for_BaseDistance(value, elGetter);
}


export class GeneralSubtree {
    constructor (
        readonly base: GeneralName,
        readonly minimum: asn1.OPTIONAL<BaseDistance>,
        readonly maximum: asn1.OPTIONAL<BaseDistance>
    ) {}
    public static get _default_value_for_minimum () { return 0; }
}
export const _root_component_type_list_1_spec_for_GeneralSubtree: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("base", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("minimum", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("maximum", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_GeneralSubtree: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_GeneralSubtree: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_GeneralSubtree: __utils.ASN1Decoder<GeneralSubtree> | null = null;
let _cached_encoder_for_GeneralSubtree: __utils.ASN1Encoder<GeneralSubtree> | null = null;
export function _decode_GeneralSubtree (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_GeneralSubtree) { _cached_decoder_for_GeneralSubtree = function (el: asn1.ASN1Element): GeneralSubtree {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let base!: GeneralName;
    let minimum: asn1.OPTIONAL<BaseDistance> = GeneralSubtree._default_value_for_minimum;
    let maximum: asn1.OPTIONAL<BaseDistance>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "base": (_el: asn1.ASN1Element): void => { base = _decode_GeneralName(_el); },
        "minimum": (_el: asn1.ASN1Element): void => { minimum = __utils._decode_implicit<BaseDistance>(() => _decode_BaseDistance)(_el); },
        "maximum": (_el: asn1.ASN1Element): void => { maximum = __utils._decode_implicit<BaseDistance>(() => _decode_BaseDistance)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GeneralSubtree,
        _extension_additions_list_spec_for_GeneralSubtree,
        _root_component_type_list_2_spec_for_GeneralSubtree,
        undefined,
    );
    return new GeneralSubtree( /* SEQUENCE_CONSTRUCTOR_CALL */
        base,
        minimum,
        maximum
    );
}; }
    return _cached_decoder_for_GeneralSubtree(el);
}
export function _encode_GeneralSubtree (value: GeneralSubtree, elGetter: __utils.ASN1Encoder<GeneralSubtree>) {
    if (!_cached_encoder_for_GeneralSubtree) { _cached_encoder_for_GeneralSubtree = function (value: GeneralSubtree, elGetter: __utils.ASN1Encoder<GeneralSubtree>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GeneralName(value.base, __utils.BER),
            /* IF_DEFAULT */ (value.minimum === undefined || __utils.deepEq(value.minimum, GeneralSubtree._default_value_for_minimum) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_BaseDistance, __utils.BER)(value.minimum, __utils.BER)),
            /* IF_ABSENT  */ ((value.maximum === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_BaseDistance, __utils.BER)(value.maximum, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_GeneralSubtree(value, elGetter);
}


export type GeneralSubtrees = GeneralSubtree[]; // SequenceOfType
let _cached_decoder_for_GeneralSubtrees: __utils.ASN1Decoder<GeneralSubtrees> | null = null;
let _cached_encoder_for_GeneralSubtrees: __utils.ASN1Encoder<GeneralSubtrees> | null = null;
export function _decode_GeneralSubtrees (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_GeneralSubtrees) { _cached_decoder_for_GeneralSubtrees = __utils._decodeSequenceOf<GeneralSubtree>(() => _decode_GeneralSubtree); }
    return _cached_decoder_for_GeneralSubtrees(el);
}
export function _encode_GeneralSubtrees (value: GeneralSubtrees, elGetter: __utils.ASN1Encoder<GeneralSubtrees>) {
    if (!_cached_encoder_for_GeneralSubtrees) { _cached_encoder_for_GeneralSubtrees = __utils._encodeSequenceOf<GeneralSubtree>(() => _encode_GeneralSubtree, __utils.BER); }
    return _cached_encoder_for_GeneralSubtrees(value, elGetter);
}


export class NameConstraints {
    constructor (
        readonly permittedSubtrees: asn1.OPTIONAL<GeneralSubtrees>,
        readonly excludedSubtrees: asn1.OPTIONAL<GeneralSubtrees>
    ) {}

}
export const _root_component_type_list_1_spec_for_NameConstraints: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("permittedSubtrees", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("excludedSubtrees", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_NameConstraints: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_NameConstraints: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_NameConstraints: __utils.ASN1Decoder<NameConstraints> | null = null;
let _cached_encoder_for_NameConstraints: __utils.ASN1Encoder<NameConstraints> | null = null;
export function _decode_NameConstraints (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NameConstraints) { _cached_decoder_for_NameConstraints = function (el: asn1.ASN1Element): NameConstraints {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let permittedSubtrees: asn1.OPTIONAL<GeneralSubtrees>;
    let excludedSubtrees: asn1.OPTIONAL<GeneralSubtrees>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "permittedSubtrees": (_el: asn1.ASN1Element): void => { permittedSubtrees = __utils._decode_implicit<GeneralSubtrees>(() => _decode_GeneralSubtrees)(_el); },
        "excludedSubtrees": (_el: asn1.ASN1Element): void => { excludedSubtrees = __utils._decode_implicit<GeneralSubtrees>(() => _decode_GeneralSubtrees)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NameConstraints,
        _extension_additions_list_spec_for_NameConstraints,
        _root_component_type_list_2_spec_for_NameConstraints,
        undefined,
    );
    return new NameConstraints( /* SEQUENCE_CONSTRUCTOR_CALL */
        permittedSubtrees,
        excludedSubtrees
    );
}; }
    return _cached_decoder_for_NameConstraints(el);
}
export function _encode_NameConstraints (value: NameConstraints, elGetter: __utils.ASN1Encoder<NameConstraints>) {
    if (!_cached_encoder_for_NameConstraints) { _cached_encoder_for_NameConstraints = function (value: NameConstraints, elGetter: __utils.ASN1Encoder<NameConstraints>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.permittedSubtrees === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_GeneralSubtrees, __utils.BER)(value.permittedSubtrees, __utils.BER)),
            /* IF_ABSENT  */ ((value.excludedSubtrees === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_GeneralSubtrees, __utils.BER)(value.excludedSubtrees, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_NameConstraints(value, elGetter);
}


// TODO: ObjectAssignment: ext-PolicyConstraints

export const id_ce_policyConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    36,
], id_ce);

export type SkipCerts = asn1.INTEGER;
let _cached_decoder_for_SkipCerts: __utils.ASN1Decoder<SkipCerts> | null = null;
let _cached_encoder_for_SkipCerts: __utils.ASN1Encoder<SkipCerts> | null = null;
export function _decode_SkipCerts (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SkipCerts) { _cached_decoder_for_SkipCerts = __utils._decodeInteger; }
    return _cached_decoder_for_SkipCerts(el);
}
export function _encode_SkipCerts (value: SkipCerts, elGetter: __utils.ASN1Encoder<SkipCerts>) {
    if (!_cached_encoder_for_SkipCerts) { _cached_encoder_for_SkipCerts = __utils._encodeInteger; }
    return _cached_encoder_for_SkipCerts(value, elGetter);
}


export class PolicyConstraints {
    constructor (
        readonly requireExplicitPolicy: asn1.OPTIONAL<SkipCerts>,
        readonly inhibitPolicyMapping: asn1.OPTIONAL<SkipCerts>
    ) {}

}
export const _root_component_type_list_1_spec_for_PolicyConstraints: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("requireExplicitPolicy", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("inhibitPolicyMapping", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PolicyConstraints: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_PolicyConstraints: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_PolicyConstraints: __utils.ASN1Decoder<PolicyConstraints> | null = null;
let _cached_encoder_for_PolicyConstraints: __utils.ASN1Encoder<PolicyConstraints> | null = null;
export function _decode_PolicyConstraints (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PolicyConstraints) { _cached_decoder_for_PolicyConstraints = function (el: asn1.ASN1Element): PolicyConstraints {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let requireExplicitPolicy: asn1.OPTIONAL<SkipCerts>;
    let inhibitPolicyMapping: asn1.OPTIONAL<SkipCerts>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "requireExplicitPolicy": (_el: asn1.ASN1Element): void => { requireExplicitPolicy = __utils._decode_implicit<SkipCerts>(() => _decode_SkipCerts)(_el); },
        "inhibitPolicyMapping": (_el: asn1.ASN1Element): void => { inhibitPolicyMapping = __utils._decode_implicit<SkipCerts>(() => _decode_SkipCerts)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PolicyConstraints,
        _extension_additions_list_spec_for_PolicyConstraints,
        _root_component_type_list_2_spec_for_PolicyConstraints,
        undefined,
    );
    return new PolicyConstraints( /* SEQUENCE_CONSTRUCTOR_CALL */
        requireExplicitPolicy,
        inhibitPolicyMapping
    );
}; }
    return _cached_decoder_for_PolicyConstraints(el);
}
export function _encode_PolicyConstraints (value: PolicyConstraints, elGetter: __utils.ASN1Encoder<PolicyConstraints>) {
    if (!_cached_encoder_for_PolicyConstraints) { _cached_encoder_for_PolicyConstraints = function (value: PolicyConstraints, elGetter: __utils.ASN1Encoder<PolicyConstraints>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.requireExplicitPolicy === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_SkipCerts, __utils.BER)(value.requireExplicitPolicy, __utils.BER)),
            /* IF_ABSENT  */ ((value.inhibitPolicyMapping === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_SkipCerts, __utils.BER)(value.inhibitPolicyMapping, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_PolicyConstraints(value, elGetter);
}


// TODO: ObjectAssignment: ext-CRLDistributionPoints

export const id_ce_cRLDistributionPoints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    31,
], id_ce);

export type DistributionPointName =
    { fullName: GeneralNames } /* CHOICE_ALT_ROOT */
    | { nameRelativeToCRLIssuer: RelativeDistinguishedName } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_DistributionPointName: __utils.ASN1Decoder<DistributionPointName> | null = null;
let _cached_encoder_for_DistributionPointName: __utils.ASN1Encoder<DistributionPointName> | null = null;
export function _decode_DistributionPointName (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DistributionPointName) { _cached_decoder_for_DistributionPointName = __utils._decode_inextensible_choice<DistributionPointName>({
    "CONTEXT 0": [ "fullName", __utils._decode_implicit<GeneralNames>(() => _decode_GeneralNames) ],
    "CONTEXT 1": [ "nameRelativeToCRLIssuer", __utils._decode_implicit<RelativeDistinguishedName>(() => _decode_RelativeDistinguishedName) ]
}); }
    return _cached_decoder_for_DistributionPointName(el);
}
export function _encode_DistributionPointName (value: DistributionPointName, elGetter: __utils.ASN1Encoder<DistributionPointName>) {
    if (!_cached_encoder_for_DistributionPointName) { _cached_encoder_for_DistributionPointName = __utils._encode_choice<DistributionPointName>({
    "fullName": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_GeneralNames, __utils.BER),
    "nameRelativeToCRLIssuer": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_RelativeDistinguishedName, __utils.BER),
}, __utils.BER); }
    return _cached_encoder_for_DistributionPointName(value, elGetter);
}


export type ReasonFlags = asn1.BIT_STRING;
export const ReasonFlags_unused: number = 0; /* LONG_NAMED_BIT */
export const ReasonFlags_keyCompromise: number = 1; /* LONG_NAMED_BIT */
export const ReasonFlags_cACompromise: number = 2; /* LONG_NAMED_BIT */
export const ReasonFlags_affiliationChanged: number = 3; /* LONG_NAMED_BIT */
export const ReasonFlags_superseded: number = 4; /* LONG_NAMED_BIT */
export const ReasonFlags_cessationOfOperation: number = 5; /* LONG_NAMED_BIT */
export const ReasonFlags_certificateHold: number = 6; /* LONG_NAMED_BIT */
export const ReasonFlags_privilegeWithdrawn: number = 7; /* LONG_NAMED_BIT */
export const ReasonFlags_aACompromise: number = 8; /* LONG_NAMED_BIT */
let _cached_decoder_for_ReasonFlags: __utils.ASN1Decoder<ReasonFlags> | null = null;
let _cached_encoder_for_ReasonFlags: __utils.ASN1Encoder<ReasonFlags> | null = null;
export function _decode_ReasonFlags (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReasonFlags) { _cached_decoder_for_ReasonFlags = __utils._decodeBitString; }
    return _cached_decoder_for_ReasonFlags(el);
}
export function _encode_ReasonFlags (value: ReasonFlags, elGetter: __utils.ASN1Encoder<ReasonFlags>) {
    if (!_cached_encoder_for_ReasonFlags) { _cached_encoder_for_ReasonFlags = __utils._encodeBitString; }
    return _cached_encoder_for_ReasonFlags(value, elGetter);
}


export class DistributionPoint {
    constructor (
        readonly distributionPoint: asn1.OPTIONAL<DistributionPointName>,
        readonly reasons: asn1.OPTIONAL<ReasonFlags>,
        readonly cRLIssuer: asn1.OPTIONAL<GeneralNames>
    ) {}

}
export const _root_component_type_list_1_spec_for_DistributionPoint: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("distributionPoint", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("reasons", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("cRLIssuer", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_DistributionPoint: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_DistributionPoint: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_DistributionPoint: __utils.ASN1Decoder<DistributionPoint> | null = null;
let _cached_encoder_for_DistributionPoint: __utils.ASN1Encoder<DistributionPoint> | null = null;
export function _decode_DistributionPoint (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DistributionPoint) { _cached_decoder_for_DistributionPoint = function (el: asn1.ASN1Element): DistributionPoint {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let distributionPoint: asn1.OPTIONAL<DistributionPointName>;
    let reasons: asn1.OPTIONAL<ReasonFlags>;
    let cRLIssuer: asn1.OPTIONAL<GeneralNames>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "distributionPoint": (_el: asn1.ASN1Element): void => { distributionPoint = __utils._decode_implicit<DistributionPointName>(() => _decode_DistributionPointName)(_el); },
        "reasons": (_el: asn1.ASN1Element): void => { reasons = __utils._decode_implicit<ReasonFlags>(() => _decode_ReasonFlags)(_el); },
        "cRLIssuer": (_el: asn1.ASN1Element): void => { cRLIssuer = __utils._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DistributionPoint,
        _extension_additions_list_spec_for_DistributionPoint,
        _root_component_type_list_2_spec_for_DistributionPoint,
        undefined,
    );
    return new DistributionPoint( /* SEQUENCE_CONSTRUCTOR_CALL */
        distributionPoint,
        reasons,
        cRLIssuer
    );
}; }
    return _cached_decoder_for_DistributionPoint(el);
}
export function _encode_DistributionPoint (value: DistributionPoint, elGetter: __utils.ASN1Encoder<DistributionPoint>) {
    if (!_cached_encoder_for_DistributionPoint) { _cached_encoder_for_DistributionPoint = function (value: DistributionPoint, elGetter: __utils.ASN1Encoder<DistributionPoint>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.distributionPoint === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_DistributionPointName, __utils.BER)(value.distributionPoint, __utils.BER)),
            /* IF_ABSENT  */ ((value.reasons === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_ReasonFlags, __utils.BER)(value.reasons, __utils.BER)),
            /* IF_ABSENT  */ ((value.cRLIssuer === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_GeneralNames, __utils.BER)(value.cRLIssuer, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_DistributionPoint(value, elGetter);
}


export type CRLDistributionPoints = DistributionPoint[]; // SequenceOfType
let _cached_decoder_for_CRLDistributionPoints: __utils.ASN1Decoder<CRLDistributionPoints> | null = null;
let _cached_encoder_for_CRLDistributionPoints: __utils.ASN1Encoder<CRLDistributionPoints> | null = null;
export function _decode_CRLDistributionPoints (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CRLDistributionPoints) { _cached_decoder_for_CRLDistributionPoints = __utils._decodeSequenceOf<DistributionPoint>(() => _decode_DistributionPoint); }
    return _cached_decoder_for_CRLDistributionPoints(el);
}
export function _encode_CRLDistributionPoints (value: CRLDistributionPoints, elGetter: __utils.ASN1Encoder<CRLDistributionPoints>) {
    if (!_cached_encoder_for_CRLDistributionPoints) { _cached_encoder_for_CRLDistributionPoints = __utils._encodeSequenceOf<DistributionPoint>(() => _encode_DistributionPoint, __utils.BER); }
    return _cached_encoder_for_CRLDistributionPoints(value, elGetter);
}


// TODO: ObjectAssignment: ext-ExtKeyUsage

export const id_ce_extKeyUsage: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    37,
], id_ce);

export type KeyPurposeId = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_KeyPurposeId: __utils.ASN1Decoder<KeyPurposeId> | null = null;
let _cached_encoder_for_KeyPurposeId: __utils.ASN1Encoder<KeyPurposeId> | null = null;
export function _decode_KeyPurposeId (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyPurposeId) { _cached_decoder_for_KeyPurposeId = __utils._decodeObjectIdentifier; }
    return _cached_decoder_for_KeyPurposeId(el);
}
export function _encode_KeyPurposeId (value: KeyPurposeId, elGetter: __utils.ASN1Encoder<KeyPurposeId>) {
    if (!_cached_encoder_for_KeyPurposeId) { _cached_encoder_for_KeyPurposeId = __utils._encodeObjectIdentifier; }
    return _cached_encoder_for_KeyPurposeId(value, elGetter);
}


export type ExtKeyUsageSyntax = KeyPurposeId[]; // SequenceOfType
let _cached_decoder_for_ExtKeyUsageSyntax: __utils.ASN1Decoder<ExtKeyUsageSyntax> | null = null;
let _cached_encoder_for_ExtKeyUsageSyntax: __utils.ASN1Encoder<ExtKeyUsageSyntax> | null = null;
export function _decode_ExtKeyUsageSyntax (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExtKeyUsageSyntax) { _cached_decoder_for_ExtKeyUsageSyntax = __utils._decodeSequenceOf<KeyPurposeId>(() => _decode_KeyPurposeId); }
    return _cached_decoder_for_ExtKeyUsageSyntax(el);
}
export function _encode_ExtKeyUsageSyntax (value: ExtKeyUsageSyntax, elGetter: __utils.ASN1Encoder<ExtKeyUsageSyntax>) {
    if (!_cached_encoder_for_ExtKeyUsageSyntax) { _cached_encoder_for_ExtKeyUsageSyntax = __utils._encodeSequenceOf<KeyPurposeId>(() => _encode_KeyPurposeId, __utils.BER); }
    return _cached_encoder_for_ExtKeyUsageSyntax(value, elGetter);
}


export const anyExtendedKeyUsage: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    0,
], id_ce_extKeyUsage);

export const id_kp_serverAuth: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_kp);

export const id_kp_clientAuth: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], id_kp);

export const id_kp_codeSigning: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], id_kp);

export const id_kp_emailProtection: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    4,
], id_kp);

export const id_kp_timeStamping: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    8,
], id_kp);

export const id_kp_OCSPSigning: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
], id_kp);

// TODO: ObjectAssignment: ext-InhibitAnyPolicy

export const id_ce_inhibitAnyPolicy: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    54,
], id_ce);

// TODO: ObjectAssignment: ext-FreshestCRL

export const id_ce_freshestCRL: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    46,
], id_ce);

// TODO: ObjectAssignment: ext-AuthorityInfoAccess

export const id_pe_authorityInfoAccess: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_pe);

export class AccessDescription {
    constructor (
        readonly accessMethod: asn1.OBJECT_IDENTIFIER,
        readonly accessLocation: GeneralName
    ) {}

}
export const _root_component_type_list_1_spec_for_AccessDescription: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("accessMethod", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("accessLocation", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AccessDescription: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_AccessDescription: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_AccessDescription: __utils.ASN1Decoder<AccessDescription> | null = null;
let _cached_encoder_for_AccessDescription: __utils.ASN1Encoder<AccessDescription> | null = null;
export function _decode_AccessDescription (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AccessDescription) { _cached_decoder_for_AccessDescription = function (el: asn1.ASN1Element): AccessDescription {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("AccessDescription contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "accessMethod";
    sequence[1].name = "accessLocation";
    let accessMethod!: asn1.OBJECT_IDENTIFIER;
    let accessLocation!: GeneralName;
    accessMethod = __utils._decodeObjectIdentifier(sequence[0]);
    accessLocation = _decode_GeneralName(sequence[1]);
    // TODO: Validate values.
    return new AccessDescription(
        accessMethod,
        accessLocation,

    );
}; }
    return _cached_decoder_for_AccessDescription(el);
}
export function _encode_AccessDescription (value: AccessDescription, elGetter: __utils.ASN1Encoder<AccessDescription>) {
    if (!_cached_encoder_for_AccessDescription) { _cached_encoder_for_AccessDescription = function (value: AccessDescription, elGetter: __utils.ASN1Encoder<AccessDescription>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* REQUIRED   */ __utils._encodeObjectIdentifier(value.accessMethod, __utils.BER),
            /* REQUIRED   */ _encode_GeneralName(value.accessLocation, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_AccessDescription(value, elGetter);
}


export type AuthorityInfoAccessSyntax = AccessDescription[]; // SequenceOfType
let _cached_decoder_for_AuthorityInfoAccessSyntax: __utils.ASN1Decoder<AuthorityInfoAccessSyntax> | null = null;
let _cached_encoder_for_AuthorityInfoAccessSyntax: __utils.ASN1Encoder<AuthorityInfoAccessSyntax> | null = null;
export function _decode_AuthorityInfoAccessSyntax (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AuthorityInfoAccessSyntax) { _cached_decoder_for_AuthorityInfoAccessSyntax = __utils._decodeSequenceOf<AccessDescription>(() => _decode_AccessDescription); }
    return _cached_decoder_for_AuthorityInfoAccessSyntax(el);
}
export function _encode_AuthorityInfoAccessSyntax (value: AuthorityInfoAccessSyntax, elGetter: __utils.ASN1Encoder<AuthorityInfoAccessSyntax>) {
    if (!_cached_encoder_for_AuthorityInfoAccessSyntax) { _cached_encoder_for_AuthorityInfoAccessSyntax = __utils._encodeSequenceOf<AccessDescription>(() => _encode_AccessDescription, __utils.BER); }
    return _cached_encoder_for_AuthorityInfoAccessSyntax(value, elGetter);
}


// TODO: ObjectAssignment: ext-SubjectInfoAccessSyntax

export const id_pe_subjectInfoAccess: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    11,
], id_pe);

export type SubjectInfoAccessSyntax = AccessDescription[]; // SequenceOfType
let _cached_decoder_for_SubjectInfoAccessSyntax: __utils.ASN1Decoder<SubjectInfoAccessSyntax> | null = null;
let _cached_encoder_for_SubjectInfoAccessSyntax: __utils.ASN1Encoder<SubjectInfoAccessSyntax> | null = null;
export function _decode_SubjectInfoAccessSyntax (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SubjectInfoAccessSyntax) { _cached_decoder_for_SubjectInfoAccessSyntax = __utils._decodeSequenceOf<AccessDescription>(() => _decode_AccessDescription); }
    return _cached_decoder_for_SubjectInfoAccessSyntax(el);
}
export function _encode_SubjectInfoAccessSyntax (value: SubjectInfoAccessSyntax, elGetter: __utils.ASN1Encoder<SubjectInfoAccessSyntax>) {
    if (!_cached_encoder_for_SubjectInfoAccessSyntax) { _cached_encoder_for_SubjectInfoAccessSyntax = __utils._encodeSequenceOf<AccessDescription>(() => _encode_AccessDescription, __utils.BER); }
    return _cached_encoder_for_SubjectInfoAccessSyntax(value, elGetter);
}


// TODO: ObjectAssignment: ext-CRLNumber

export const id_ce_cRLNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    20,
], id_ce);

export type CRLNumber = asn1.INTEGER;
let _cached_decoder_for_CRLNumber: __utils.ASN1Decoder<CRLNumber> | null = null;
let _cached_encoder_for_CRLNumber: __utils.ASN1Encoder<CRLNumber> | null = null;
export function _decode_CRLNumber (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CRLNumber) { _cached_decoder_for_CRLNumber = __utils._decodeInteger; }
    return _cached_decoder_for_CRLNumber(el);
}
export function _encode_CRLNumber (value: CRLNumber, elGetter: __utils.ASN1Encoder<CRLNumber>) {
    if (!_cached_encoder_for_CRLNumber) { _cached_encoder_for_CRLNumber = __utils._encodeInteger; }
    return _cached_encoder_for_CRLNumber(value, elGetter);
}


// TODO: ObjectAssignment: ext-IssuingDistributionPoint

export const id_ce_issuingDistributionPoint: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    28,
], id_ce);

export class IssuingDistributionPoint {
    constructor (
        readonly distributionPoint: asn1.OPTIONAL<DistributionPointName>,
        readonly onlyContainsUserCerts: asn1.OPTIONAL<asn1.BOOLEAN>,
        readonly onlyContainsCACerts: asn1.OPTIONAL<asn1.BOOLEAN>,
        readonly onlySomeReasons: asn1.OPTIONAL<ReasonFlags>,
        readonly indirectCRL: asn1.OPTIONAL<asn1.BOOLEAN>,
        readonly onlyContainsAttributeCerts: asn1.OPTIONAL<asn1.BOOLEAN>
    ) {}
    public static get _default_value_for_onlyContainsUserCerts () { return false; }
    public static get _default_value_for_onlyContainsCACerts () { return false; }
    public static get _default_value_for_indirectCRL () { return false; }
    public static get _default_value_for_onlyContainsAttributeCerts () { return false; }
}
export const _root_component_type_list_1_spec_for_IssuingDistributionPoint: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("distributionPoint", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("onlyContainsUserCerts", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("onlyContainsCACerts", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("onlySomeReasons", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("indirectCRL", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("onlyContainsAttributeCerts", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_IssuingDistributionPoint: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_IssuingDistributionPoint: __utils.ComponentSpec[] = [
    
];
let _cached_decoder_for_IssuingDistributionPoint: __utils.ASN1Decoder<IssuingDistributionPoint> | null = null;
let _cached_encoder_for_IssuingDistributionPoint: __utils.ASN1Encoder<IssuingDistributionPoint> | null = null;
export function _decode_IssuingDistributionPoint (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IssuingDistributionPoint) { _cached_decoder_for_IssuingDistributionPoint = function (el: asn1.ASN1Element): IssuingDistributionPoint {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let distributionPoint: asn1.OPTIONAL<DistributionPointName>;
    let onlyContainsUserCerts: asn1.OPTIONAL<asn1.BOOLEAN> = IssuingDistributionPoint._default_value_for_onlyContainsUserCerts;
    let onlyContainsCACerts: asn1.OPTIONAL<asn1.BOOLEAN> = IssuingDistributionPoint._default_value_for_onlyContainsCACerts;
    let onlySomeReasons: asn1.OPTIONAL<ReasonFlags>;
    let indirectCRL: asn1.OPTIONAL<asn1.BOOLEAN> = IssuingDistributionPoint._default_value_for_indirectCRL;
    let onlyContainsAttributeCerts: asn1.OPTIONAL<asn1.BOOLEAN> = IssuingDistributionPoint._default_value_for_onlyContainsAttributeCerts;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "distributionPoint": (_el: asn1.ASN1Element): void => { distributionPoint = __utils._decode_implicit<DistributionPointName>(() => _decode_DistributionPointName)(_el); },
        "onlyContainsUserCerts": (_el: asn1.ASN1Element): void => { onlyContainsUserCerts = __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "onlyContainsCACerts": (_el: asn1.ASN1Element): void => { onlyContainsCACerts = __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "onlySomeReasons": (_el: asn1.ASN1Element): void => { onlySomeReasons = __utils._decode_implicit<ReasonFlags>(() => _decode_ReasonFlags)(_el); },
        "indirectCRL": (_el: asn1.ASN1Element): void => { indirectCRL = __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "onlyContainsAttributeCerts": (_el: asn1.ASN1Element): void => { onlyContainsAttributeCerts = __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IssuingDistributionPoint,
        _extension_additions_list_spec_for_IssuingDistributionPoint,
        _root_component_type_list_2_spec_for_IssuingDistributionPoint,
        undefined,
    );
    return new IssuingDistributionPoint( /* SEQUENCE_CONSTRUCTOR_CALL */
        distributionPoint,
        onlyContainsUserCerts,
        onlyContainsCACerts,
        onlySomeReasons,
        indirectCRL,
        onlyContainsAttributeCerts
    );
}; }
    return _cached_decoder_for_IssuingDistributionPoint(el);
}
export function _encode_IssuingDistributionPoint (value: IssuingDistributionPoint, elGetter: __utils.ASN1Encoder<IssuingDistributionPoint>) {
    if (!_cached_encoder_for_IssuingDistributionPoint) { _cached_encoder_for_IssuingDistributionPoint = function (value: IssuingDistributionPoint, elGetter: __utils.ASN1Encoder<IssuingDistributionPoint>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.distributionPoint === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_DistributionPointName, __utils.BER)(value.distributionPoint, __utils.BER)),
            /* IF_DEFAULT */ (value.onlyContainsUserCerts === undefined || __utils.deepEq(value.onlyContainsUserCerts, IssuingDistributionPoint._default_value_for_onlyContainsUserCerts) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeBoolean, __utils.BER)(value.onlyContainsUserCerts, __utils.BER)),
            /* IF_DEFAULT */ (value.onlyContainsCACerts === undefined || __utils.deepEq(value.onlyContainsCACerts, IssuingDistributionPoint._default_value_for_onlyContainsCACerts) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeBoolean, __utils.BER)(value.onlyContainsCACerts, __utils.BER)),
            /* IF_ABSENT  */ ((value.onlySomeReasons === undefined) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_ReasonFlags, __utils.BER)(value.onlySomeReasons, __utils.BER)),
            /* IF_DEFAULT */ (value.indirectCRL === undefined || __utils.deepEq(value.indirectCRL, IssuingDistributionPoint._default_value_for_indirectCRL) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 4, () => __utils._encodeBoolean, __utils.BER)(value.indirectCRL, __utils.BER)),
            /* IF_DEFAULT */ (value.onlyContainsAttributeCerts === undefined || __utils.deepEq(value.onlyContainsAttributeCerts, IssuingDistributionPoint._default_value_for_onlyContainsAttributeCerts) ? undefined : __utils._encode_implicit(asn1.ASN1TagClass.context, 5, () => __utils._encodeBoolean, __utils.BER)(value.onlyContainsAttributeCerts, __utils.BER))
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}; }
    return _cached_encoder_for_IssuingDistributionPoint(value, elGetter);
}


// TODO: ObjectAssignment: ext-DeltaCRLIndicator

export const id_ce_deltaCRLIndicator: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    27,
], id_ce);

// TODO: ObjectAssignment: ext-CRLReason

export const id_ce_cRLReasons: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    21,
], id_ce);

export enum CRLReason {
    unspecified = 0,
    keyCompromise = 1,
    cACompromise = 2,
    affiliationChanged = 3,
    superseded = 4,
    cessationOfOperation = 5,
    certificateHold = 6,
    removeFromCRL = 8,
    privilegeWithdrawn = 9,
    aACompromise = 10,
}
export const CRLReason_unspecified: CRLReason = CRLReason.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_keyCompromise: CRLReason = CRLReason.keyCompromise; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_cACompromise: CRLReason = CRLReason.cACompromise; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_affiliationChanged: CRLReason = CRLReason.affiliationChanged; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_superseded: CRLReason = CRLReason.superseded; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_cessationOfOperation: CRLReason = CRLReason.cessationOfOperation; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_certificateHold: CRLReason = CRLReason.certificateHold; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_removeFromCRL: CRLReason = CRLReason.removeFromCRL; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_privilegeWithdrawn: CRLReason = CRLReason.privilegeWithdrawn; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_aACompromise: CRLReason = CRLReason.aACompromise; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CRLReason: __utils.ASN1Decoder<CRLReason> | null = null;
let _cached_encoder_for_CRLReason: __utils.ASN1Encoder<CRLReason> | null = null;
export function _decode_CRLReason (el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CRLReason) { _cached_decoder_for_CRLReason = __utils._decodeEnumerated; }
    return _cached_decoder_for_CRLReason(el);
}
export function _encode_CRLReason (value: CRLReason, elGetter: __utils.ASN1Encoder<CRLReason>) {
    if (!_cached_encoder_for_CRLReason) { _cached_encoder_for_CRLReason = __utils._encodeEnumerated; }
    return _cached_encoder_for_CRLReason(value, elGetter);
}


// TODO: ObjectAssignment: ext-CertificateIssuer

export const id_ce_certificateIssuer: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    29,
], id_ce);

// TODO: ObjectAssignment: ext-HoldInstructionCode

export const id_ce_holdInstructionCode: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    23,
], id_ce);

export const holdInstruction: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* joint-iso-itu-t */ 2,
    /* member-body */ 2,
    /* us */ 840,
    /* x9cm */ 10040,
    2,
]);

export const id_holdinstruction_none: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], holdInstruction);

export const id_holdinstruction_callissuer: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
], holdInstruction);

export const id_holdinstruction_reject: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    3,
], holdInstruction);

// TODO: ObjectAssignment: ext-InvalidityDate

export const id_ce_invalidityDate: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    24,
], id_ce);

/* END_MODULE PKIX1Implicit-2009 */
