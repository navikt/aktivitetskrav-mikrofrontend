import { literal, object, string, union, z } from "zod";

const avventArsaker = z.array(
  z.union([literal("OPPFOLGINGSPLAN_ARBEIDSGIVER"), literal("INFORMASJON_BEHANDLER"), literal("ANNET")])
);

const unntakArsaker = z.union([
  literal("MEDISINSKE_GRUNNER"),
  literal("TILRETTELEGGING_IKKE_MULIG"),
  literal("SJOMENN_UTENRIKS"),
]);

const oppfyltArsaker = z.union([literal("FRISKMELDT"), literal("GRADERT"), literal("TILTAK")]);

export const aktivitetskravVurderingSchema = union([
  object({
    status: z.literal("AVVENT"),
    arsaker: avventArsaker,
  }),
  object({
    status: z.literal("UNNTAK"),
    arsaker: unntakArsaker,
  }),
  object({
    status: z.literal("OPPFYLT"),
    arsaker: oppfyltArsaker,
  }),
  object({
    status: z.literal("NY"),
  }),
  object({
    status: z.literal("FORHANDSVARSEL"),
    journalpostId: string().optional(),
  }),
  object({
    status: z.literal("IKKE_OPPFYLT"),
  }),
  object({
    status: z.literal("IKKE_AKTUELL"),
  }),
]);

export type AktivitetskravVurdering = z.infer<typeof aktivitetskravVurderingSchema>;
export type AvventArsaker = z.infer<typeof avventArsaker>;
export type UnntakArsaker = z.infer<typeof unntakArsaker>;
export type OppfyltArsaker = z.infer<typeof oppfyltArsaker>;
