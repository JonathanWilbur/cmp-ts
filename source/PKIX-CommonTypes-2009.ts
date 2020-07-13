/*
    BEGIN_MODULE PKIX-CommonTypes-2009
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-pkixCommon-02
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";

// TODO: ObjectClassAssignment: MATCHING-RULE

// TODO: ObjectClassAssignment: ATTRIBUTE

export class AttributeSet {
    constructor(
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly values: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeSet: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "values",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AttributeSet: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AttributeSet: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AttributeSet: __utils.ASN1Decoder<
    AttributeSet
> | null = null;
let _cached_encoder_for_AttributeSet: __utils.ASN1Encoder<
    AttributeSet
> | null = null;
export function _decode_AttributeSet(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeSet) {
        _cached_decoder_for_AttributeSet = function (
            el: asn1.ASN1Element
        ): AttributeSet {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "AttributeSet contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "values";
            let type_!: asn1.OBJECT_IDENTIFIER;
            let values!: asn1.ASN1Element[];
            type_ = __utils._decodeObjectIdentifier(sequence[0]);
            values = __utils._decodeSetOf<asn1.ASN1Element>(
                () => __utils._decodeAny
            )(sequence[1]);
            return new AttributeSet(type_, values);
        };
    }
    return _cached_decoder_for_AttributeSet(el);
}
export function _encode_AttributeSet(
    value: AttributeSet,
    elGetter: __utils.ASN1Encoder<AttributeSet>
) {
    if (!_cached_encoder_for_AttributeSet) {
        _cached_encoder_for_AttributeSet = function (
            value: AttributeSet,
            elGetter: __utils.ASN1Encoder<AttributeSet>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.type_,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeSetOf<asn1.ASN1Element>(
                            () => __utils._encodeAny,
                            __utils.BER
                        )(value.values, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_AttributeSet(value, elGetter);
}

/* END_MODULE PKIX-CommonTypes-2009 */
