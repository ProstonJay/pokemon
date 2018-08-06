type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace com. */
declare namespace com {

    /** Namespace aoo. */
    namespace aoo {

        /** Namespace chess. */
        namespace chess {

            /** Namespace comms. */
            namespace comms {

                /** Namespace protocol. */
                namespace protocol {

                    /** Namespace proto. */
                    namespace proto {

                        /** Namespace message. */
                        namespace message {

                            /** Properties of a PushMessage. */
                            interface IPushMessage {

                                /** PushMessage childMessage */
                                childMessage?: (Uint8Array|null);

                                /** PushMessage mainCmd */
                                mainCmd?: (number|null);

                                /** PushMessage subCmd */
                                subCmd?: (number|null);
                            }

                            /** Represents a PushMessage. */
                            class PushMessage implements IPushMessage {

                                /**
                                 * Constructs a new PushMessage.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IPushMessage);

                                /** PushMessage childMessage. */
                                public childMessage: Uint8Array;

                                /** PushMessage mainCmd. */
                                public mainCmd: number;

                                /** PushMessage subCmd. */
                                public subCmd: number;

                                /**
                                 * Creates a new PushMessage instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns PushMessage instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IPushMessage): com.aoo.chess.comms.protocol.proto.message.PushMessage;

                                /**
                                 * Encodes the specified PushMessage message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PushMessage.verify|verify} messages.
                                 * @param message PushMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IPushMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified PushMessage message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PushMessage.verify|verify} messages.
                                 * @param message PushMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IPushMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a PushMessage message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns PushMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.PushMessage;

                                /**
                                 * Decodes a PushMessage message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns PushMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.PushMessage;

                                /**
                                 * Verifies a PushMessage message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a PushMessage message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns PushMessage
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.PushMessage;

                                /**
                                 * Creates a plain object from a PushMessage message. Also converts values to other types if specified.
                                 * @param message PushMessage
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.PushMessage, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this PushMessage to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ServerPushMessage. */
                            interface IServerPushMessage {

                                /** ServerPushMessage players */
                                players?: (number[]|null);

                                /** ServerPushMessage msg */
                                msg?: (com.aoo.chess.comms.protocol.proto.message.IPushMessage|null);
                            }

                            /** Represents a ServerPushMessage. */
                            class ServerPushMessage implements IServerPushMessage {

                                /**
                                 * Constructs a new ServerPushMessage.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IServerPushMessage);

                                /** ServerPushMessage players. */
                                public players: number[];

                                /** ServerPushMessage msg. */
                                public msg?: (com.aoo.chess.comms.protocol.proto.message.IPushMessage|null);

                                /**
                                 * Creates a new ServerPushMessage instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ServerPushMessage instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IServerPushMessage): com.aoo.chess.comms.protocol.proto.message.ServerPushMessage;

                                /**
                                 * Encodes the specified ServerPushMessage message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ServerPushMessage.verify|verify} messages.
                                 * @param message ServerPushMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IServerPushMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ServerPushMessage message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ServerPushMessage.verify|verify} messages.
                                 * @param message ServerPushMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IServerPushMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ServerPushMessage message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ServerPushMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ServerPushMessage;

                                /**
                                 * Decodes a ServerPushMessage message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ServerPushMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ServerPushMessage;

                                /**
                                 * Verifies a ServerPushMessage message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ServerPushMessage message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ServerPushMessage
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ServerPushMessage;

                                /**
                                 * Creates a plain object from a ServerPushMessage message. Also converts values to other types if specified.
                                 * @param message ServerPushMessage
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ServerPushMessage, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ServerPushMessage to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ReloadStaticData. */
                            interface IReloadStaticData {

                                /** ReloadStaticData cmd */
                                cmd?: (string|null);
                            }

                            /** Represents a ReloadStaticData. */
                            class ReloadStaticData implements IReloadStaticData {

                                /**
                                 * Constructs a new ReloadStaticData.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IReloadStaticData);

                                /** ReloadStaticData cmd. */
                                public cmd: string;

                                /**
                                 * Creates a new ReloadStaticData instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ReloadStaticData instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IReloadStaticData): com.aoo.chess.comms.protocol.proto.message.ReloadStaticData;

                                /**
                                 * Encodes the specified ReloadStaticData message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ReloadStaticData.verify|verify} messages.
                                 * @param message ReloadStaticData message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IReloadStaticData, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ReloadStaticData message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ReloadStaticData.verify|verify} messages.
                                 * @param message ReloadStaticData message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IReloadStaticData, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ReloadStaticData message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ReloadStaticData
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ReloadStaticData;

                                /**
                                 * Decodes a ReloadStaticData message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ReloadStaticData
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ReloadStaticData;

                                /**
                                 * Verifies a ReloadStaticData message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ReloadStaticData message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ReloadStaticData
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ReloadStaticData;

                                /**
                                 * Creates a plain object from a ReloadStaticData message. Also converts values to other types if specified.
                                 * @param message ReloadStaticData
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ReloadStaticData, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ReloadStaticData to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ReloadStaticDataResults. */
                            interface IReloadStaticDataResults {

                                /** ReloadStaticDataResults results */
                                results?: (com.aoo.chess.comms.protocol.proto.message.IReloadStaticDataResult[]|null);
                            }

                            /** Represents a ReloadStaticDataResults. */
                            class ReloadStaticDataResults implements IReloadStaticDataResults {

                                /**
                                 * Constructs a new ReloadStaticDataResults.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IReloadStaticDataResults);

                                /** ReloadStaticDataResults results. */
                                public results: com.aoo.chess.comms.protocol.proto.message.IReloadStaticDataResult[];

                                /**
                                 * Creates a new ReloadStaticDataResults instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ReloadStaticDataResults instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IReloadStaticDataResults): com.aoo.chess.comms.protocol.proto.message.ReloadStaticDataResults;

                                /**
                                 * Encodes the specified ReloadStaticDataResults message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ReloadStaticDataResults.verify|verify} messages.
                                 * @param message ReloadStaticDataResults message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IReloadStaticDataResults, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ReloadStaticDataResults message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ReloadStaticDataResults.verify|verify} messages.
                                 * @param message ReloadStaticDataResults message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IReloadStaticDataResults, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ReloadStaticDataResults message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ReloadStaticDataResults
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ReloadStaticDataResults;

                                /**
                                 * Decodes a ReloadStaticDataResults message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ReloadStaticDataResults
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ReloadStaticDataResults;

                                /**
                                 * Verifies a ReloadStaticDataResults message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ReloadStaticDataResults message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ReloadStaticDataResults
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ReloadStaticDataResults;

                                /**
                                 * Creates a plain object from a ReloadStaticDataResults message. Also converts values to other types if specified.
                                 * @param message ReloadStaticDataResults
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ReloadStaticDataResults, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ReloadStaticDataResults to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ReloadStaticDataResult. */
                            interface IReloadStaticDataResult {

                                /** ReloadStaticDataResult serverId */
                                serverId?: (number|null);

                                /** ReloadStaticDataResult serverType */
                                serverType?: (number|null);

                                /** ReloadStaticDataResult sucess */
                                sucess?: (boolean|null);
                            }

                            /** Represents a ReloadStaticDataResult. */
                            class ReloadStaticDataResult implements IReloadStaticDataResult {

                                /**
                                 * Constructs a new ReloadStaticDataResult.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IReloadStaticDataResult);

                                /** ReloadStaticDataResult serverId. */
                                public serverId: number;

                                /** ReloadStaticDataResult serverType. */
                                public serverType: number;

                                /** ReloadStaticDataResult sucess. */
                                public sucess: boolean;

                                /**
                                 * Creates a new ReloadStaticDataResult instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ReloadStaticDataResult instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IReloadStaticDataResult): com.aoo.chess.comms.protocol.proto.message.ReloadStaticDataResult;

                                /**
                                 * Encodes the specified ReloadStaticDataResult message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ReloadStaticDataResult.verify|verify} messages.
                                 * @param message ReloadStaticDataResult message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IReloadStaticDataResult, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ReloadStaticDataResult message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ReloadStaticDataResult.verify|verify} messages.
                                 * @param message ReloadStaticDataResult message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IReloadStaticDataResult, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ReloadStaticDataResult message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ReloadStaticDataResult
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ReloadStaticDataResult;

                                /**
                                 * Decodes a ReloadStaticDataResult message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ReloadStaticDataResult
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ReloadStaticDataResult;

                                /**
                                 * Verifies a ReloadStaticDataResult message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ReloadStaticDataResult message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ReloadStaticDataResult
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ReloadStaticDataResult;

                                /**
                                 * Creates a plain object from a ReloadStaticDataResult message. Also converts values to other types if specified.
                                 * @param message ReloadStaticDataResult
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ReloadStaticDataResult, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ReloadStaticDataResult to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a BrZhajinhuaRoomInfo. */
                            interface IBrZhajinhuaRoomInfo {

                                /** BrZhajinhuaRoomInfo playerSize */
                                playerSize?: (number|null);

                                /** BrZhajinhuaRoomInfo state */
                                state?: (number|null);

                                /** BrZhajinhuaRoomInfo infos */
                                infos?: (com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaBetInfo[]|null);

                                /** BrZhajinhuaRoomInfo myBetInfo */
                                myBetInfo?: (com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaBetInfo[]|null);

                                /** BrZhajinhuaRoomInfo ranks */
                                ranks?: (com.aoo.chess.comms.protocol.proto.message.IRoomPlayerInfo[]|null);

                                /** BrZhajinhuaRoomInfo historyInofs */
                                historyInofs?: (com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaHistoryInfo[]|null);

                                /** BrZhajinhuaRoomInfo time */
                                time?: (number|null);

                                /** BrZhajinhuaRoomInfo cards */
                                cards?: (com.aoo.chess.comms.protocol.proto.message.IZhajinhuaCards[]|null);
                            }

                            /** Represents a BrZhajinhuaRoomInfo. */
                            class BrZhajinhuaRoomInfo implements IBrZhajinhuaRoomInfo {

                                /**
                                 * Constructs a new BrZhajinhuaRoomInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaRoomInfo);

                                /** BrZhajinhuaRoomInfo playerSize. */
                                public playerSize: number;

                                /** BrZhajinhuaRoomInfo state. */
                                public state: number;

                                /** BrZhajinhuaRoomInfo infos. */
                                public infos: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaBetInfo[];

                                /** BrZhajinhuaRoomInfo myBetInfo. */
                                public myBetInfo: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaBetInfo[];

                                /** BrZhajinhuaRoomInfo ranks. */
                                public ranks: com.aoo.chess.comms.protocol.proto.message.IRoomPlayerInfo[];

                                /** BrZhajinhuaRoomInfo historyInofs. */
                                public historyInofs: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaHistoryInfo[];

                                /** BrZhajinhuaRoomInfo time. */
                                public time: number;

                                /** BrZhajinhuaRoomInfo cards. */
                                public cards: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaCards[];

                                /**
                                 * Creates a new BrZhajinhuaRoomInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns BrZhajinhuaRoomInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaRoomInfo): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaRoomInfo;

                                /**
                                 * Encodes the specified BrZhajinhuaRoomInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaRoomInfo.verify|verify} messages.
                                 * @param message BrZhajinhuaRoomInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified BrZhajinhuaRoomInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaRoomInfo.verify|verify} messages.
                                 * @param message BrZhajinhuaRoomInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a BrZhajinhuaRoomInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns BrZhajinhuaRoomInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaRoomInfo;

                                /**
                                 * Decodes a BrZhajinhuaRoomInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns BrZhajinhuaRoomInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaRoomInfo;

                                /**
                                 * Verifies a BrZhajinhuaRoomInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a BrZhajinhuaRoomInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns BrZhajinhuaRoomInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaRoomInfo;

                                /**
                                 * Creates a plain object from a BrZhajinhuaRoomInfo message. Also converts values to other types if specified.
                                 * @param message BrZhajinhuaRoomInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaRoomInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this BrZhajinhuaRoomInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a BrZhajinhuaRankUpdate. */
                            interface IBrZhajinhuaRankUpdate {

                                /** BrZhajinhuaRankUpdate ranks */
                                ranks?: (com.aoo.chess.comms.protocol.proto.message.IRoomPlayerInfo[]|null);
                            }

                            /** Represents a BrZhajinhuaRankUpdate. */
                            class BrZhajinhuaRankUpdate implements IBrZhajinhuaRankUpdate {

                                /**
                                 * Constructs a new BrZhajinhuaRankUpdate.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaRankUpdate);

                                /** BrZhajinhuaRankUpdate ranks. */
                                public ranks: com.aoo.chess.comms.protocol.proto.message.IRoomPlayerInfo[];

                                /**
                                 * Creates a new BrZhajinhuaRankUpdate instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns BrZhajinhuaRankUpdate instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaRankUpdate): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaRankUpdate;

                                /**
                                 * Encodes the specified BrZhajinhuaRankUpdate message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaRankUpdate.verify|verify} messages.
                                 * @param message BrZhajinhuaRankUpdate message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaRankUpdate, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified BrZhajinhuaRankUpdate message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaRankUpdate.verify|verify} messages.
                                 * @param message BrZhajinhuaRankUpdate message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaRankUpdate, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a BrZhajinhuaRankUpdate message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns BrZhajinhuaRankUpdate
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaRankUpdate;

                                /**
                                 * Decodes a BrZhajinhuaRankUpdate message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns BrZhajinhuaRankUpdate
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaRankUpdate;

                                /**
                                 * Verifies a BrZhajinhuaRankUpdate message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a BrZhajinhuaRankUpdate message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns BrZhajinhuaRankUpdate
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaRankUpdate;

                                /**
                                 * Creates a plain object from a BrZhajinhuaRankUpdate message. Also converts values to other types if specified.
                                 * @param message BrZhajinhuaRankUpdate
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaRankUpdate, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this BrZhajinhuaRankUpdate to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a BrZhajinhuaHistoryInfo. */
                            interface IBrZhajinhuaHistoryInfo {

                                /** BrZhajinhuaHistoryInfo win */
                                win?: (boolean[]|null);
                            }

                            /** Represents a BrZhajinhuaHistoryInfo. */
                            class BrZhajinhuaHistoryInfo implements IBrZhajinhuaHistoryInfo {

                                /**
                                 * Constructs a new BrZhajinhuaHistoryInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaHistoryInfo);

                                /** BrZhajinhuaHistoryInfo win. */
                                public win: boolean[];

                                /**
                                 * Creates a new BrZhajinhuaHistoryInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns BrZhajinhuaHistoryInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaHistoryInfo): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaHistoryInfo;

                                /**
                                 * Encodes the specified BrZhajinhuaHistoryInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaHistoryInfo.verify|verify} messages.
                                 * @param message BrZhajinhuaHistoryInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaHistoryInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified BrZhajinhuaHistoryInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaHistoryInfo.verify|verify} messages.
                                 * @param message BrZhajinhuaHistoryInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaHistoryInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a BrZhajinhuaHistoryInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns BrZhajinhuaHistoryInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaHistoryInfo;

                                /**
                                 * Decodes a BrZhajinhuaHistoryInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns BrZhajinhuaHistoryInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaHistoryInfo;

                                /**
                                 * Verifies a BrZhajinhuaHistoryInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a BrZhajinhuaHistoryInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns BrZhajinhuaHistoryInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaHistoryInfo;

                                /**
                                 * Creates a plain object from a BrZhajinhuaHistoryInfo message. Also converts values to other types if specified.
                                 * @param message BrZhajinhuaHistoryInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaHistoryInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this BrZhajinhuaHistoryInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a BrZhajinhuaBetInfo. */
                            interface IBrZhajinhuaBetInfo {

                                /** BrZhajinhuaBetInfo type */
                                type?: (number|null);

                                /** BrZhajinhuaBetInfo gold */
                                gold?: (number|Long|null);
                            }

                            /** Represents a BrZhajinhuaBetInfo. */
                            class BrZhajinhuaBetInfo implements IBrZhajinhuaBetInfo {

                                /**
                                 * Constructs a new BrZhajinhuaBetInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaBetInfo);

                                /** BrZhajinhuaBetInfo type. */
                                public type: number;

                                /** BrZhajinhuaBetInfo gold. */
                                public gold: (number|Long);

                                /**
                                 * Creates a new BrZhajinhuaBetInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns BrZhajinhuaBetInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaBetInfo): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaBetInfo;

                                /**
                                 * Encodes the specified BrZhajinhuaBetInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaBetInfo.verify|verify} messages.
                                 * @param message BrZhajinhuaBetInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaBetInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified BrZhajinhuaBetInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaBetInfo.verify|verify} messages.
                                 * @param message BrZhajinhuaBetInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaBetInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a BrZhajinhuaBetInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns BrZhajinhuaBetInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaBetInfo;

                                /**
                                 * Decodes a BrZhajinhuaBetInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns BrZhajinhuaBetInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaBetInfo;

                                /**
                                 * Verifies a BrZhajinhuaBetInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a BrZhajinhuaBetInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns BrZhajinhuaBetInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaBetInfo;

                                /**
                                 * Creates a plain object from a BrZhajinhuaBetInfo message. Also converts values to other types if specified.
                                 * @param message BrZhajinhuaBetInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaBetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this BrZhajinhuaBetInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a BrZhajinhuaBet. */
                            interface IBrZhajinhuaBet {

                                /** BrZhajinhuaBet playerId */
                                playerId?: (number|null);

                                /** BrZhajinhuaBet info */
                                info?: (com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaBetInfo|null);
                            }

                            /** Represents a BrZhajinhuaBet. */
                            class BrZhajinhuaBet implements IBrZhajinhuaBet {

                                /**
                                 * Constructs a new BrZhajinhuaBet.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaBet);

                                /** BrZhajinhuaBet playerId. */
                                public playerId: number;

                                /** BrZhajinhuaBet info. */
                                public info?: (com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaBetInfo|null);

                                /**
                                 * Creates a new BrZhajinhuaBet instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns BrZhajinhuaBet instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaBet): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaBet;

                                /**
                                 * Encodes the specified BrZhajinhuaBet message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaBet.verify|verify} messages.
                                 * @param message BrZhajinhuaBet message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaBet, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified BrZhajinhuaBet message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaBet.verify|verify} messages.
                                 * @param message BrZhajinhuaBet message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaBet, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a BrZhajinhuaBet message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns BrZhajinhuaBet
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaBet;

                                /**
                                 * Decodes a BrZhajinhuaBet message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns BrZhajinhuaBet
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaBet;

                                /**
                                 * Verifies a BrZhajinhuaBet message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a BrZhajinhuaBet message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns BrZhajinhuaBet
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaBet;

                                /**
                                 * Creates a plain object from a BrZhajinhuaBet message. Also converts values to other types if specified.
                                 * @param message BrZhajinhuaBet
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaBet, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this BrZhajinhuaBet to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a BrcAward. */
                            interface IBrcAward {

                                /** BrcAward gold */
                                gold?: (number|Long|null);

                                /** BrcAward winOrLostGold */
                                winOrLostGold?: (number|Long|null);
                            }

                            /** Represents a BrcAward. */
                            class BrcAward implements IBrcAward {

                                /**
                                 * Constructs a new BrcAward.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IBrcAward);

                                /** BrcAward gold. */
                                public gold: (number|Long);

                                /** BrcAward winOrLostGold. */
                                public winOrLostGold: (number|Long);

                                /**
                                 * Creates a new BrcAward instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns BrcAward instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IBrcAward): com.aoo.chess.comms.protocol.proto.message.BrcAward;

                                /**
                                 * Encodes the specified BrcAward message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.BrcAward.verify|verify} messages.
                                 * @param message BrcAward message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IBrcAward, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified BrcAward message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.BrcAward.verify|verify} messages.
                                 * @param message BrcAward message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IBrcAward, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a BrcAward message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns BrcAward
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.BrcAward;

                                /**
                                 * Decodes a BrcAward message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns BrcAward
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.BrcAward;

                                /**
                                 * Verifies a BrcAward message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a BrcAward message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns BrcAward
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.BrcAward;

                                /**
                                 * Creates a plain object from a BrcAward message. Also converts values to other types if specified.
                                 * @param message BrcAward
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.BrcAward, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this BrcAward to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a BrZhajinhuaEnd. */
                            interface IBrZhajinhuaEnd {

                                /** BrZhajinhuaEnd gold */
                                gold?: (number|Long|null);

                                /** BrZhajinhuaEnd cards */
                                cards?: (com.aoo.chess.comms.protocol.proto.message.IZhajinhuaCards[]|null);

                                /** BrZhajinhuaEnd rankSettlements */
                                rankSettlements?: (com.aoo.chess.comms.protocol.proto.message.IRankSettlement[]|null);

                                /** BrZhajinhuaEnd results */
                                results?: (boolean[]|null);
                            }

                            /** Represents a BrZhajinhuaEnd. */
                            class BrZhajinhuaEnd implements IBrZhajinhuaEnd {

                                /**
                                 * Constructs a new BrZhajinhuaEnd.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaEnd);

                                /** BrZhajinhuaEnd gold. */
                                public gold: (number|Long);

                                /** BrZhajinhuaEnd cards. */
                                public cards: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaCards[];

                                /** BrZhajinhuaEnd rankSettlements. */
                                public rankSettlements: com.aoo.chess.comms.protocol.proto.message.IRankSettlement[];

                                /** BrZhajinhuaEnd results. */
                                public results: boolean[];

                                /**
                                 * Creates a new BrZhajinhuaEnd instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns BrZhajinhuaEnd instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaEnd): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaEnd;

                                /**
                                 * Encodes the specified BrZhajinhuaEnd message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaEnd.verify|verify} messages.
                                 * @param message BrZhajinhuaEnd message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaEnd, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified BrZhajinhuaEnd message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaEnd.verify|verify} messages.
                                 * @param message BrZhajinhuaEnd message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IBrZhajinhuaEnd, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a BrZhajinhuaEnd message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns BrZhajinhuaEnd
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaEnd;

                                /**
                                 * Decodes a BrZhajinhuaEnd message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns BrZhajinhuaEnd
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaEnd;

                                /**
                                 * Verifies a BrZhajinhuaEnd message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a BrZhajinhuaEnd message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns BrZhajinhuaEnd
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaEnd;

                                /**
                                 * Creates a plain object from a BrZhajinhuaEnd message. Also converts values to other types if specified.
                                 * @param message BrZhajinhuaEnd
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.BrZhajinhuaEnd, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this BrZhajinhuaEnd to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a GainBrZhajinhuaRoomInfo. */
                            interface IGainBrZhajinhuaRoomInfo {

                                /** GainBrZhajinhuaRoomInfo playerId */
                                playerId?: (number|null);
                            }

                            /** Represents a GainBrZhajinhuaRoomInfo. */
                            class GainBrZhajinhuaRoomInfo implements IGainBrZhajinhuaRoomInfo {

                                /**
                                 * Constructs a new GainBrZhajinhuaRoomInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IGainBrZhajinhuaRoomInfo);

                                /** GainBrZhajinhuaRoomInfo playerId. */
                                public playerId: number;

                                /**
                                 * Creates a new GainBrZhajinhuaRoomInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns GainBrZhajinhuaRoomInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IGainBrZhajinhuaRoomInfo): com.aoo.chess.comms.protocol.proto.message.GainBrZhajinhuaRoomInfo;

                                /**
                                 * Encodes the specified GainBrZhajinhuaRoomInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.GainBrZhajinhuaRoomInfo.verify|verify} messages.
                                 * @param message GainBrZhajinhuaRoomInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IGainBrZhajinhuaRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified GainBrZhajinhuaRoomInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.GainBrZhajinhuaRoomInfo.verify|verify} messages.
                                 * @param message GainBrZhajinhuaRoomInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IGainBrZhajinhuaRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a GainBrZhajinhuaRoomInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns GainBrZhajinhuaRoomInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.GainBrZhajinhuaRoomInfo;

                                /**
                                 * Decodes a GainBrZhajinhuaRoomInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns GainBrZhajinhuaRoomInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.GainBrZhajinhuaRoomInfo;

                                /**
                                 * Verifies a GainBrZhajinhuaRoomInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a GainBrZhajinhuaRoomInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns GainBrZhajinhuaRoomInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.GainBrZhajinhuaRoomInfo;

                                /**
                                 * Creates a plain object from a GainBrZhajinhuaRoomInfo message. Also converts values to other types if specified.
                                 * @param message GainBrZhajinhuaRoomInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.GainBrZhajinhuaRoomInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this GainBrZhajinhuaRoomInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ClientEnterRoom. */
                            interface IClientEnterRoom {

                                /** ClientEnterRoom roomType */
                                roomType?: (number|null);

                                /** ClientEnterRoom roomId */
                                roomId?: (number|null);
                            }

                            /** 客户端发送进入房间 */
                            class ClientEnterRoom implements IClientEnterRoom {

                                /**
                                 * Constructs a new ClientEnterRoom.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IClientEnterRoom);

                                /** ClientEnterRoom roomType. */
                                public roomType: number;

                                /** ClientEnterRoom roomId. */
                                public roomId: number;

                                /**
                                 * Creates a new ClientEnterRoom instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ClientEnterRoom instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IClientEnterRoom): com.aoo.chess.comms.protocol.proto.message.ClientEnterRoom;

                                /**
                                 * Encodes the specified ClientEnterRoom message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ClientEnterRoom.verify|verify} messages.
                                 * @param message ClientEnterRoom message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IClientEnterRoom, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ClientEnterRoom message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ClientEnterRoom.verify|verify} messages.
                                 * @param message ClientEnterRoom message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IClientEnterRoom, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ClientEnterRoom message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ClientEnterRoom
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ClientEnterRoom;

                                /**
                                 * Decodes a ClientEnterRoom message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ClientEnterRoom
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ClientEnterRoom;

                                /**
                                 * Verifies a ClientEnterRoom message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ClientEnterRoom message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ClientEnterRoom
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ClientEnterRoom;

                                /**
                                 * Creates a plain object from a ClientEnterRoom message. Also converts values to other types if specified.
                                 * @param message ClientEnterRoom
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ClientEnterRoom, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ClientEnterRoom to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of an EnterRoom. */
                            interface IEnterRoom {

                                /** EnterRoom info */
                                info?: (com.aoo.chess.comms.protocol.proto.message.IPlayerSimpleInfo|null);
                            }

                            /** 进入房间 */
                            class EnterRoom implements IEnterRoom {

                                /**
                                 * Constructs a new EnterRoom.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IEnterRoom);

                                /** EnterRoom info. */
                                public info?: (com.aoo.chess.comms.protocol.proto.message.IPlayerSimpleInfo|null);

                                /**
                                 * Creates a new EnterRoom instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns EnterRoom instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IEnterRoom): com.aoo.chess.comms.protocol.proto.message.EnterRoom;

                                /**
                                 * Encodes the specified EnterRoom message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.EnterRoom.verify|verify} messages.
                                 * @param message EnterRoom message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IEnterRoom, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified EnterRoom message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.EnterRoom.verify|verify} messages.
                                 * @param message EnterRoom message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IEnterRoom, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes an EnterRoom message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns EnterRoom
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.EnterRoom;

                                /**
                                 * Decodes an EnterRoom message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns EnterRoom
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.EnterRoom;

                                /**
                                 * Verifies an EnterRoom message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an EnterRoom message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns EnterRoom
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.EnterRoom;

                                /**
                                 * Creates a plain object from an EnterRoom message. Also converts values to other types if specified.
                                 * @param message EnterRoom
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.EnterRoom, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this EnterRoom to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a RoomPlayerInfo. */
                            interface IRoomPlayerInfo {

                                /** 玩家编号 */
                                id?: (number|null);

                                /** 名称 */
                                name?: (string|null);

                                /** 头像 */
                                icon?: (string|null);

                                /** vip积分 */
                                vipPoints?: (number|null);

                                /** 总胜利场数 */
                                winCount?: (number|null);

                                /** 总场次 */
                                totleCount?: (number|null);

                                /** 座位号 */
                                seatNumber?: (number|null);

                                /** 玩家状态 */
                                state?: (number|null);

                                /** 已下注的金钱 */
                                betGold?: (number|null);

                                /** 玩家所携带的资源 */
                                res?: (com.aoo.chess.comms.protocol.proto.message.IResources[]|null);

                                /** 是否看牌 */
                                look?: (boolean|null);

                                /** 当前座驾 */
                                car?: (number|null);

                                /** 性别 */
                                sex?: (boolean|null);
                            }

                            /** 房间玩家信息 */
                            class RoomPlayerInfo implements IRoomPlayerInfo {

                                /**
                                 * Constructs a new RoomPlayerInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IRoomPlayerInfo);

                                /** 玩家编号 */
                                public id: number;

                                /** 名称 */
                                public name: string;

                                /** 头像 */
                                public icon: string;

                                /** vip积分 */
                                public vipPoints: number;

                                /** 总胜利场数 */
                                public winCount: number;

                                /** 总场次 */
                                public totleCount: number;

                                /** 座位号 */
                                public seatNumber: number;

                                /** 玩家状态 */
                                public state: number;

                                /** 已下注的金钱 */
                                public betGold: number;

                                /** 玩家所携带的资源 */
                                public res: com.aoo.chess.comms.protocol.proto.message.IResources[];

                                /** 是否看牌 */
                                public look: boolean;

                                /** 当前座驾 */
                                public car: number;

                                /** 性别 */
                                public sex: boolean;

                                /**
                                 * Creates a new RoomPlayerInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns RoomPlayerInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IRoomPlayerInfo): com.aoo.chess.comms.protocol.proto.message.RoomPlayerInfo;

                                /**
                                 * Encodes the specified RoomPlayerInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.RoomPlayerInfo.verify|verify} messages.
                                 * @param message RoomPlayerInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IRoomPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified RoomPlayerInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.RoomPlayerInfo.verify|verify} messages.
                                 * @param message RoomPlayerInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IRoomPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a RoomPlayerInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns RoomPlayerInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.RoomPlayerInfo;

                                /**
                                 * Decodes a RoomPlayerInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns RoomPlayerInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.RoomPlayerInfo;

                                /**
                                 * Verifies a RoomPlayerInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a RoomPlayerInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns RoomPlayerInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.RoomPlayerInfo;

                                /**
                                 * Creates a plain object from a RoomPlayerInfo message. Also converts values to other types if specified.
                                 * @param message RoomPlayerInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.RoomPlayerInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this RoomPlayerInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a LeaveRoom. */
                            interface ILeaveRoom {

                                /** LeaveRoom playerId */
                                playerId?: (number|null);
                            }

                            /** 离开房间 */
                            class LeaveRoom implements ILeaveRoom {

                                /**
                                 * Constructs a new LeaveRoom.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ILeaveRoom);

                                /** LeaveRoom playerId. */
                                public playerId: number;

                                /**
                                 * Creates a new LeaveRoom instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns LeaveRoom instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ILeaveRoom): com.aoo.chess.comms.protocol.proto.message.LeaveRoom;

                                /**
                                 * Encodes the specified LeaveRoom message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LeaveRoom.verify|verify} messages.
                                 * @param message LeaveRoom message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ILeaveRoom, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified LeaveRoom message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LeaveRoom.verify|verify} messages.
                                 * @param message LeaveRoom message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ILeaveRoom, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a LeaveRoom message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns LeaveRoom
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.LeaveRoom;

                                /**
                                 * Decodes a LeaveRoom message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns LeaveRoom
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.LeaveRoom;

                                /**
                                 * Verifies a LeaveRoom message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a LeaveRoom message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns LeaveRoom
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.LeaveRoom;

                                /**
                                 * Creates a plain object from a LeaveRoom message. Also converts values to other types if specified.
                                 * @param message LeaveRoom
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.LeaveRoom, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this LeaveRoom to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of an ExitRoom. */
                            interface IExitRoom {

                                /** ExitRoom roomId */
                                roomId?: (number|null);
                            }

                            /** 离开房间 */
                            class ExitRoom implements IExitRoom {

                                /**
                                 * Constructs a new ExitRoom.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IExitRoom);

                                /** ExitRoom roomId. */
                                public roomId: number;

                                /**
                                 * Creates a new ExitRoom instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ExitRoom instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IExitRoom): com.aoo.chess.comms.protocol.proto.message.ExitRoom;

                                /**
                                 * Encodes the specified ExitRoom message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ExitRoom.verify|verify} messages.
                                 * @param message ExitRoom message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IExitRoom, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ExitRoom message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ExitRoom.verify|verify} messages.
                                 * @param message ExitRoom message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IExitRoom, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes an ExitRoom message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ExitRoom
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ExitRoom;

                                /**
                                 * Decodes an ExitRoom message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ExitRoom
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ExitRoom;

                                /**
                                 * Verifies an ExitRoom message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an ExitRoom message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ExitRoom
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ExitRoom;

                                /**
                                 * Creates a plain object from an ExitRoom message. Also converts values to other types if specified.
                                 * @param message ExitRoom
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ExitRoom, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ExitRoom to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ChatMessage. */
                            interface IChatMessage {

                                /** ChatMessage name */
                                name?: (string|null);

                                /** ChatMessage message */
                                message?: (string|null);

                                /** ChatMessage playerId */
                                playerId?: (number|null);
                            }

                            /** 聊天 */
                            class ChatMessage implements IChatMessage {

                                /**
                                 * Constructs a new ChatMessage.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IChatMessage);

                                /** ChatMessage name. */
                                public name: string;

                                /** ChatMessage message. */
                                public message: string;

                                /** ChatMessage playerId. */
                                public playerId: number;

                                /**
                                 * Creates a new ChatMessage instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ChatMessage instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IChatMessage): com.aoo.chess.comms.protocol.proto.message.ChatMessage;

                                /**
                                 * Encodes the specified ChatMessage message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ChatMessage.verify|verify} messages.
                                 * @param message ChatMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IChatMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ChatMessage.verify|verify} messages.
                                 * @param message ChatMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IChatMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ChatMessage message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ChatMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ChatMessage;

                                /**
                                 * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ChatMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ChatMessage;

                                /**
                                 * Verifies a ChatMessage message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ChatMessage
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ChatMessage;

                                /**
                                 * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
                                 * @param message ChatMessage
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ChatMessage, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ChatMessage to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a MatchRoom. */
                            interface IMatchRoom {

                                /** 玩家编号 */
                                playerId?: (number|null);

                                /** 排除在外的房间编号 */
                                roomId?: (number|null);
                            }

                            /** 匹配房间 */
                            class MatchRoom implements IMatchRoom {

                                /**
                                 * Constructs a new MatchRoom.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IMatchRoom);

                                /** 玩家编号 */
                                public playerId: number;

                                /** 排除在外的房间编号 */
                                public roomId: number;

                                /**
                                 * Creates a new MatchRoom instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns MatchRoom instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IMatchRoom): com.aoo.chess.comms.protocol.proto.message.MatchRoom;

                                /**
                                 * Encodes the specified MatchRoom message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.MatchRoom.verify|verify} messages.
                                 * @param message MatchRoom message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IMatchRoom, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified MatchRoom message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.MatchRoom.verify|verify} messages.
                                 * @param message MatchRoom message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IMatchRoom, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a MatchRoom message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns MatchRoom
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.MatchRoom;

                                /**
                                 * Decodes a MatchRoom message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns MatchRoom
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.MatchRoom;

                                /**
                                 * Verifies a MatchRoom message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a MatchRoom message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns MatchRoom
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.MatchRoom;

                                /**
                                 * Creates a plain object from a MatchRoom message. Also converts values to other types if specified.
                                 * @param message MatchRoom
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.MatchRoom, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this MatchRoom to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a Card. */
                            interface ICard {

                                /** Card type */
                                type?: (number|null);

                                /** Card points */
                                points?: (number|null);
                            }

                            /** 牌 */
                            class Card implements ICard {

                                /**
                                 * Constructs a new Card.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ICard);

                                /** Card type. */
                                public type: number;

                                /** Card points. */
                                public points: number;

                                /**
                                 * Creates a new Card instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Card instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ICard): com.aoo.chess.comms.protocol.proto.message.Card;

                                /**
                                 * Encodes the specified Card message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.Card.verify|verify} messages.
                                 * @param message Card message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ICard, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified Card message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.Card.verify|verify} messages.
                                 * @param message Card message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ICard, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a Card message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Card
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.Card;

                                /**
                                 * Decodes a Card message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Card
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.Card;

                                /**
                                 * Verifies a Card message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Card message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Card
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.Card;

                                /**
                                 * Creates a plain object from a Card message. Also converts values to other types if specified.
                                 * @param message Card
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.Card, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Card to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a RoomUpdateResource. */
                            interface IRoomUpdateResource {

                                /** RoomUpdateResource playerId */
                                playerId?: (number|null);

                                /** RoomUpdateResource res */
                                res?: (com.aoo.chess.comms.protocol.proto.message.IResources|null);
                            }

                            /** 房间更新资源 */
                            class RoomUpdateResource implements IRoomUpdateResource {

                                /**
                                 * Constructs a new RoomUpdateResource.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IRoomUpdateResource);

                                /** RoomUpdateResource playerId. */
                                public playerId: number;

                                /** RoomUpdateResource res. */
                                public res?: (com.aoo.chess.comms.protocol.proto.message.IResources|null);

                                /**
                                 * Creates a new RoomUpdateResource instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns RoomUpdateResource instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IRoomUpdateResource): com.aoo.chess.comms.protocol.proto.message.RoomUpdateResource;

                                /**
                                 * Encodes the specified RoomUpdateResource message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.RoomUpdateResource.verify|verify} messages.
                                 * @param message RoomUpdateResource message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IRoomUpdateResource, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified RoomUpdateResource message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.RoomUpdateResource.verify|verify} messages.
                                 * @param message RoomUpdateResource message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IRoomUpdateResource, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a RoomUpdateResource message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns RoomUpdateResource
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.RoomUpdateResource;

                                /**
                                 * Decodes a RoomUpdateResource message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns RoomUpdateResource
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.RoomUpdateResource;

                                /**
                                 * Verifies a RoomUpdateResource message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a RoomUpdateResource message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns RoomUpdateResource
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.RoomUpdateResource;

                                /**
                                 * Creates a plain object from a RoomUpdateResource message. Also converts values to other types if specified.
                                 * @param message RoomUpdateResource
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.RoomUpdateResource, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this RoomUpdateResource to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a RobotEnter. */
                            interface IRobotEnter {

                                /** RobotEnter roomId */
                                roomId?: (number|null);
                            }

                            /** Represents a RobotEnter. */
                            class RobotEnter implements IRobotEnter {

                                /**
                                 * Constructs a new RobotEnter.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IRobotEnter);

                                /** RobotEnter roomId. */
                                public roomId: number;

                                /**
                                 * Creates a new RobotEnter instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns RobotEnter instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IRobotEnter): com.aoo.chess.comms.protocol.proto.message.RobotEnter;

                                /**
                                 * Encodes the specified RobotEnter message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.RobotEnter.verify|verify} messages.
                                 * @param message RobotEnter message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IRobotEnter, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified RobotEnter message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.RobotEnter.verify|verify} messages.
                                 * @param message RobotEnter message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IRobotEnter, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a RobotEnter message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns RobotEnter
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.RobotEnter;

                                /**
                                 * Decodes a RobotEnter message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns RobotEnter
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.RobotEnter;

                                /**
                                 * Verifies a RobotEnter message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a RobotEnter message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns RobotEnter
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.RobotEnter;

                                /**
                                 * Creates a plain object from a RobotEnter message. Also converts values to other types if specified.
                                 * @param message RobotEnter
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.RobotEnter, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this RobotEnter to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** ForcedExitType enum. */
                            enum ForcedExitType {
                                LESS_MIN_GOLD = 0,
                                MORE_MAX_GOLD = 1,
                                DONOT_OPERATE = 2,
                                KICK_OUT_PLAYER = 3
                            }

                            /** Properties of a ForcedExitRoom. */
                            interface IForcedExitRoom {

                                /** ForcedExitRoom type */
                                type?: (com.aoo.chess.comms.protocol.proto.message.ForcedExitType|null);
                            }

                            /** Represents a ForcedExitRoom. */
                            class ForcedExitRoom implements IForcedExitRoom {

                                /**
                                 * Constructs a new ForcedExitRoom.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IForcedExitRoom);

                                /** ForcedExitRoom type. */
                                public type: com.aoo.chess.comms.protocol.proto.message.ForcedExitType;

                                /**
                                 * Creates a new ForcedExitRoom instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ForcedExitRoom instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IForcedExitRoom): com.aoo.chess.comms.protocol.proto.message.ForcedExitRoom;

                                /**
                                 * Encodes the specified ForcedExitRoom message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ForcedExitRoom.verify|verify} messages.
                                 * @param message ForcedExitRoom message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IForcedExitRoom, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ForcedExitRoom message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ForcedExitRoom.verify|verify} messages.
                                 * @param message ForcedExitRoom message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IForcedExitRoom, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ForcedExitRoom message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ForcedExitRoom
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ForcedExitRoom;

                                /**
                                 * Decodes a ForcedExitRoom message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ForcedExitRoom
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ForcedExitRoom;

                                /**
                                 * Verifies a ForcedExitRoom message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ForcedExitRoom message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ForcedExitRoom
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ForcedExitRoom;

                                /**
                                 * Creates a plain object from a ForcedExitRoom message. Also converts values to other types if specified.
                                 * @param message ForcedExitRoom
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ForcedExitRoom, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ForcedExitRoom to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a PlayerInfo. */
                            interface IPlayerInfo {

                                /** 玩家编号 */
                                id?: (number|null);

                                /** 名称 */
                                name?: (string|null);

                                /** 签名 */
                                sign?: (string|null);

                                /** 头像 */
                                icon?: (string|null);

                                /** vip积分 */
                                vipPoints?: (number|null);

                                /** 资源 */
                                res?: (com.aoo.chess.comms.protocol.proto.message.IResources[]|null);

                                /** 总胜利场数 */
                                winCount?: (number|null);

                                /** 总场数 */
                                totleCount?: (number|null);

                                /** 房間編號 */
                                roomId?: (number|null);

                                /** 当前座驾 */
                                car?: (number|null);

                                /** 道具 */
                                props?: (com.aoo.chess.comms.protocol.proto.message.IProp[]|null);

                                /** 是否改过名字 */
                                modifyName?: (boolean|null);

                                /** 性別 */
                                sex?: (boolean|null);
                            }

                            /** 玩家信息 */
                            class PlayerInfo implements IPlayerInfo {

                                /**
                                 * Constructs a new PlayerInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerInfo);

                                /** 玩家编号 */
                                public id: number;

                                /** 名称 */
                                public name: string;

                                /** 签名 */
                                public sign: string;

                                /** 头像 */
                                public icon: string;

                                /** vip积分 */
                                public vipPoints: number;

                                /** 资源 */
                                public res: com.aoo.chess.comms.protocol.proto.message.IResources[];

                                /** 总胜利场数 */
                                public winCount: number;

                                /** 总场数 */
                                public totleCount: number;

                                /** 房間編號 */
                                public roomId: number;

                                /** 当前座驾 */
                                public car: number;

                                /** 道具 */
                                public props: com.aoo.chess.comms.protocol.proto.message.IProp[];

                                /** 是否改过名字 */
                                public modifyName: boolean;

                                /** 性別 */
                                public sex: boolean;

                                /**
                                 * Creates a new PlayerInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns PlayerInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerInfo): com.aoo.chess.comms.protocol.proto.message.PlayerInfo;

                                /**
                                 * Encodes the specified PlayerInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerInfo.verify|verify} messages.
                                 * @param message PlayerInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerInfo.verify|verify} messages.
                                 * @param message PlayerInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a PlayerInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns PlayerInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.PlayerInfo;

                                /**
                                 * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns PlayerInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.PlayerInfo;

                                /**
                                 * Verifies a PlayerInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns PlayerInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.PlayerInfo;

                                /**
                                 * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
                                 * @param message PlayerInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.PlayerInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this PlayerInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a Resources. */
                            interface IResources {

                                /** 资源编号 */
                                resourceId?: (number|null);

                                /** 资源编号 */
                                val?: (number|Long|null);
                            }

                            /** 玩家资源 */
                            class Resources implements IResources {

                                /**
                                 * Constructs a new Resources.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IResources);

                                /** 资源编号 */
                                public resourceId: number;

                                /** 资源编号 */
                                public val: (number|Long);

                                /**
                                 * Creates a new Resources instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Resources instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IResources): com.aoo.chess.comms.protocol.proto.message.Resources;

                                /**
                                 * Encodes the specified Resources message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.Resources.verify|verify} messages.
                                 * @param message Resources message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IResources, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified Resources message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.Resources.verify|verify} messages.
                                 * @param message Resources message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IResources, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a Resources message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Resources
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.Resources;

                                /**
                                 * Decodes a Resources message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Resources
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.Resources;

                                /**
                                 * Verifies a Resources message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Resources message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Resources
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.Resources;

                                /**
                                 * Creates a plain object from a Resources message. Also converts values to other types if specified.
                                 * @param message Resources
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.Resources, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Resources to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a PlayerSimpleInfo. */
                            interface IPlayerSimpleInfo {

                                /** 编号 */
                                id?: (number|null);

                                /** 名称 */
                                name?: (string|null);

                                /** 头像 */
                                icon?: (string|null);

                                /** PlayerSimpleInfo vipPoints */
                                vipPoints?: (number|null);

                                /** 资源 */
                                res?: (com.aoo.chess.comms.protocol.proto.message.IResources[]|null);

                                /** 总胜利场数 */
                                winCount?: (number|null);

                                /** 总场数 */
                                totleCount?: (number|null);

                                /** 当前座驾 */
                                car?: (number|null);

                                /** PlayerSimpleInfo sex */
                                sex?: (boolean|null);
                            }

                            /** Represents a PlayerSimpleInfo. */
                            class PlayerSimpleInfo implements IPlayerSimpleInfo {

                                /**
                                 * Constructs a new PlayerSimpleInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerSimpleInfo);

                                /** 编号 */
                                public id: number;

                                /** 名称 */
                                public name: string;

                                /** 头像 */
                                public icon: string;

                                /** PlayerSimpleInfo vipPoints. */
                                public vipPoints: number;

                                /** 资源 */
                                public res: com.aoo.chess.comms.protocol.proto.message.IResources[];

                                /** 总胜利场数 */
                                public winCount: number;

                                /** 总场数 */
                                public totleCount: number;

                                /** 当前座驾 */
                                public car: number;

                                /** PlayerSimpleInfo sex. */
                                public sex: boolean;

                                /**
                                 * Creates a new PlayerSimpleInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns PlayerSimpleInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerSimpleInfo): com.aoo.chess.comms.protocol.proto.message.PlayerSimpleInfo;

                                /**
                                 * Encodes the specified PlayerSimpleInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerSimpleInfo.verify|verify} messages.
                                 * @param message PlayerSimpleInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IPlayerSimpleInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified PlayerSimpleInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerSimpleInfo.verify|verify} messages.
                                 * @param message PlayerSimpleInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IPlayerSimpleInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a PlayerSimpleInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns PlayerSimpleInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.PlayerSimpleInfo;

                                /**
                                 * Decodes a PlayerSimpleInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns PlayerSimpleInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.PlayerSimpleInfo;

                                /**
                                 * Verifies a PlayerSimpleInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a PlayerSimpleInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns PlayerSimpleInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.PlayerSimpleInfo;

                                /**
                                 * Creates a plain object from a PlayerSimpleInfo message. Also converts values to other types if specified.
                                 * @param message PlayerSimpleInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.PlayerSimpleInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this PlayerSimpleInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ModifyPlayerInfo. */
                            interface IModifyPlayerInfo {

                                /** ModifyPlayerInfo name */
                                name?: (string|null);

                                /** ModifyPlayerInfo sign */
                                sign?: (string|null);

                                /** ModifyPlayerInfo sex */
                                sex?: (boolean|null);
                            }

                            /** Represents a ModifyPlayerInfo. */
                            class ModifyPlayerInfo implements IModifyPlayerInfo {

                                /**
                                 * Constructs a new ModifyPlayerInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IModifyPlayerInfo);

                                /** ModifyPlayerInfo name. */
                                public name: string;

                                /** ModifyPlayerInfo sign. */
                                public sign: string;

                                /** ModifyPlayerInfo sex. */
                                public sex: boolean;

                                /**
                                 * Creates a new ModifyPlayerInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ModifyPlayerInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IModifyPlayerInfo): com.aoo.chess.comms.protocol.proto.message.ModifyPlayerInfo;

                                /**
                                 * Encodes the specified ModifyPlayerInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ModifyPlayerInfo.verify|verify} messages.
                                 * @param message ModifyPlayerInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IModifyPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ModifyPlayerInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ModifyPlayerInfo.verify|verify} messages.
                                 * @param message ModifyPlayerInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IModifyPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ModifyPlayerInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ModifyPlayerInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ModifyPlayerInfo;

                                /**
                                 * Decodes a ModifyPlayerInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ModifyPlayerInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ModifyPlayerInfo;

                                /**
                                 * Verifies a ModifyPlayerInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ModifyPlayerInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ModifyPlayerInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ModifyPlayerInfo;

                                /**
                                 * Creates a plain object from a ModifyPlayerInfo message. Also converts values to other types if specified.
                                 * @param message ModifyPlayerInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ModifyPlayerInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ModifyPlayerInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a GainOtherPlayerInfo. */
                            interface IGainOtherPlayerInfo {

                                /** GainOtherPlayerInfo playerId */
                                playerId?: (number|null);
                            }

                            /** Represents a GainOtherPlayerInfo. */
                            class GainOtherPlayerInfo implements IGainOtherPlayerInfo {

                                /**
                                 * Constructs a new GainOtherPlayerInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IGainOtherPlayerInfo);

                                /** GainOtherPlayerInfo playerId. */
                                public playerId: number;

                                /**
                                 * Creates a new GainOtherPlayerInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns GainOtherPlayerInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IGainOtherPlayerInfo): com.aoo.chess.comms.protocol.proto.message.GainOtherPlayerInfo;

                                /**
                                 * Encodes the specified GainOtherPlayerInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.GainOtherPlayerInfo.verify|verify} messages.
                                 * @param message GainOtherPlayerInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IGainOtherPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified GainOtherPlayerInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.GainOtherPlayerInfo.verify|verify} messages.
                                 * @param message GainOtherPlayerInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IGainOtherPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a GainOtherPlayerInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns GainOtherPlayerInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.GainOtherPlayerInfo;

                                /**
                                 * Decodes a GainOtherPlayerInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns GainOtherPlayerInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.GainOtherPlayerInfo;

                                /**
                                 * Verifies a GainOtherPlayerInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a GainOtherPlayerInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns GainOtherPlayerInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.GainOtherPlayerInfo;

                                /**
                                 * Creates a plain object from a GainOtherPlayerInfo message. Also converts values to other types if specified.
                                 * @param message GainOtherPlayerInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.GainOtherPlayerInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this GainOtherPlayerInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of an OtherPlayerInfo. */
                            interface IOtherPlayerInfo {

                                /** 玩家编号 */
                                id?: (number|null);

                                /** 名称 */
                                name?: (string|null);

                                /** 签名 */
                                sign?: (string|null);

                                /** 头像 */
                                icon?: (string|null);

                                /** vip积分 */
                                vipPoints?: (number|null);

                                /** 资源 */
                                res?: (com.aoo.chess.comms.protocol.proto.message.IResources[]|null);

                                /** 总胜利场数 */
                                winCount?: (number|null);

                                /** 总场数 */
                                totleCount?: (number|null);

                                /** 当前座驾 */
                                car?: (number|null);

                                /** 道具 */
                                props?: (com.aoo.chess.comms.protocol.proto.message.IProp[]|null);

                                /** 性別 */
                                sex?: (boolean|null);
                            }

                            /** Represents an OtherPlayerInfo. */
                            class OtherPlayerInfo implements IOtherPlayerInfo {

                                /**
                                 * Constructs a new OtherPlayerInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IOtherPlayerInfo);

                                /** 玩家编号 */
                                public id: number;

                                /** 名称 */
                                public name: string;

                                /** 签名 */
                                public sign: string;

                                /** 头像 */
                                public icon: string;

                                /** vip积分 */
                                public vipPoints: number;

                                /** 资源 */
                                public res: com.aoo.chess.comms.protocol.proto.message.IResources[];

                                /** 总胜利场数 */
                                public winCount: number;

                                /** 总场数 */
                                public totleCount: number;

                                /** 当前座驾 */
                                public car: number;

                                /** 道具 */
                                public props: com.aoo.chess.comms.protocol.proto.message.IProp[];

                                /** 性別 */
                                public sex: boolean;

                                /**
                                 * Creates a new OtherPlayerInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns OtherPlayerInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IOtherPlayerInfo): com.aoo.chess.comms.protocol.proto.message.OtherPlayerInfo;

                                /**
                                 * Encodes the specified OtherPlayerInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.OtherPlayerInfo.verify|verify} messages.
                                 * @param message OtherPlayerInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IOtherPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified OtherPlayerInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.OtherPlayerInfo.verify|verify} messages.
                                 * @param message OtherPlayerInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IOtherPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes an OtherPlayerInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns OtherPlayerInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.OtherPlayerInfo;

                                /**
                                 * Decodes an OtherPlayerInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns OtherPlayerInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.OtherPlayerInfo;

                                /**
                                 * Verifies an OtherPlayerInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an OtherPlayerInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns OtherPlayerInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.OtherPlayerInfo;

                                /**
                                 * Creates a plain object from an OtherPlayerInfo message. Also converts values to other types if specified.
                                 * @param message OtherPlayerInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.OtherPlayerInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this OtherPlayerInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a PlayerOpt. */
                            interface IPlayerOpt {

                                /** PlayerOpt optType */
                                optType?: (number|null);

                                /** PlayerOpt playerId */
                                playerId?: (number|null);
                            }

                            /** Represents a PlayerOpt. */
                            class PlayerOpt implements IPlayerOpt {

                                /**
                                 * Constructs a new PlayerOpt.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerOpt);

                                /** PlayerOpt optType. */
                                public optType: number;

                                /** PlayerOpt playerId. */
                                public playerId: number;

                                /**
                                 * Creates a new PlayerOpt instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns PlayerOpt instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerOpt): com.aoo.chess.comms.protocol.proto.message.PlayerOpt;

                                /**
                                 * Encodes the specified PlayerOpt message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerOpt.verify|verify} messages.
                                 * @param message PlayerOpt message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IPlayerOpt, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified PlayerOpt message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerOpt.verify|verify} messages.
                                 * @param message PlayerOpt message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IPlayerOpt, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a PlayerOpt message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns PlayerOpt
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.PlayerOpt;

                                /**
                                 * Decodes a PlayerOpt message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns PlayerOpt
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.PlayerOpt;

                                /**
                                 * Verifies a PlayerOpt message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a PlayerOpt message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns PlayerOpt
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.PlayerOpt;

                                /**
                                 * Creates a plain object from a PlayerOpt message. Also converts values to other types if specified.
                                 * @param message PlayerOpt
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.PlayerOpt, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this PlayerOpt to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of an OffLinePlayer. */
                            interface IOffLinePlayer {
                            }

                            /** Represents an OffLinePlayer. */
                            class OffLinePlayer implements IOffLinePlayer {

                                /**
                                 * Constructs a new OffLinePlayer.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IOffLinePlayer);

                                /**
                                 * Creates a new OffLinePlayer instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns OffLinePlayer instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IOffLinePlayer): com.aoo.chess.comms.protocol.proto.message.OffLinePlayer;

                                /**
                                 * Encodes the specified OffLinePlayer message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.OffLinePlayer.verify|verify} messages.
                                 * @param message OffLinePlayer message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IOffLinePlayer, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified OffLinePlayer message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.OffLinePlayer.verify|verify} messages.
                                 * @param message OffLinePlayer message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IOffLinePlayer, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes an OffLinePlayer message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns OffLinePlayer
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.OffLinePlayer;

                                /**
                                 * Decodes an OffLinePlayer message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns OffLinePlayer
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.OffLinePlayer;

                                /**
                                 * Verifies an OffLinePlayer message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an OffLinePlayer message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns OffLinePlayer
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.OffLinePlayer;

                                /**
                                 * Creates a plain object from an OffLinePlayer message. Also converts values to other types if specified.
                                 * @param message OffLinePlayer
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.OffLinePlayer, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this OffLinePlayer to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ChangeSafeMoney. */
                            interface IChangeSafeMoney {

                                /** ChangeSafeMoney type */
                                type?: (number|null);

                                /** ChangeSafeMoney gold */
                                gold?: (number|null);
                            }

                            /** Represents a ChangeSafeMoney. */
                            class ChangeSafeMoney implements IChangeSafeMoney {

                                /**
                                 * Constructs a new ChangeSafeMoney.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IChangeSafeMoney);

                                /** ChangeSafeMoney type. */
                                public type: number;

                                /** ChangeSafeMoney gold. */
                                public gold: number;

                                /**
                                 * Creates a new ChangeSafeMoney instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ChangeSafeMoney instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IChangeSafeMoney): com.aoo.chess.comms.protocol.proto.message.ChangeSafeMoney;

                                /**
                                 * Encodes the specified ChangeSafeMoney message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ChangeSafeMoney.verify|verify} messages.
                                 * @param message ChangeSafeMoney message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IChangeSafeMoney, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ChangeSafeMoney message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ChangeSafeMoney.verify|verify} messages.
                                 * @param message ChangeSafeMoney message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IChangeSafeMoney, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ChangeSafeMoney message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ChangeSafeMoney
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ChangeSafeMoney;

                                /**
                                 * Decodes a ChangeSafeMoney message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ChangeSafeMoney
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ChangeSafeMoney;

                                /**
                                 * Verifies a ChangeSafeMoney message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ChangeSafeMoney message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ChangeSafeMoney
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ChangeSafeMoney;

                                /**
                                 * Creates a plain object from a ChangeSafeMoney message. Also converts values to other types if specified.
                                 * @param message ChangeSafeMoney
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ChangeSafeMoney, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ChangeSafeMoney to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a PlayerStatMessage. */
                            interface IPlayerStatMessage {

                                /** PlayerStatMessage kickOutCount */
                                kickOutCount?: (number|null);
                            }

                            /** Represents a PlayerStatMessage. */
                            class PlayerStatMessage implements IPlayerStatMessage {

                                /**
                                 * Constructs a new PlayerStatMessage.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerStatMessage);

                                /** PlayerStatMessage kickOutCount. */
                                public kickOutCount: number;

                                /**
                                 * Creates a new PlayerStatMessage instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns PlayerStatMessage instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerStatMessage): com.aoo.chess.comms.protocol.proto.message.PlayerStatMessage;

                                /**
                                 * Encodes the specified PlayerStatMessage message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerStatMessage.verify|verify} messages.
                                 * @param message PlayerStatMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IPlayerStatMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified PlayerStatMessage message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerStatMessage.verify|verify} messages.
                                 * @param message PlayerStatMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IPlayerStatMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a PlayerStatMessage message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns PlayerStatMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.PlayerStatMessage;

                                /**
                                 * Decodes a PlayerStatMessage message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns PlayerStatMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.PlayerStatMessage;

                                /**
                                 * Verifies a PlayerStatMessage message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a PlayerStatMessage message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns PlayerStatMessage
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.PlayerStatMessage;

                                /**
                                 * Creates a plain object from a PlayerStatMessage message. Also converts values to other types if specified.
                                 * @param message PlayerStatMessage
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.PlayerStatMessage, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this PlayerStatMessage to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a GiftGiving. */
                            interface IGiftGiving {

                                /** GiftGiving playerId */
                                playerId?: (number|null);

                                /** GiftGiving givingPlayerId */
                                givingPlayerId?: (number|null);

                                /** GiftGiving resourcesId */
                                resourcesId?: (number|null);
                            }

                            /** Represents a GiftGiving. */
                            class GiftGiving implements IGiftGiving {

                                /**
                                 * Constructs a new GiftGiving.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IGiftGiving);

                                /** GiftGiving playerId. */
                                public playerId: number;

                                /** GiftGiving givingPlayerId. */
                                public givingPlayerId: number;

                                /** GiftGiving resourcesId. */
                                public resourcesId: number;

                                /**
                                 * Creates a new GiftGiving instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns GiftGiving instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IGiftGiving): com.aoo.chess.comms.protocol.proto.message.GiftGiving;

                                /**
                                 * Encodes the specified GiftGiving message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.GiftGiving.verify|verify} messages.
                                 * @param message GiftGiving message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IGiftGiving, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified GiftGiving message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.GiftGiving.verify|verify} messages.
                                 * @param message GiftGiving message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IGiftGiving, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a GiftGiving message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns GiftGiving
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.GiftGiving;

                                /**
                                 * Decodes a GiftGiving message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns GiftGiving
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.GiftGiving;

                                /**
                                 * Verifies a GiftGiving message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a GiftGiving message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns GiftGiving
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.GiftGiving;

                                /**
                                 * Creates a plain object from a GiftGiving message. Also converts values to other types if specified.
                                 * @param message GiftGiving
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.GiftGiving, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this GiftGiving to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a DrawMoneyTreeResult. */
                            interface IDrawMoneyTreeResult {

                                /** DrawMoneyTreeResult gold */
                                gold?: (number|Long|null);

                                /** DrawMoneyTreeResult time */
                                time?: (number|Long|null);
                            }

                            /** Represents a DrawMoneyTreeResult. */
                            class DrawMoneyTreeResult implements IDrawMoneyTreeResult {

                                /**
                                 * Constructs a new DrawMoneyTreeResult.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IDrawMoneyTreeResult);

                                /** DrawMoneyTreeResult gold. */
                                public gold: (number|Long);

                                /** DrawMoneyTreeResult time. */
                                public time: (number|Long);

                                /**
                                 * Creates a new DrawMoneyTreeResult instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns DrawMoneyTreeResult instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IDrawMoneyTreeResult): com.aoo.chess.comms.protocol.proto.message.DrawMoneyTreeResult;

                                /**
                                 * Encodes the specified DrawMoneyTreeResult message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.DrawMoneyTreeResult.verify|verify} messages.
                                 * @param message DrawMoneyTreeResult message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IDrawMoneyTreeResult, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified DrawMoneyTreeResult message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.DrawMoneyTreeResult.verify|verify} messages.
                                 * @param message DrawMoneyTreeResult message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IDrawMoneyTreeResult, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a DrawMoneyTreeResult message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns DrawMoneyTreeResult
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.DrawMoneyTreeResult;

                                /**
                                 * Decodes a DrawMoneyTreeResult message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns DrawMoneyTreeResult
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.DrawMoneyTreeResult;

                                /**
                                 * Verifies a DrawMoneyTreeResult message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a DrawMoneyTreeResult message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns DrawMoneyTreeResult
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.DrawMoneyTreeResult;

                                /**
                                 * Creates a plain object from a DrawMoneyTreeResult message. Also converts values to other types if specified.
                                 * @param message DrawMoneyTreeResult
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.DrawMoneyTreeResult, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this DrawMoneyTreeResult to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of an ExchangeResource. */
                            interface IExchangeResource {

                                /** ExchangeResource resourceId */
                                resourceId?: (number|null);

                                /** ExchangeResource num */
                                num?: (number|null);
                            }

                            /** Represents an ExchangeResource. */
                            class ExchangeResource implements IExchangeResource {

                                /**
                                 * Constructs a new ExchangeResource.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IExchangeResource);

                                /** ExchangeResource resourceId. */
                                public resourceId: number;

                                /** ExchangeResource num. */
                                public num: number;

                                /**
                                 * Creates a new ExchangeResource instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ExchangeResource instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IExchangeResource): com.aoo.chess.comms.protocol.proto.message.ExchangeResource;

                                /**
                                 * Encodes the specified ExchangeResource message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ExchangeResource.verify|verify} messages.
                                 * @param message ExchangeResource message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IExchangeResource, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ExchangeResource message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ExchangeResource.verify|verify} messages.
                                 * @param message ExchangeResource message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IExchangeResource, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes an ExchangeResource message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ExchangeResource
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ExchangeResource;

                                /**
                                 * Decodes an ExchangeResource message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ExchangeResource
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ExchangeResource;

                                /**
                                 * Verifies an ExchangeResource message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an ExchangeResource message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ExchangeResource
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ExchangeResource;

                                /**
                                 * Creates a plain object from an ExchangeResource message. Also converts values to other types if specified.
                                 * @param message ExchangeResource
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ExchangeResource, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ExchangeResource to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ReCustomerMsg. */
                            interface IReCustomerMsg {

                                /** ReCustomerMsg playerId */
                                playerId?: (number|null);

                                /** ReCustomerMsg id */
                                id?: (number|Long|null);

                                /** ReCustomerMsg msg */
                                msg?: (string|null);

                                /** ReCustomerMsg time */
                                time?: (number|Long|null);
                            }

                            /** Represents a ReCustomerMsg. */
                            class ReCustomerMsg implements IReCustomerMsg {

                                /**
                                 * Constructs a new ReCustomerMsg.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IReCustomerMsg);

                                /** ReCustomerMsg playerId. */
                                public playerId: number;

                                /** ReCustomerMsg id. */
                                public id: (number|Long);

                                /** ReCustomerMsg msg. */
                                public msg: string;

                                /** ReCustomerMsg time. */
                                public time: (number|Long);

                                /**
                                 * Creates a new ReCustomerMsg instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ReCustomerMsg instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IReCustomerMsg): com.aoo.chess.comms.protocol.proto.message.ReCustomerMsg;

                                /**
                                 * Encodes the specified ReCustomerMsg message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ReCustomerMsg.verify|verify} messages.
                                 * @param message ReCustomerMsg message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IReCustomerMsg, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ReCustomerMsg message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ReCustomerMsg.verify|verify} messages.
                                 * @param message ReCustomerMsg message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IReCustomerMsg, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ReCustomerMsg message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ReCustomerMsg
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ReCustomerMsg;

                                /**
                                 * Decodes a ReCustomerMsg message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ReCustomerMsg
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ReCustomerMsg;

                                /**
                                 * Verifies a ReCustomerMsg message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ReCustomerMsg message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ReCustomerMsg
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ReCustomerMsg;

                                /**
                                 * Creates a plain object from a ReCustomerMsg message. Also converts values to other types if specified.
                                 * @param message ReCustomerMsg
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ReCustomerMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ReCustomerMsg to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a CustomerMsgInfoList. */
                            interface ICustomerMsgInfoList {

                                /** CustomerMsgInfoList lastSendTime */
                                lastSendTime?: (number|Long|null);

                                /** CustomerMsgInfoList infos */
                                infos?: (com.aoo.chess.comms.protocol.proto.message.ICustomerMsgInfo[]|null);
                            }

                            /** Represents a CustomerMsgInfoList. */
                            class CustomerMsgInfoList implements ICustomerMsgInfoList {

                                /**
                                 * Constructs a new CustomerMsgInfoList.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ICustomerMsgInfoList);

                                /** CustomerMsgInfoList lastSendTime. */
                                public lastSendTime: (number|Long);

                                /** CustomerMsgInfoList infos. */
                                public infos: com.aoo.chess.comms.protocol.proto.message.ICustomerMsgInfo[];

                                /**
                                 * Creates a new CustomerMsgInfoList instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns CustomerMsgInfoList instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ICustomerMsgInfoList): com.aoo.chess.comms.protocol.proto.message.CustomerMsgInfoList;

                                /**
                                 * Encodes the specified CustomerMsgInfoList message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.CustomerMsgInfoList.verify|verify} messages.
                                 * @param message CustomerMsgInfoList message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ICustomerMsgInfoList, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified CustomerMsgInfoList message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.CustomerMsgInfoList.verify|verify} messages.
                                 * @param message CustomerMsgInfoList message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ICustomerMsgInfoList, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a CustomerMsgInfoList message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns CustomerMsgInfoList
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.CustomerMsgInfoList;

                                /**
                                 * Decodes a CustomerMsgInfoList message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns CustomerMsgInfoList
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.CustomerMsgInfoList;

                                /**
                                 * Verifies a CustomerMsgInfoList message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a CustomerMsgInfoList message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns CustomerMsgInfoList
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.CustomerMsgInfoList;

                                /**
                                 * Creates a plain object from a CustomerMsgInfoList message. Also converts values to other types if specified.
                                 * @param message CustomerMsgInfoList
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.CustomerMsgInfoList, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this CustomerMsgInfoList to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** CustomerMsgType enum. */
                            enum CustomerMsgType {
                                TYPE_PLAYER = 0,
                                TYPE_CUSTOMER = 1
                            }

                            /** Properties of a CustomerMsgInfo. */
                            interface ICustomerMsgInfo {

                                /** CustomerMsgInfo type */
                                type?: (com.aoo.chess.comms.protocol.proto.message.CustomerMsgType|null);

                                /** CustomerMsgInfo msg */
                                msg?: (string|null);

                                /** CustomerMsgInfo time */
                                time?: (number|Long|null);
                            }

                            /** Represents a CustomerMsgInfo. */
                            class CustomerMsgInfo implements ICustomerMsgInfo {

                                /**
                                 * Constructs a new CustomerMsgInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ICustomerMsgInfo);

                                /** CustomerMsgInfo type. */
                                public type: com.aoo.chess.comms.protocol.proto.message.CustomerMsgType;

                                /** CustomerMsgInfo msg. */
                                public msg: string;

                                /** CustomerMsgInfo time. */
                                public time: (number|Long);

                                /**
                                 * Creates a new CustomerMsgInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns CustomerMsgInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ICustomerMsgInfo): com.aoo.chess.comms.protocol.proto.message.CustomerMsgInfo;

                                /**
                                 * Encodes the specified CustomerMsgInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.CustomerMsgInfo.verify|verify} messages.
                                 * @param message CustomerMsgInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ICustomerMsgInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified CustomerMsgInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.CustomerMsgInfo.verify|verify} messages.
                                 * @param message CustomerMsgInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ICustomerMsgInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a CustomerMsgInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns CustomerMsgInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.CustomerMsgInfo;

                                /**
                                 * Decodes a CustomerMsgInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns CustomerMsgInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.CustomerMsgInfo;

                                /**
                                 * Verifies a CustomerMsgInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a CustomerMsgInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns CustomerMsgInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.CustomerMsgInfo;

                                /**
                                 * Creates a plain object from a CustomerMsgInfo message. Also converts values to other types if specified.
                                 * @param message CustomerMsgInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.CustomerMsgInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this CustomerMsgInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a PlayerLoginAwardMessage. */
                            interface IPlayerLoginAwardMessage {

                                /** PlayerLoginAwardMessage day */
                                day?: (number|null);

                                /** PlayerLoginAwardMessage draw */
                                draw?: (boolean|null);
                            }

                            /** Represents a PlayerLoginAwardMessage. */
                            class PlayerLoginAwardMessage implements IPlayerLoginAwardMessage {

                                /**
                                 * Constructs a new PlayerLoginAwardMessage.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerLoginAwardMessage);

                                /** PlayerLoginAwardMessage day. */
                                public day: number;

                                /** PlayerLoginAwardMessage draw. */
                                public draw: boolean;

                                /**
                                 * Creates a new PlayerLoginAwardMessage instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns PlayerLoginAwardMessage instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerLoginAwardMessage): com.aoo.chess.comms.protocol.proto.message.PlayerLoginAwardMessage;

                                /**
                                 * Encodes the specified PlayerLoginAwardMessage message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerLoginAwardMessage.verify|verify} messages.
                                 * @param message PlayerLoginAwardMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IPlayerLoginAwardMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified PlayerLoginAwardMessage message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerLoginAwardMessage.verify|verify} messages.
                                 * @param message PlayerLoginAwardMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IPlayerLoginAwardMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a PlayerLoginAwardMessage message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns PlayerLoginAwardMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.PlayerLoginAwardMessage;

                                /**
                                 * Decodes a PlayerLoginAwardMessage message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns PlayerLoginAwardMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.PlayerLoginAwardMessage;

                                /**
                                 * Verifies a PlayerLoginAwardMessage message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a PlayerLoginAwardMessage message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns PlayerLoginAwardMessage
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.PlayerLoginAwardMessage;

                                /**
                                 * Creates a plain object from a PlayerLoginAwardMessage message. Also converts values to other types if specified.
                                 * @param message PlayerLoginAwardMessage
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.PlayerLoginAwardMessage, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this PlayerLoginAwardMessage to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a Prop. */
                            interface IProp {

                                /** Prop propId */
                                propId?: (number|null);

                                /** Prop num */
                                num?: (number|null);
                            }

                            /** Represents a Prop. */
                            class Prop implements IProp {

                                /**
                                 * Constructs a new Prop.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IProp);

                                /** Prop propId. */
                                public propId: number;

                                /** Prop num. */
                                public num: number;

                                /**
                                 * Creates a new Prop instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Prop instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IProp): com.aoo.chess.comms.protocol.proto.message.Prop;

                                /**
                                 * Encodes the specified Prop message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.Prop.verify|verify} messages.
                                 * @param message Prop message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IProp, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified Prop message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.Prop.verify|verify} messages.
                                 * @param message Prop message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IProp, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a Prop message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Prop
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.Prop;

                                /**
                                 * Decodes a Prop message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Prop
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.Prop;

                                /**
                                 * Verifies a Prop message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Prop message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Prop
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.Prop;

                                /**
                                 * Creates a plain object from a Prop message. Also converts values to other types if specified.
                                 * @param message Prop
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.Prop, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Prop to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a Ready. */
                            interface IReady {

                                /** Ready playerId */
                                playerId?: (number|null);
                            }

                            /** 玩家准备 */
                            class Ready implements IReady {

                                /**
                                 * Constructs a new Ready.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IReady);

                                /** Ready playerId. */
                                public playerId: number;

                                /**
                                 * Creates a new Ready instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Ready instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IReady): com.aoo.chess.comms.protocol.proto.message.Ready;

                                /**
                                 * Encodes the specified Ready message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.Ready.verify|verify} messages.
                                 * @param message Ready message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IReady, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified Ready message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.Ready.verify|verify} messages.
                                 * @param message Ready message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IReady, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a Ready message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Ready
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.Ready;

                                /**
                                 * Decodes a Ready message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Ready
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.Ready;

                                /**
                                 * Verifies a Ready message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Ready message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Ready
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.Ready;

                                /**
                                 * Creates a plain object from a Ready message. Also converts values to other types if specified.
                                 * @param message Ready
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.Ready, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Ready to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ZhajinhuaRoomInfo. */
                            interface IZhajinhuaRoomInfo {

                                /** 当前轮数 */
                                round?: (number|null);

                                /** 时间 */
                                times?: (number|null);

                                /** 总押注金额 */
                                totleBetGold?: (number|null);

                                /** 房间中的玩家信息 */
                                infos?: (com.aoo.chess.comms.protocol.proto.message.IRoomPlayerInfo[]|null);

                                /** 庄家位置 */
                                bankerIndex?: (number|null);

                                /** 当前状态 */
                                state?: (number|null);

                                /** ZhajinhuaRoomInfo look */
                                look?: (boolean|null);

                                /** 最后押注的金额 */
                                lastBetGold?: (number|null);

                                /** 自己的牌 如果看牌了就会发送 */
                                cards?: (com.aoo.chess.comms.protocol.proto.message.IZhajinhuaCards|null);

                                /** 当前出售的玩家编号 */
                                currPlayerId?: (number|null);
                            }

                            /** 扎金花房间信息 */
                            class ZhajinhuaRoomInfo implements IZhajinhuaRoomInfo {

                                /**
                                 * Constructs a new ZhajinhuaRoomInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaRoomInfo);

                                /** 当前轮数 */
                                public round: number;

                                /** 时间 */
                                public times: number;

                                /** 总押注金额 */
                                public totleBetGold: number;

                                /** 房间中的玩家信息 */
                                public infos: com.aoo.chess.comms.protocol.proto.message.IRoomPlayerInfo[];

                                /** 庄家位置 */
                                public bankerIndex: number;

                                /** 当前状态 */
                                public state: number;

                                /** ZhajinhuaRoomInfo look. */
                                public look: boolean;

                                /** 最后押注的金额 */
                                public lastBetGold: number;

                                /** 自己的牌 如果看牌了就会发送 */
                                public cards?: (com.aoo.chess.comms.protocol.proto.message.IZhajinhuaCards|null);

                                /** 当前出售的玩家编号 */
                                public currPlayerId: number;

                                /**
                                 * Creates a new ZhajinhuaRoomInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ZhajinhuaRoomInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaRoomInfo): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaRoomInfo;

                                /**
                                 * Encodes the specified ZhajinhuaRoomInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ZhajinhuaRoomInfo.verify|verify} messages.
                                 * @param message ZhajinhuaRoomInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ZhajinhuaRoomInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ZhajinhuaRoomInfo.verify|verify} messages.
                                 * @param message ZhajinhuaRoomInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ZhajinhuaRoomInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ZhajinhuaRoomInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaRoomInfo;

                                /**
                                 * Decodes a ZhajinhuaRoomInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ZhajinhuaRoomInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaRoomInfo;

                                /**
                                 * Verifies a ZhajinhuaRoomInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ZhajinhuaRoomInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ZhajinhuaRoomInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaRoomInfo;

                                /**
                                 * Creates a plain object from a ZhajinhuaRoomInfo message. Also converts values to other types if specified.
                                 * @param message ZhajinhuaRoomInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ZhajinhuaRoomInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ZhajinhuaRoomInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a LookCard. */
                            interface ILookCard {

                                /** LookCard playerId */
                                playerId?: (number|null);
                            }

                            /** Represents a LookCard. */
                            class LookCard implements ILookCard {

                                /**
                                 * Constructs a new LookCard.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ILookCard);

                                /** LookCard playerId. */
                                public playerId: number;

                                /**
                                 * Creates a new LookCard instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns LookCard instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ILookCard): com.aoo.chess.comms.protocol.proto.message.LookCard;

                                /**
                                 * Encodes the specified LookCard message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LookCard.verify|verify} messages.
                                 * @param message LookCard message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ILookCard, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified LookCard message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LookCard.verify|verify} messages.
                                 * @param message LookCard message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ILookCard, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a LookCard message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns LookCard
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.LookCard;

                                /**
                                 * Decodes a LookCard message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns LookCard
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.LookCard;

                                /**
                                 * Verifies a LookCard message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a LookCard message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns LookCard
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.LookCard;

                                /**
                                 * Creates a plain object from a LookCard message. Also converts values to other types if specified.
                                 * @param message LookCard
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.LookCard, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this LookCard to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ZhajinhuaCards. */
                            interface IZhajinhuaCards {

                                /** ZhajinhuaCards type */
                                type?: (number|null);

                                /** ZhajinhuaCards card */
                                card?: (com.aoo.chess.comms.protocol.proto.message.ICard[]|null);
                            }

                            /** 扎金花牌組 */
                            class ZhajinhuaCards implements IZhajinhuaCards {

                                /**
                                 * Constructs a new ZhajinhuaCards.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaCards);

                                /** ZhajinhuaCards type. */
                                public type: number;

                                /** ZhajinhuaCards card. */
                                public card: com.aoo.chess.comms.protocol.proto.message.ICard[];

                                /**
                                 * Creates a new ZhajinhuaCards instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ZhajinhuaCards instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaCards): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaCards;

                                /**
                                 * Encodes the specified ZhajinhuaCards message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ZhajinhuaCards.verify|verify} messages.
                                 * @param message ZhajinhuaCards message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaCards, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ZhajinhuaCards message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ZhajinhuaCards.verify|verify} messages.
                                 * @param message ZhajinhuaCards message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaCards, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ZhajinhuaCards message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ZhajinhuaCards
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaCards;

                                /**
                                 * Decodes a ZhajinhuaCards message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ZhajinhuaCards
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaCards;

                                /**
                                 * Verifies a ZhajinhuaCards message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ZhajinhuaCards message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ZhajinhuaCards
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaCards;

                                /**
                                 * Creates a plain object from a ZhajinhuaCards message. Also converts values to other types if specified.
                                 * @param message ZhajinhuaCards
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ZhajinhuaCards, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ZhajinhuaCards to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ZhajinhuaGameStart. */
                            interface IZhajinhuaGameStart {

                                /** ZhajinhuaGameStart money */
                                money?: (number|null);
                            }

                            /** 扎金花游戏开始 */
                            class ZhajinhuaGameStart implements IZhajinhuaGameStart {

                                /**
                                 * Constructs a new ZhajinhuaGameStart.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaGameStart);

                                /** ZhajinhuaGameStart money. */
                                public money: number;

                                /**
                                 * Creates a new ZhajinhuaGameStart instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ZhajinhuaGameStart instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaGameStart): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaGameStart;

                                /**
                                 * Encodes the specified ZhajinhuaGameStart message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ZhajinhuaGameStart.verify|verify} messages.
                                 * @param message ZhajinhuaGameStart message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaGameStart, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ZhajinhuaGameStart message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ZhajinhuaGameStart.verify|verify} messages.
                                 * @param message ZhajinhuaGameStart message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaGameStart, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ZhajinhuaGameStart message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ZhajinhuaGameStart
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaGameStart;

                                /**
                                 * Decodes a ZhajinhuaGameStart message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ZhajinhuaGameStart
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaGameStart;

                                /**
                                 * Verifies a ZhajinhuaGameStart message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ZhajinhuaGameStart message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ZhajinhuaGameStart
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaGameStart;

                                /**
                                 * Creates a plain object from a ZhajinhuaGameStart message. Also converts values to other types if specified.
                                 * @param message ZhajinhuaGameStart
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ZhajinhuaGameStart, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ZhajinhuaGameStart to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ZhajinhuaStartResult. */
                            interface IZhajinhuaStartResult {

                                /** ZhajinhuaStartResult sucess */
                                sucess?: (boolean|null);

                                /** ZhajinhuaStartResult playerId */
                                playerId?: (number|null);

                                /** ZhajinhuaStartResult currentGold */
                                currentGold?: (number|Long|null);
                            }

                            /** 扎金花开始结果 */
                            class ZhajinhuaStartResult implements IZhajinhuaStartResult {

                                /**
                                 * Constructs a new ZhajinhuaStartResult.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaStartResult);

                                /** ZhajinhuaStartResult sucess. */
                                public sucess: boolean;

                                /** ZhajinhuaStartResult playerId. */
                                public playerId: number;

                                /** ZhajinhuaStartResult currentGold. */
                                public currentGold: (number|Long);

                                /**
                                 * Creates a new ZhajinhuaStartResult instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ZhajinhuaStartResult instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaStartResult): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaStartResult;

                                /**
                                 * Encodes the specified ZhajinhuaStartResult message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ZhajinhuaStartResult.verify|verify} messages.
                                 * @param message ZhajinhuaStartResult message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaStartResult, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ZhajinhuaStartResult message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ZhajinhuaStartResult.verify|verify} messages.
                                 * @param message ZhajinhuaStartResult message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaStartResult, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ZhajinhuaStartResult message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ZhajinhuaStartResult
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaStartResult;

                                /**
                                 * Decodes a ZhajinhuaStartResult message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ZhajinhuaStartResult
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaStartResult;

                                /**
                                 * Verifies a ZhajinhuaStartResult message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ZhajinhuaStartResult message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ZhajinhuaStartResult
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaStartResult;

                                /**
                                 * Creates a plain object from a ZhajinhuaStartResult message. Also converts values to other types if specified.
                                 * @param message ZhajinhuaStartResult
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ZhajinhuaStartResult, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ZhajinhuaStartResult to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ZhajinhuaStartResultSet. */
                            interface IZhajinhuaStartResultSet {

                                /** ZhajinhuaStartResultSet results */
                                results?: (com.aoo.chess.comms.protocol.proto.message.IZhajinhuaStartResult[]|null);
                            }

                            /** 扎金花开始结果 */
                            class ZhajinhuaStartResultSet implements IZhajinhuaStartResultSet {

                                /**
                                 * Constructs a new ZhajinhuaStartResultSet.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaStartResultSet);

                                /** ZhajinhuaStartResultSet results. */
                                public results: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaStartResult[];

                                /**
                                 * Creates a new ZhajinhuaStartResultSet instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ZhajinhuaStartResultSet instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaStartResultSet): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaStartResultSet;

                                /**
                                 * Encodes the specified ZhajinhuaStartResultSet message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ZhajinhuaStartResultSet.verify|verify} messages.
                                 * @param message ZhajinhuaStartResultSet message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaStartResultSet, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ZhajinhuaStartResultSet message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ZhajinhuaStartResultSet.verify|verify} messages.
                                 * @param message ZhajinhuaStartResultSet message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaStartResultSet, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ZhajinhuaStartResultSet message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ZhajinhuaStartResultSet
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaStartResultSet;

                                /**
                                 * Decodes a ZhajinhuaStartResultSet message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ZhajinhuaStartResultSet
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaStartResultSet;

                                /**
                                 * Verifies a ZhajinhuaStartResultSet message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ZhajinhuaStartResultSet message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ZhajinhuaStartResultSet
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaStartResultSet;

                                /**
                                 * Creates a plain object from a ZhajinhuaStartResultSet message. Also converts values to other types if specified.
                                 * @param message ZhajinhuaStartResultSet
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ZhajinhuaStartResultSet, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ZhajinhuaStartResultSet to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ZhajinhuaBet. */
                            interface IZhajinhuaBet {

                                /** ZhajinhuaBet playerId */
                                playerId?: (number|null);

                                /** ZhajinhuaBet gold */
                                gold?: (number|null);
                            }

                            /** 扎金花压住 */
                            class ZhajinhuaBet implements IZhajinhuaBet {

                                /**
                                 * Constructs a new ZhajinhuaBet.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaBet);

                                /** ZhajinhuaBet playerId. */
                                public playerId: number;

                                /** ZhajinhuaBet gold. */
                                public gold: number;

                                /**
                                 * Creates a new ZhajinhuaBet instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ZhajinhuaBet instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaBet): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaBet;

                                /**
                                 * Encodes the specified ZhajinhuaBet message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ZhajinhuaBet.verify|verify} messages.
                                 * @param message ZhajinhuaBet message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaBet, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ZhajinhuaBet message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ZhajinhuaBet.verify|verify} messages.
                                 * @param message ZhajinhuaBet message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaBet, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ZhajinhuaBet message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ZhajinhuaBet
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaBet;

                                /**
                                 * Decodes a ZhajinhuaBet message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ZhajinhuaBet
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaBet;

                                /**
                                 * Verifies a ZhajinhuaBet message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ZhajinhuaBet message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ZhajinhuaBet
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaBet;

                                /**
                                 * Creates a plain object from a ZhajinhuaBet message. Also converts values to other types if specified.
                                 * @param message ZhajinhuaBet
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ZhajinhuaBet, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ZhajinhuaBet to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ThanCard. */
                            interface IThanCard {

                                /** ThanCard playerId */
                                playerId?: (number|null);

                                /** ThanCard thanPlayerId */
                                thanPlayerId?: (number|null);

                                /** ThanCard gold */
                                gold?: (number|null);
                            }

                            /** 比牌 */
                            class ThanCard implements IThanCard {

                                /**
                                 * Constructs a new ThanCard.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IThanCard);

                                /** ThanCard playerId. */
                                public playerId: number;

                                /** ThanCard thanPlayerId. */
                                public thanPlayerId: number;

                                /** ThanCard gold. */
                                public gold: number;

                                /**
                                 * Creates a new ThanCard instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ThanCard instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IThanCard): com.aoo.chess.comms.protocol.proto.message.ThanCard;

                                /**
                                 * Encodes the specified ThanCard message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ThanCard.verify|verify} messages.
                                 * @param message ThanCard message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IThanCard, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ThanCard message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ThanCard.verify|verify} messages.
                                 * @param message ThanCard message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IThanCard, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ThanCard message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ThanCard
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ThanCard;

                                /**
                                 * Decodes a ThanCard message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ThanCard
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ThanCard;

                                /**
                                 * Verifies a ThanCard message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ThanCard message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ThanCard
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ThanCard;

                                /**
                                 * Creates a plain object from a ThanCard message. Also converts values to other types if specified.
                                 * @param message ThanCard
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ThanCard, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ThanCard to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ThanCardResult. */
                            interface IThanCardResult {

                                /** ThanCardResult thanCard */
                                thanCard?: (com.aoo.chess.comms.protocol.proto.message.IThanCard|null);

                                /** ThanCardResult winPlayerId */
                                winPlayerId?: (number|null);
                            }

                            /** 比牌结果 */
                            class ThanCardResult implements IThanCardResult {

                                /**
                                 * Constructs a new ThanCardResult.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IThanCardResult);

                                /** ThanCardResult thanCard. */
                                public thanCard?: (com.aoo.chess.comms.protocol.proto.message.IThanCard|null);

                                /** ThanCardResult winPlayerId. */
                                public winPlayerId: number;

                                /**
                                 * Creates a new ThanCardResult instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ThanCardResult instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IThanCardResult): com.aoo.chess.comms.protocol.proto.message.ThanCardResult;

                                /**
                                 * Encodes the specified ThanCardResult message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ThanCardResult.verify|verify} messages.
                                 * @param message ThanCardResult message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IThanCardResult, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ThanCardResult message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ThanCardResult.verify|verify} messages.
                                 * @param message ThanCardResult message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IThanCardResult, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ThanCardResult message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ThanCardResult
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ThanCardResult;

                                /**
                                 * Decodes a ThanCardResult message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ThanCardResult
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ThanCardResult;

                                /**
                                 * Verifies a ThanCardResult message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ThanCardResult message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ThanCardResult
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ThanCardResult;

                                /**
                                 * Creates a plain object from a ThanCardResult message. Also converts values to other types if specified.
                                 * @param message ThanCardResult
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ThanCardResult, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ThanCardResult to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a GainZhajinhuaRoomInfo. */
                            interface IGainZhajinhuaRoomInfo {

                                /** GainZhajinhuaRoomInfo playerId */
                                playerId?: (number|null);
                            }

                            /** Represents a GainZhajinhuaRoomInfo. */
                            class GainZhajinhuaRoomInfo implements IGainZhajinhuaRoomInfo {

                                /**
                                 * Constructs a new GainZhajinhuaRoomInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IGainZhajinhuaRoomInfo);

                                /** GainZhajinhuaRoomInfo playerId. */
                                public playerId: number;

                                /**
                                 * Creates a new GainZhajinhuaRoomInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns GainZhajinhuaRoomInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IGainZhajinhuaRoomInfo): com.aoo.chess.comms.protocol.proto.message.GainZhajinhuaRoomInfo;

                                /**
                                 * Encodes the specified GainZhajinhuaRoomInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.GainZhajinhuaRoomInfo.verify|verify} messages.
                                 * @param message GainZhajinhuaRoomInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IGainZhajinhuaRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified GainZhajinhuaRoomInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.GainZhajinhuaRoomInfo.verify|verify} messages.
                                 * @param message GainZhajinhuaRoomInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IGainZhajinhuaRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a GainZhajinhuaRoomInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns GainZhajinhuaRoomInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.GainZhajinhuaRoomInfo;

                                /**
                                 * Decodes a GainZhajinhuaRoomInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns GainZhajinhuaRoomInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.GainZhajinhuaRoomInfo;

                                /**
                                 * Verifies a GainZhajinhuaRoomInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a GainZhajinhuaRoomInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns GainZhajinhuaRoomInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.GainZhajinhuaRoomInfo;

                                /**
                                 * Creates a plain object from a GainZhajinhuaRoomInfo message. Also converts values to other types if specified.
                                 * @param message GainZhajinhuaRoomInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.GainZhajinhuaRoomInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this GainZhajinhuaRoomInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a Discard. */
                            interface IDiscard {

                                /** Discard playerId */
                                playerId?: (number|null);
                            }

                            /** Represents a Discard. */
                            class Discard implements IDiscard {

                                /**
                                 * Constructs a new Discard.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IDiscard);

                                /** Discard playerId. */
                                public playerId: number;

                                /**
                                 * Creates a new Discard instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns Discard instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IDiscard): com.aoo.chess.comms.protocol.proto.message.Discard;

                                /**
                                 * Encodes the specified Discard message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.Discard.verify|verify} messages.
                                 * @param message Discard message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IDiscard, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified Discard message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.Discard.verify|verify} messages.
                                 * @param message Discard message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IDiscard, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a Discard message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns Discard
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.Discard;

                                /**
                                 * Decodes a Discard message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns Discard
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.Discard;

                                /**
                                 * Verifies a Discard message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a Discard message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns Discard
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.Discard;

                                /**
                                 * Creates a plain object from a Discard message. Also converts values to other types if specified.
                                 * @param message Discard
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.Discard, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this Discard to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ZhajinhuaEnd. */
                            interface IZhajinhuaEnd {

                                /** ZhajinhuaEnd winPlayerId */
                                winPlayerId?: (number|null);

                                /** ZhajinhuaEnd winGold */
                                winGold?: (number|null);

                                /** ZhajinhuaEnd playerCards */
                                playerCards?: (com.aoo.chess.comms.protocol.proto.message.IPlayerCard[]|null);
                            }

                            /** Represents a ZhajinhuaEnd. */
                            class ZhajinhuaEnd implements IZhajinhuaEnd {

                                /**
                                 * Constructs a new ZhajinhuaEnd.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaEnd);

                                /** ZhajinhuaEnd winPlayerId. */
                                public winPlayerId: number;

                                /** ZhajinhuaEnd winGold. */
                                public winGold: number;

                                /** ZhajinhuaEnd playerCards. */
                                public playerCards: com.aoo.chess.comms.protocol.proto.message.IPlayerCard[];

                                /**
                                 * Creates a new ZhajinhuaEnd instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ZhajinhuaEnd instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaEnd): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaEnd;

                                /**
                                 * Encodes the specified ZhajinhuaEnd message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ZhajinhuaEnd.verify|verify} messages.
                                 * @param message ZhajinhuaEnd message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaEnd, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ZhajinhuaEnd message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ZhajinhuaEnd.verify|verify} messages.
                                 * @param message ZhajinhuaEnd message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IZhajinhuaEnd, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ZhajinhuaEnd message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ZhajinhuaEnd
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaEnd;

                                /**
                                 * Decodes a ZhajinhuaEnd message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ZhajinhuaEnd
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaEnd;

                                /**
                                 * Verifies a ZhajinhuaEnd message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ZhajinhuaEnd message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ZhajinhuaEnd
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ZhajinhuaEnd;

                                /**
                                 * Creates a plain object from a ZhajinhuaEnd message. Also converts values to other types if specified.
                                 * @param message ZhajinhuaEnd
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ZhajinhuaEnd, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ZhajinhuaEnd to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a PlayerCard. */
                            interface IPlayerCard {

                                /** PlayerCard playerId */
                                playerId?: (number|null);

                                /** PlayerCard name */
                                name?: (string|null);

                                /** PlayerCard icon */
                                icon?: (string|null);

                                /** PlayerCard cards */
                                cards?: (com.aoo.chess.comms.protocol.proto.message.IZhajinhuaCards|null);

                                /** PlayerCard betGold */
                                betGold?: (number|null);
                            }

                            /** Represents a PlayerCard. */
                            class PlayerCard implements IPlayerCard {

                                /**
                                 * Constructs a new PlayerCard.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerCard);

                                /** PlayerCard playerId. */
                                public playerId: number;

                                /** PlayerCard name. */
                                public name: string;

                                /** PlayerCard icon. */
                                public icon: string;

                                /** PlayerCard cards. */
                                public cards?: (com.aoo.chess.comms.protocol.proto.message.IZhajinhuaCards|null);

                                /** PlayerCard betGold. */
                                public betGold: number;

                                /**
                                 * Creates a new PlayerCard instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns PlayerCard instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerCard): com.aoo.chess.comms.protocol.proto.message.PlayerCard;

                                /**
                                 * Encodes the specified PlayerCard message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerCard.verify|verify} messages.
                                 * @param message PlayerCard message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IPlayerCard, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified PlayerCard message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerCard.verify|verify} messages.
                                 * @param message PlayerCard message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IPlayerCard, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a PlayerCard message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns PlayerCard
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.PlayerCard;

                                /**
                                 * Decodes a PlayerCard message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns PlayerCard
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.PlayerCard;

                                /**
                                 * Verifies a PlayerCard message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a PlayerCard message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns PlayerCard
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.PlayerCard;

                                /**
                                 * Creates a plain object from a PlayerCard message. Also converts values to other types if specified.
                                 * @param message PlayerCard
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.PlayerCard, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this PlayerCard to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a StartFail. */
                            interface IStartFail {

                                /** StartFail money */
                                money?: (number|null);
                            }

                            /** Represents a StartFail. */
                            class StartFail implements IStartFail {

                                /**
                                 * Constructs a new StartFail.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IStartFail);

                                /** StartFail money. */
                                public money: number;

                                /**
                                 * Creates a new StartFail instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns StartFail instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IStartFail): com.aoo.chess.comms.protocol.proto.message.StartFail;

                                /**
                                 * Encodes the specified StartFail message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.StartFail.verify|verify} messages.
                                 * @param message StartFail message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IStartFail, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified StartFail message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.StartFail.verify|verify} messages.
                                 * @param message StartFail message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IStartFail, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a StartFail message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns StartFail
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.StartFail;

                                /**
                                 * Decodes a StartFail message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns StartFail
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.StartFail;

                                /**
                                 * Verifies a StartFail message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a StartFail message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns StartFail
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.StartFail;

                                /**
                                 * Creates a plain object from a StartFail message. Also converts values to other types if specified.
                                 * @param message StartFail
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.StartFail, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this StartFail to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a KickOutPlayer. */
                            interface IKickOutPlayer {

                                /** KickOutPlayer playerId */
                                playerId?: (number|null);

                                /** KickOutPlayer checkOutPlayerId */
                                checkOutPlayerId?: (number|null);
                            }

                            /** Represents a KickOutPlayer. */
                            class KickOutPlayer implements IKickOutPlayer {

                                /**
                                 * Constructs a new KickOutPlayer.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IKickOutPlayer);

                                /** KickOutPlayer playerId. */
                                public playerId: number;

                                /** KickOutPlayer checkOutPlayerId. */
                                public checkOutPlayerId: number;

                                /**
                                 * Creates a new KickOutPlayer instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns KickOutPlayer instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IKickOutPlayer): com.aoo.chess.comms.protocol.proto.message.KickOutPlayer;

                                /**
                                 * Encodes the specified KickOutPlayer message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.KickOutPlayer.verify|verify} messages.
                                 * @param message KickOutPlayer message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IKickOutPlayer, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified KickOutPlayer message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.KickOutPlayer.verify|verify} messages.
                                 * @param message KickOutPlayer message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IKickOutPlayer, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a KickOutPlayer message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns KickOutPlayer
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.KickOutPlayer;

                                /**
                                 * Decodes a KickOutPlayer message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns KickOutPlayer
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.KickOutPlayer;

                                /**
                                 * Verifies a KickOutPlayer message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a KickOutPlayer message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns KickOutPlayer
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.KickOutPlayer;

                                /**
                                 * Creates a plain object from a KickOutPlayer message. Also converts values to other types if specified.
                                 * @param message KickOutPlayer
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.KickOutPlayer, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this KickOutPlayer to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a LongHuDouRoomInfo. */
                            interface ILongHuDouRoomInfo {

                                /** LongHuDouRoomInfo playerSize */
                                playerSize?: (number|null);

                                /** LongHuDouRoomInfo state */
                                state?: (number|null);

                                /** LongHuDouRoomInfo infos */
                                infos?: (com.aoo.chess.comms.protocol.proto.message.ILongHuDouBetInfo[]|null);

                                /** LongHuDouRoomInfo myBetInfo */
                                myBetInfo?: (com.aoo.chess.comms.protocol.proto.message.ILongHuDouBetInfo|null);

                                /** LongHuDouRoomInfo ranks */
                                ranks?: (com.aoo.chess.comms.protocol.proto.message.IRoomPlayerInfo[]|null);

                                /** LongHuDouRoomInfo history */
                                history?: (number[]|null);

                                /** LongHuDouRoomInfo time */
                                time?: (number|null);

                                /** LongHuDouRoomInfo cards */
                                cards?: (com.aoo.chess.comms.protocol.proto.message.ICard[]|null);
                            }

                            /** Represents a LongHuDouRoomInfo. */
                            class LongHuDouRoomInfo implements ILongHuDouRoomInfo {

                                /**
                                 * Constructs a new LongHuDouRoomInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ILongHuDouRoomInfo);

                                /** LongHuDouRoomInfo playerSize. */
                                public playerSize: number;

                                /** LongHuDouRoomInfo state. */
                                public state: number;

                                /** LongHuDouRoomInfo infos. */
                                public infos: com.aoo.chess.comms.protocol.proto.message.ILongHuDouBetInfo[];

                                /** LongHuDouRoomInfo myBetInfo. */
                                public myBetInfo?: (com.aoo.chess.comms.protocol.proto.message.ILongHuDouBetInfo|null);

                                /** LongHuDouRoomInfo ranks. */
                                public ranks: com.aoo.chess.comms.protocol.proto.message.IRoomPlayerInfo[];

                                /** LongHuDouRoomInfo history. */
                                public history: number[];

                                /** LongHuDouRoomInfo time. */
                                public time: number;

                                /** LongHuDouRoomInfo cards. */
                                public cards: com.aoo.chess.comms.protocol.proto.message.ICard[];

                                /**
                                 * Creates a new LongHuDouRoomInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns LongHuDouRoomInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ILongHuDouRoomInfo): com.aoo.chess.comms.protocol.proto.message.LongHuDouRoomInfo;

                                /**
                                 * Encodes the specified LongHuDouRoomInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LongHuDouRoomInfo.verify|verify} messages.
                                 * @param message LongHuDouRoomInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ILongHuDouRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified LongHuDouRoomInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LongHuDouRoomInfo.verify|verify} messages.
                                 * @param message LongHuDouRoomInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ILongHuDouRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a LongHuDouRoomInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns LongHuDouRoomInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.LongHuDouRoomInfo;

                                /**
                                 * Decodes a LongHuDouRoomInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns LongHuDouRoomInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.LongHuDouRoomInfo;

                                /**
                                 * Verifies a LongHuDouRoomInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a LongHuDouRoomInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns LongHuDouRoomInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.LongHuDouRoomInfo;

                                /**
                                 * Creates a plain object from a LongHuDouRoomInfo message. Also converts values to other types if specified.
                                 * @param message LongHuDouRoomInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.LongHuDouRoomInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this LongHuDouRoomInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a LongHuDouRankUpdate. */
                            interface ILongHuDouRankUpdate {

                                /** LongHuDouRankUpdate ranks */
                                ranks?: (com.aoo.chess.comms.protocol.proto.message.IRoomPlayerInfo[]|null);
                            }

                            /** Represents a LongHuDouRankUpdate. */
                            class LongHuDouRankUpdate implements ILongHuDouRankUpdate {

                                /**
                                 * Constructs a new LongHuDouRankUpdate.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ILongHuDouRankUpdate);

                                /** LongHuDouRankUpdate ranks. */
                                public ranks: com.aoo.chess.comms.protocol.proto.message.IRoomPlayerInfo[];

                                /**
                                 * Creates a new LongHuDouRankUpdate instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns LongHuDouRankUpdate instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ILongHuDouRankUpdate): com.aoo.chess.comms.protocol.proto.message.LongHuDouRankUpdate;

                                /**
                                 * Encodes the specified LongHuDouRankUpdate message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LongHuDouRankUpdate.verify|verify} messages.
                                 * @param message LongHuDouRankUpdate message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ILongHuDouRankUpdate, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified LongHuDouRankUpdate message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LongHuDouRankUpdate.verify|verify} messages.
                                 * @param message LongHuDouRankUpdate message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ILongHuDouRankUpdate, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a LongHuDouRankUpdate message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns LongHuDouRankUpdate
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.LongHuDouRankUpdate;

                                /**
                                 * Decodes a LongHuDouRankUpdate message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns LongHuDouRankUpdate
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.LongHuDouRankUpdate;

                                /**
                                 * Verifies a LongHuDouRankUpdate message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a LongHuDouRankUpdate message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns LongHuDouRankUpdate
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.LongHuDouRankUpdate;

                                /**
                                 * Creates a plain object from a LongHuDouRankUpdate message. Also converts values to other types if specified.
                                 * @param message LongHuDouRankUpdate
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.LongHuDouRankUpdate, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this LongHuDouRankUpdate to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a LongHuDouBetInfo. */
                            interface ILongHuDouBetInfo {

                                /** LongHuDouBetInfo type */
                                type?: (number|null);

                                /** LongHuDouBetInfo gold */
                                gold?: (number|Long|null);
                            }

                            /** Represents a LongHuDouBetInfo. */
                            class LongHuDouBetInfo implements ILongHuDouBetInfo {

                                /**
                                 * Constructs a new LongHuDouBetInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ILongHuDouBetInfo);

                                /** LongHuDouBetInfo type. */
                                public type: number;

                                /** LongHuDouBetInfo gold. */
                                public gold: (number|Long);

                                /**
                                 * Creates a new LongHuDouBetInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns LongHuDouBetInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ILongHuDouBetInfo): com.aoo.chess.comms.protocol.proto.message.LongHuDouBetInfo;

                                /**
                                 * Encodes the specified LongHuDouBetInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LongHuDouBetInfo.verify|verify} messages.
                                 * @param message LongHuDouBetInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ILongHuDouBetInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified LongHuDouBetInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LongHuDouBetInfo.verify|verify} messages.
                                 * @param message LongHuDouBetInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ILongHuDouBetInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a LongHuDouBetInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns LongHuDouBetInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.LongHuDouBetInfo;

                                /**
                                 * Decodes a LongHuDouBetInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns LongHuDouBetInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.LongHuDouBetInfo;

                                /**
                                 * Verifies a LongHuDouBetInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a LongHuDouBetInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns LongHuDouBetInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.LongHuDouBetInfo;

                                /**
                                 * Creates a plain object from a LongHuDouBetInfo message. Also converts values to other types if specified.
                                 * @param message LongHuDouBetInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.LongHuDouBetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this LongHuDouBetInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a LongHuDouBet. */
                            interface ILongHuDouBet {

                                /** LongHuDouBet playerId */
                                playerId?: (number|null);

                                /** LongHuDouBet info */
                                info?: (com.aoo.chess.comms.protocol.proto.message.ILongHuDouBetInfo|null);
                            }

                            /** Represents a LongHuDouBet. */
                            class LongHuDouBet implements ILongHuDouBet {

                                /**
                                 * Constructs a new LongHuDouBet.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ILongHuDouBet);

                                /** LongHuDouBet playerId. */
                                public playerId: number;

                                /** LongHuDouBet info. */
                                public info?: (com.aoo.chess.comms.protocol.proto.message.ILongHuDouBetInfo|null);

                                /**
                                 * Creates a new LongHuDouBet instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns LongHuDouBet instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ILongHuDouBet): com.aoo.chess.comms.protocol.proto.message.LongHuDouBet;

                                /**
                                 * Encodes the specified LongHuDouBet message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LongHuDouBet.verify|verify} messages.
                                 * @param message LongHuDouBet message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ILongHuDouBet, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified LongHuDouBet message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LongHuDouBet.verify|verify} messages.
                                 * @param message LongHuDouBet message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ILongHuDouBet, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a LongHuDouBet message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns LongHuDouBet
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.LongHuDouBet;

                                /**
                                 * Decodes a LongHuDouBet message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns LongHuDouBet
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.LongHuDouBet;

                                /**
                                 * Verifies a LongHuDouBet message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a LongHuDouBet message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns LongHuDouBet
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.LongHuDouBet;

                                /**
                                 * Creates a plain object from a LongHuDouBet message. Also converts values to other types if specified.
                                 * @param message LongHuDouBet
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.LongHuDouBet, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this LongHuDouBet to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a LongHuDouBetStar. */
                            interface ILongHuDouBetStar {
                            }

                            /** Represents a LongHuDouBetStar. */
                            class LongHuDouBetStar implements ILongHuDouBetStar {

                                /**
                                 * Constructs a new LongHuDouBetStar.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ILongHuDouBetStar);

                                /**
                                 * Creates a new LongHuDouBetStar instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns LongHuDouBetStar instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ILongHuDouBetStar): com.aoo.chess.comms.protocol.proto.message.LongHuDouBetStar;

                                /**
                                 * Encodes the specified LongHuDouBetStar message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LongHuDouBetStar.verify|verify} messages.
                                 * @param message LongHuDouBetStar message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ILongHuDouBetStar, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified LongHuDouBetStar message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LongHuDouBetStar.verify|verify} messages.
                                 * @param message LongHuDouBetStar message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ILongHuDouBetStar, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a LongHuDouBetStar message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns LongHuDouBetStar
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.LongHuDouBetStar;

                                /**
                                 * Decodes a LongHuDouBetStar message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns LongHuDouBetStar
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.LongHuDouBetStar;

                                /**
                                 * Verifies a LongHuDouBetStar message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a LongHuDouBetStar message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns LongHuDouBetStar
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.LongHuDouBetStar;

                                /**
                                 * Creates a plain object from a LongHuDouBetStar message. Also converts values to other types if specified.
                                 * @param message LongHuDouBetStar
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.LongHuDouBetStar, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this LongHuDouBetStar to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a LongHuDouEnd. */
                            interface ILongHuDouEnd {

                                /** LongHuDouEnd icon */
                                icon?: (string|null);

                                /** LongHuDouEnd name */
                                name?: (string|null);

                                /** LongHuDouEnd gold */
                                gold?: (number|Long|null);

                                /** LongHuDouEnd cards */
                                cards?: (com.aoo.chess.comms.protocol.proto.message.ICard[]|null);

                                /** LongHuDouEnd rankSettlements */
                                rankSettlements?: (com.aoo.chess.comms.protocol.proto.message.IRankSettlement[]|null);
                            }

                            /** Represents a LongHuDouEnd. */
                            class LongHuDouEnd implements ILongHuDouEnd {

                                /**
                                 * Constructs a new LongHuDouEnd.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ILongHuDouEnd);

                                /** LongHuDouEnd icon. */
                                public icon: string;

                                /** LongHuDouEnd name. */
                                public name: string;

                                /** LongHuDouEnd gold. */
                                public gold: (number|Long);

                                /** LongHuDouEnd cards. */
                                public cards: com.aoo.chess.comms.protocol.proto.message.ICard[];

                                /** LongHuDouEnd rankSettlements. */
                                public rankSettlements: com.aoo.chess.comms.protocol.proto.message.IRankSettlement[];

                                /**
                                 * Creates a new LongHuDouEnd instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns LongHuDouEnd instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ILongHuDouEnd): com.aoo.chess.comms.protocol.proto.message.LongHuDouEnd;

                                /**
                                 * Encodes the specified LongHuDouEnd message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LongHuDouEnd.verify|verify} messages.
                                 * @param message LongHuDouEnd message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ILongHuDouEnd, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified LongHuDouEnd message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LongHuDouEnd.verify|verify} messages.
                                 * @param message LongHuDouEnd message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ILongHuDouEnd, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a LongHuDouEnd message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns LongHuDouEnd
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.LongHuDouEnd;

                                /**
                                 * Decodes a LongHuDouEnd message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns LongHuDouEnd
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.LongHuDouEnd;

                                /**
                                 * Verifies a LongHuDouEnd message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a LongHuDouEnd message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns LongHuDouEnd
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.LongHuDouEnd;

                                /**
                                 * Creates a plain object from a LongHuDouEnd message. Also converts values to other types if specified.
                                 * @param message LongHuDouEnd
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.LongHuDouEnd, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this LongHuDouEnd to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a RankSettlement. */
                            interface IRankSettlement {

                                /** RankSettlement playerId */
                                playerId?: (number|null);

                                /** RankSettlement gold */
                                gold?: (number|Long|null);
                            }

                            /** Represents a RankSettlement. */
                            class RankSettlement implements IRankSettlement {

                                /**
                                 * Constructs a new RankSettlement.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IRankSettlement);

                                /** RankSettlement playerId. */
                                public playerId: number;

                                /** RankSettlement gold. */
                                public gold: (number|Long);

                                /**
                                 * Creates a new RankSettlement instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns RankSettlement instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IRankSettlement): com.aoo.chess.comms.protocol.proto.message.RankSettlement;

                                /**
                                 * Encodes the specified RankSettlement message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.RankSettlement.verify|verify} messages.
                                 * @param message RankSettlement message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IRankSettlement, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified RankSettlement message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.RankSettlement.verify|verify} messages.
                                 * @param message RankSettlement message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IRankSettlement, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a RankSettlement message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns RankSettlement
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.RankSettlement;

                                /**
                                 * Decodes a RankSettlement message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns RankSettlement
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.RankSettlement;

                                /**
                                 * Verifies a RankSettlement message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a RankSettlement message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns RankSettlement
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.RankSettlement;

                                /**
                                 * Creates a plain object from a RankSettlement message. Also converts values to other types if specified.
                                 * @param message RankSettlement
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.RankSettlement, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this RankSettlement to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a LongHuDouAward. */
                            interface ILongHuDouAward {

                                /** LongHuDouAward type */
                                type?: (number|null);

                                /** LongHuDouAward gold */
                                gold?: (number|Long|null);

                                /** LongHuDouAward profit */
                                profit?: (number|Long|null);
                            }

                            /** Represents a LongHuDouAward. */
                            class LongHuDouAward implements ILongHuDouAward {

                                /**
                                 * Constructs a new LongHuDouAward.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ILongHuDouAward);

                                /** LongHuDouAward type. */
                                public type: number;

                                /** LongHuDouAward gold. */
                                public gold: (number|Long);

                                /** LongHuDouAward profit. */
                                public profit: (number|Long);

                                /**
                                 * Creates a new LongHuDouAward instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns LongHuDouAward instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ILongHuDouAward): com.aoo.chess.comms.protocol.proto.message.LongHuDouAward;

                                /**
                                 * Encodes the specified LongHuDouAward message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LongHuDouAward.verify|verify} messages.
                                 * @param message LongHuDouAward message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ILongHuDouAward, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified LongHuDouAward message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LongHuDouAward.verify|verify} messages.
                                 * @param message LongHuDouAward message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ILongHuDouAward, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a LongHuDouAward message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns LongHuDouAward
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.LongHuDouAward;

                                /**
                                 * Decodes a LongHuDouAward message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns LongHuDouAward
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.LongHuDouAward;

                                /**
                                 * Verifies a LongHuDouAward message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a LongHuDouAward message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns LongHuDouAward
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.LongHuDouAward;

                                /**
                                 * Creates a plain object from a LongHuDouAward message. Also converts values to other types if specified.
                                 * @param message LongHuDouAward
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.LongHuDouAward, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this LongHuDouAward to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a GainLongHuDouRoomInfo. */
                            interface IGainLongHuDouRoomInfo {

                                /** GainLongHuDouRoomInfo playerId */
                                playerId?: (number|null);
                            }

                            /** Represents a GainLongHuDouRoomInfo. */
                            class GainLongHuDouRoomInfo implements IGainLongHuDouRoomInfo {

                                /**
                                 * Constructs a new GainLongHuDouRoomInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IGainLongHuDouRoomInfo);

                                /** GainLongHuDouRoomInfo playerId. */
                                public playerId: number;

                                /**
                                 * Creates a new GainLongHuDouRoomInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns GainLongHuDouRoomInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IGainLongHuDouRoomInfo): com.aoo.chess.comms.protocol.proto.message.GainLongHuDouRoomInfo;

                                /**
                                 * Encodes the specified GainLongHuDouRoomInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.GainLongHuDouRoomInfo.verify|verify} messages.
                                 * @param message GainLongHuDouRoomInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IGainLongHuDouRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified GainLongHuDouRoomInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.GainLongHuDouRoomInfo.verify|verify} messages.
                                 * @param message GainLongHuDouRoomInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IGainLongHuDouRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a GainLongHuDouRoomInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns GainLongHuDouRoomInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.GainLongHuDouRoomInfo;

                                /**
                                 * Decodes a GainLongHuDouRoomInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns GainLongHuDouRoomInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.GainLongHuDouRoomInfo;

                                /**
                                 * Verifies a GainLongHuDouRoomInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a GainLongHuDouRoomInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns GainLongHuDouRoomInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.GainLongHuDouRoomInfo;

                                /**
                                 * Creates a plain object from a GainLongHuDouRoomInfo message. Also converts values to other types if specified.
                                 * @param message GainLongHuDouRoomInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.GainLongHuDouRoomInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this GainLongHuDouRoomInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a WorldChatMessage. */
                            interface IWorldChatMessage {

                                /** WorldChatMessage playerName */
                                playerName?: (string|null);

                                /** WorldChatMessage message */
                                message?: (string|null);

                                /** WorldChatMessage playerId */
                                playerId?: (number|null);
                            }

                            /** Represents a WorldChatMessage. */
                            class WorldChatMessage implements IWorldChatMessage {

                                /**
                                 * Constructs a new WorldChatMessage.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IWorldChatMessage);

                                /** WorldChatMessage playerName. */
                                public playerName: string;

                                /** WorldChatMessage message. */
                                public message: string;

                                /** WorldChatMessage playerId. */
                                public playerId: number;

                                /**
                                 * Creates a new WorldChatMessage instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns WorldChatMessage instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IWorldChatMessage): com.aoo.chess.comms.protocol.proto.message.WorldChatMessage;

                                /**
                                 * Encodes the specified WorldChatMessage message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.WorldChatMessage.verify|verify} messages.
                                 * @param message WorldChatMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IWorldChatMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified WorldChatMessage message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.WorldChatMessage.verify|verify} messages.
                                 * @param message WorldChatMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IWorldChatMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a WorldChatMessage message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns WorldChatMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.WorldChatMessage;

                                /**
                                 * Decodes a WorldChatMessage message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns WorldChatMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.WorldChatMessage;

                                /**
                                 * Verifies a WorldChatMessage message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a WorldChatMessage message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns WorldChatMessage
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.WorldChatMessage;

                                /**
                                 * Creates a plain object from a WorldChatMessage message. Also converts values to other types if specified.
                                 * @param message WorldChatMessage
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.WorldChatMessage, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this WorldChatMessage to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** RollType enum. */
                            enum RollType {
                                SYSTEM = 0,
                                ROOM = 1,
                                LOTTERY = 2
                            }

                            /** Properties of a RollMessage. */
                            interface IRollMessage {

                                /** RollMessage type */
                                type?: (com.aoo.chess.comms.protocol.proto.message.RollType|null);

                                /** RollMessage message */
                                message?: (string|null);
                            }

                            /** Represents a RollMessage. */
                            class RollMessage implements IRollMessage {

                                /**
                                 * Constructs a new RollMessage.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IRollMessage);

                                /** RollMessage type. */
                                public type: com.aoo.chess.comms.protocol.proto.message.RollType;

                                /** RollMessage message. */
                                public message: string;

                                /**
                                 * Creates a new RollMessage instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns RollMessage instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IRollMessage): com.aoo.chess.comms.protocol.proto.message.RollMessage;

                                /**
                                 * Encodes the specified RollMessage message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.RollMessage.verify|verify} messages.
                                 * @param message RollMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IRollMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified RollMessage message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.RollMessage.verify|verify} messages.
                                 * @param message RollMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IRollMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a RollMessage message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns RollMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.RollMessage;

                                /**
                                 * Decodes a RollMessage message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns RollMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.RollMessage;

                                /**
                                 * Verifies a RollMessage message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a RollMessage message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns RollMessage
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.RollMessage;

                                /**
                                 * Creates a plain object from a RollMessage message. Also converts values to other types if specified.
                                 * @param message RollMessage
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.RollMessage, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this RollMessage to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a SendPriveteChatMessage. */
                            interface ISendPriveteChatMessage {

                                /** SendPriveteChatMessage playerId */
                                playerId?: (number|null);

                                /** SendPriveteChatMessage message */
                                message?: (string|null);
                            }

                            /** Represents a SendPriveteChatMessage. */
                            class SendPriveteChatMessage implements ISendPriveteChatMessage {

                                /**
                                 * Constructs a new SendPriveteChatMessage.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ISendPriveteChatMessage);

                                /** SendPriveteChatMessage playerId. */
                                public playerId: number;

                                /** SendPriveteChatMessage message. */
                                public message: string;

                                /**
                                 * Creates a new SendPriveteChatMessage instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns SendPriveteChatMessage instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ISendPriveteChatMessage): com.aoo.chess.comms.protocol.proto.message.SendPriveteChatMessage;

                                /**
                                 * Encodes the specified SendPriveteChatMessage message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.SendPriveteChatMessage.verify|verify} messages.
                                 * @param message SendPriveteChatMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ISendPriveteChatMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified SendPriveteChatMessage message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.SendPriveteChatMessage.verify|verify} messages.
                                 * @param message SendPriveteChatMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ISendPriveteChatMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a SendPriveteChatMessage message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns SendPriveteChatMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.SendPriveteChatMessage;

                                /**
                                 * Decodes a SendPriveteChatMessage message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns SendPriveteChatMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.SendPriveteChatMessage;

                                /**
                                 * Verifies a SendPriveteChatMessage message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a SendPriveteChatMessage message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns SendPriveteChatMessage
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.SendPriveteChatMessage;

                                /**
                                 * Creates a plain object from a SendPriveteChatMessage message. Also converts values to other types if specified.
                                 * @param message SendPriveteChatMessage
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.SendPriveteChatMessage, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this SendPriveteChatMessage to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ServerPrivateChatMessage. */
                            interface IServerPrivateChatMessage {

                                /** ServerPrivateChatMessage playerId */
                                playerId?: (number|null);

                                /** ServerPrivateChatMessage msg */
                                msg?: (com.aoo.chess.comms.protocol.proto.message.IPrivateChatMessage|null);
                            }

                            /** Represents a ServerPrivateChatMessage. */
                            class ServerPrivateChatMessage implements IServerPrivateChatMessage {

                                /**
                                 * Constructs a new ServerPrivateChatMessage.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IServerPrivateChatMessage);

                                /** ServerPrivateChatMessage playerId. */
                                public playerId: number;

                                /** ServerPrivateChatMessage msg. */
                                public msg?: (com.aoo.chess.comms.protocol.proto.message.IPrivateChatMessage|null);

                                /**
                                 * Creates a new ServerPrivateChatMessage instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ServerPrivateChatMessage instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IServerPrivateChatMessage): com.aoo.chess.comms.protocol.proto.message.ServerPrivateChatMessage;

                                /**
                                 * Encodes the specified ServerPrivateChatMessage message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ServerPrivateChatMessage.verify|verify} messages.
                                 * @param message ServerPrivateChatMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IServerPrivateChatMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ServerPrivateChatMessage message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ServerPrivateChatMessage.verify|verify} messages.
                                 * @param message ServerPrivateChatMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IServerPrivateChatMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ServerPrivateChatMessage message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ServerPrivateChatMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ServerPrivateChatMessage;

                                /**
                                 * Decodes a ServerPrivateChatMessage message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ServerPrivateChatMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ServerPrivateChatMessage;

                                /**
                                 * Verifies a ServerPrivateChatMessage message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ServerPrivateChatMessage message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ServerPrivateChatMessage
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ServerPrivateChatMessage;

                                /**
                                 * Creates a plain object from a ServerPrivateChatMessage message. Also converts values to other types if specified.
                                 * @param message ServerPrivateChatMessage
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ServerPrivateChatMessage, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ServerPrivateChatMessage to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a PrivateChatMessage. */
                            interface IPrivateChatMessage {

                                /** PrivateChatMessage playerId */
                                playerId?: (number|null);

                                /** PrivateChatMessage name */
                                name?: (string|null);

                                /** PrivateChatMessage message */
                                message?: (string|null);

                                /** PrivateChatMessage icon */
                                icon?: (string|null);

                                /** PrivateChatMessage vipPoints */
                                vipPoints?: (number|null);
                            }

                            /** Represents a PrivateChatMessage. */
                            class PrivateChatMessage implements IPrivateChatMessage {

                                /**
                                 * Constructs a new PrivateChatMessage.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IPrivateChatMessage);

                                /** PrivateChatMessage playerId. */
                                public playerId: number;

                                /** PrivateChatMessage name. */
                                public name: string;

                                /** PrivateChatMessage message. */
                                public message: string;

                                /** PrivateChatMessage icon. */
                                public icon: string;

                                /** PrivateChatMessage vipPoints. */
                                public vipPoints: number;

                                /**
                                 * Creates a new PrivateChatMessage instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns PrivateChatMessage instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IPrivateChatMessage): com.aoo.chess.comms.protocol.proto.message.PrivateChatMessage;

                                /**
                                 * Encodes the specified PrivateChatMessage message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PrivateChatMessage.verify|verify} messages.
                                 * @param message PrivateChatMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IPrivateChatMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified PrivateChatMessage message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PrivateChatMessage.verify|verify} messages.
                                 * @param message PrivateChatMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IPrivateChatMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a PrivateChatMessage message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns PrivateChatMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.PrivateChatMessage;

                                /**
                                 * Decodes a PrivateChatMessage message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns PrivateChatMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.PrivateChatMessage;

                                /**
                                 * Verifies a PrivateChatMessage message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a PrivateChatMessage message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns PrivateChatMessage
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.PrivateChatMessage;

                                /**
                                 * Creates a plain object from a PrivateChatMessage message. Also converts values to other types if specified.
                                 * @param message PrivateChatMessage
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.PrivateChatMessage, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this PrivateChatMessage to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of an ErrorCode. */
                            interface IErrorCode {

                                /** ErrorCode code */
                                code?: (number|null);

                                /** ErrorCode description */
                                description?: (string|null);
                            }

                            /** Represents an ErrorCode. */
                            class ErrorCode implements IErrorCode {

                                /**
                                 * Constructs a new ErrorCode.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IErrorCode);

                                /** ErrorCode code. */
                                public code: number;

                                /** ErrorCode description. */
                                public description: string;

                                /**
                                 * Creates a new ErrorCode instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ErrorCode instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IErrorCode): com.aoo.chess.comms.protocol.proto.message.ErrorCode;

                                /**
                                 * Encodes the specified ErrorCode message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ErrorCode.verify|verify} messages.
                                 * @param message ErrorCode message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IErrorCode, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ErrorCode message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ErrorCode.verify|verify} messages.
                                 * @param message ErrorCode message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IErrorCode, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes an ErrorCode message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ErrorCode
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ErrorCode;

                                /**
                                 * Decodes an ErrorCode message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ErrorCode
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ErrorCode;

                                /**
                                 * Verifies an ErrorCode message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an ErrorCode message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ErrorCode
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ErrorCode;

                                /**
                                 * Creates a plain object from an ErrorCode message. Also converts values to other types if specified.
                                 * @param message ErrorCode
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ErrorCode, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ErrorCode to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a LoginRequest. */
                            interface ILoginRequest {

                                /** 用户名 */
                                username?: (string|null);

                                /** 密码 */
                                password?: (string|null);

                                /** 渠道编号 */
                                channelId?: (string|null);
                            }

                            /** 登录请求 */
                            class LoginRequest implements ILoginRequest {

                                /**
                                 * Constructs a new LoginRequest.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ILoginRequest);

                                /** 用户名 */
                                public username: string;

                                /** 密码 */
                                public password: string;

                                /** 渠道编号 */
                                public channelId: string;

                                /**
                                 * Creates a new LoginRequest instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns LoginRequest instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ILoginRequest): com.aoo.chess.comms.protocol.proto.message.LoginRequest;

                                /**
                                 * Encodes the specified LoginRequest message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LoginRequest.verify|verify} messages.
                                 * @param message LoginRequest message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ILoginRequest, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LoginRequest.verify|verify} messages.
                                 * @param message LoginRequest message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ILoginRequest, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a LoginRequest message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns LoginRequest
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.LoginRequest;

                                /**
                                 * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns LoginRequest
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.LoginRequest;

                                /**
                                 * Verifies a LoginRequest message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns LoginRequest
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.LoginRequest;

                                /**
                                 * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
                                 * @param message LoginRequest
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.LoginRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this LoginRequest to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a LoginResult. */
                            interface ILoginResult {

                                /** 游戏服务器IP */
                                ip?: (string|null);

                                /** 游戏服务器端口 */
                                port?: (number|null);

                                /** 会话编号 */
                                sessionId?: (number|Long|null);
                            }

                            /** 登录结果 */
                            class LoginResult implements ILoginResult {

                                /**
                                 * Constructs a new LoginResult.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ILoginResult);

                                /** 游戏服务器IP */
                                public ip: string;

                                /** 游戏服务器端口 */
                                public port: number;

                                /** 会话编号 */
                                public sessionId: (number|Long);

                                /**
                                 * Creates a new LoginResult instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns LoginResult instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ILoginResult): com.aoo.chess.comms.protocol.proto.message.LoginResult;

                                /**
                                 * Encodes the specified LoginResult message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LoginResult.verify|verify} messages.
                                 * @param message LoginResult message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ILoginResult, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified LoginResult message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LoginResult.verify|verify} messages.
                                 * @param message LoginResult message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ILoginResult, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a LoginResult message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns LoginResult
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.LoginResult;

                                /**
                                 * Decodes a LoginResult message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns LoginResult
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.LoginResult;

                                /**
                                 * Verifies a LoginResult message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a LoginResult message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns LoginResult
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.LoginResult;

                                /**
                                 * Creates a plain object from a LoginResult message. Also converts values to other types if specified.
                                 * @param message LoginResult
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.LoginResult, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this LoginResult to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a RegisterRequest. */
                            interface IRegisterRequest {

                                /** 用户名 */
                                username?: (string|null);

                                /** 密码 */
                                password?: (string|null);

                                /** 渠道编号 */
                                channelId?: (string|null);

                                /** 验证码 */
                                authCode?: (number|null);
                            }

                            /** 注册请求 */
                            class RegisterRequest implements IRegisterRequest {

                                /**
                                 * Constructs a new RegisterRequest.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IRegisterRequest);

                                /** 用户名 */
                                public username: string;

                                /** 密码 */
                                public password: string;

                                /** 渠道编号 */
                                public channelId: string;

                                /** 验证码 */
                                public authCode: number;

                                /**
                                 * Creates a new RegisterRequest instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns RegisterRequest instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IRegisterRequest): com.aoo.chess.comms.protocol.proto.message.RegisterRequest;

                                /**
                                 * Encodes the specified RegisterRequest message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.RegisterRequest.verify|verify} messages.
                                 * @param message RegisterRequest message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IRegisterRequest, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified RegisterRequest message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.RegisterRequest.verify|verify} messages.
                                 * @param message RegisterRequest message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IRegisterRequest, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a RegisterRequest message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns RegisterRequest
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.RegisterRequest;

                                /**
                                 * Decodes a RegisterRequest message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns RegisterRequest
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.RegisterRequest;

                                /**
                                 * Verifies a RegisterRequest message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a RegisterRequest message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns RegisterRequest
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.RegisterRequest;

                                /**
                                 * Creates a plain object from a RegisterRequest message. Also converts values to other types if specified.
                                 * @param message RegisterRequest
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.RegisterRequest, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this RegisterRequest to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a PlayerLogin. */
                            interface IPlayerLogin {

                                /** PlayerLogin sessionId */
                                sessionId?: (number|Long|null);
                            }

                            /** Represents a PlayerLogin. */
                            class PlayerLogin implements IPlayerLogin {

                                /**
                                 * Constructs a new PlayerLogin.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerLogin);

                                /** PlayerLogin sessionId. */
                                public sessionId: (number|Long);

                                /**
                                 * Creates a new PlayerLogin instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns PlayerLogin instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerLogin): com.aoo.chess.comms.protocol.proto.message.PlayerLogin;

                                /**
                                 * Encodes the specified PlayerLogin message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerLogin.verify|verify} messages.
                                 * @param message PlayerLogin message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IPlayerLogin, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified PlayerLogin message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerLogin.verify|verify} messages.
                                 * @param message PlayerLogin message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IPlayerLogin, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a PlayerLogin message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns PlayerLogin
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.PlayerLogin;

                                /**
                                 * Decodes a PlayerLogin message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns PlayerLogin
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.PlayerLogin;

                                /**
                                 * Verifies a PlayerLogin message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a PlayerLogin message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns PlayerLogin
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.PlayerLogin;

                                /**
                                 * Creates a plain object from a PlayerLogin message. Also converts values to other types if specified.
                                 * @param message PlayerLogin
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.PlayerLogin, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this PlayerLogin to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a PlayerRegister. */
                            interface IPlayerRegister {

                                /** PlayerRegister playerId */
                                playerId?: (number|null);

                                /** PlayerRegister name */
                                name?: (string|null);
                            }

                            /** Represents a PlayerRegister. */
                            class PlayerRegister implements IPlayerRegister {

                                /**
                                 * Constructs a new PlayerRegister.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerRegister);

                                /** PlayerRegister playerId. */
                                public playerId: number;

                                /** PlayerRegister name. */
                                public name: string;

                                /**
                                 * Creates a new PlayerRegister instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns PlayerRegister instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerRegister): com.aoo.chess.comms.protocol.proto.message.PlayerRegister;

                                /**
                                 * Encodes the specified PlayerRegister message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerRegister.verify|verify} messages.
                                 * @param message PlayerRegister message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IPlayerRegister, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified PlayerRegister message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerRegister.verify|verify} messages.
                                 * @param message PlayerRegister message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IPlayerRegister, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a PlayerRegister message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns PlayerRegister
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.PlayerRegister;

                                /**
                                 * Decodes a PlayerRegister message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns PlayerRegister
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.PlayerRegister;

                                /**
                                 * Verifies a PlayerRegister message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a PlayerRegister message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns PlayerRegister
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.PlayerRegister;

                                /**
                                 * Creates a plain object from a PlayerRegister message. Also converts values to other types if specified.
                                 * @param message PlayerRegister
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.PlayerRegister, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this PlayerRegister to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a GainOnlinePlayerSize. */
                            interface IGainOnlinePlayerSize {
                            }

                            /** Represents a GainOnlinePlayerSize. */
                            class GainOnlinePlayerSize implements IGainOnlinePlayerSize {

                                /**
                                 * Constructs a new GainOnlinePlayerSize.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IGainOnlinePlayerSize);

                                /**
                                 * Creates a new GainOnlinePlayerSize instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns GainOnlinePlayerSize instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IGainOnlinePlayerSize): com.aoo.chess.comms.protocol.proto.message.GainOnlinePlayerSize;

                                /**
                                 * Encodes the specified GainOnlinePlayerSize message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.GainOnlinePlayerSize.verify|verify} messages.
                                 * @param message GainOnlinePlayerSize message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IGainOnlinePlayerSize, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified GainOnlinePlayerSize message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.GainOnlinePlayerSize.verify|verify} messages.
                                 * @param message GainOnlinePlayerSize message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IGainOnlinePlayerSize, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a GainOnlinePlayerSize message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns GainOnlinePlayerSize
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.GainOnlinePlayerSize;

                                /**
                                 * Decodes a GainOnlinePlayerSize message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns GainOnlinePlayerSize
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.GainOnlinePlayerSize;

                                /**
                                 * Verifies a GainOnlinePlayerSize message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a GainOnlinePlayerSize message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns GainOnlinePlayerSize
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.GainOnlinePlayerSize;

                                /**
                                 * Creates a plain object from a GainOnlinePlayerSize message. Also converts values to other types if specified.
                                 * @param message GainOnlinePlayerSize
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.GainOnlinePlayerSize, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this GainOnlinePlayerSize to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of an OnlineSize. */
                            interface IOnlineSize {

                                /** OnlineSize size */
                                size?: (number|null);
                            }

                            /** Represents an OnlineSize. */
                            class OnlineSize implements IOnlineSize {

                                /**
                                 * Constructs a new OnlineSize.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IOnlineSize);

                                /** OnlineSize size. */
                                public size: number;

                                /**
                                 * Creates a new OnlineSize instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns OnlineSize instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IOnlineSize): com.aoo.chess.comms.protocol.proto.message.OnlineSize;

                                /**
                                 * Encodes the specified OnlineSize message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.OnlineSize.verify|verify} messages.
                                 * @param message OnlineSize message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IOnlineSize, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified OnlineSize message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.OnlineSize.verify|verify} messages.
                                 * @param message OnlineSize message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IOnlineSize, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes an OnlineSize message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns OnlineSize
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.OnlineSize;

                                /**
                                 * Decodes an OnlineSize message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns OnlineSize
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.OnlineSize;

                                /**
                                 * Verifies an OnlineSize message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an OnlineSize message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns OnlineSize
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.OnlineSize;

                                /**
                                 * Creates a plain object from an OnlineSize message. Also converts values to other types if specified.
                                 * @param message OnlineSize
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.OnlineSize, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this OnlineSize to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a LotteryInfo. */
                            interface ILotteryInfo {

                                /** LotteryInfo myBetCounts */
                                myBetCounts?: ({ [k: string]: number }|null);

                                /** LotteryInfo historyInfo */
                                historyInfo?: (com.aoo.chess.comms.protocol.proto.message.IHistoryInfo|null);

                                /** LotteryInfo betInfo */
                                betInfo?: (com.aoo.chess.comms.protocol.proto.message.IBetInfo|null);

                                /** LotteryInfo state */
                                state?: (number|null);

                                /** LotteryInfo time */
                                time?: (number|Long|null);
                            }

                            /** 彩票信息 */
                            class LotteryInfo implements ILotteryInfo {

                                /**
                                 * Constructs a new LotteryInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ILotteryInfo);

                                /** LotteryInfo myBetCounts. */
                                public myBetCounts: { [k: string]: number };

                                /** LotteryInfo historyInfo. */
                                public historyInfo?: (com.aoo.chess.comms.protocol.proto.message.IHistoryInfo|null);

                                /** LotteryInfo betInfo. */
                                public betInfo?: (com.aoo.chess.comms.protocol.proto.message.IBetInfo|null);

                                /** LotteryInfo state. */
                                public state: number;

                                /** LotteryInfo time. */
                                public time: (number|Long);

                                /**
                                 * Creates a new LotteryInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns LotteryInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ILotteryInfo): com.aoo.chess.comms.protocol.proto.message.LotteryInfo;

                                /**
                                 * Encodes the specified LotteryInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LotteryInfo.verify|verify} messages.
                                 * @param message LotteryInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ILotteryInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified LotteryInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LotteryInfo.verify|verify} messages.
                                 * @param message LotteryInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ILotteryInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a LotteryInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns LotteryInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.LotteryInfo;

                                /**
                                 * Decodes a LotteryInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns LotteryInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.LotteryInfo;

                                /**
                                 * Verifies a LotteryInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a LotteryInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns LotteryInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.LotteryInfo;

                                /**
                                 * Creates a plain object from a LotteryInfo message. Also converts values to other types if specified.
                                 * @param message LotteryInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.LotteryInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this LotteryInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a BetInfo. */
                            interface IBetInfo {

                                /** BetInfo betCounts */
                                betCounts?: ({ [k: string]: number }|null);

                                /** BetInfo betPlayers */
                                betPlayers?: (number|null);
                            }

                            /** Represents a BetInfo. */
                            class BetInfo implements IBetInfo {

                                /**
                                 * Constructs a new BetInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IBetInfo);

                                /** BetInfo betCounts. */
                                public betCounts: { [k: string]: number };

                                /** BetInfo betPlayers. */
                                public betPlayers: number;

                                /**
                                 * Creates a new BetInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns BetInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IBetInfo): com.aoo.chess.comms.protocol.proto.message.BetInfo;

                                /**
                                 * Encodes the specified BetInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.BetInfo.verify|verify} messages.
                                 * @param message BetInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IBetInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified BetInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.BetInfo.verify|verify} messages.
                                 * @param message BetInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IBetInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a BetInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns BetInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.BetInfo;

                                /**
                                 * Decodes a BetInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns BetInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.BetInfo;

                                /**
                                 * Verifies a BetInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a BetInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns BetInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.BetInfo;

                                /**
                                 * Creates a plain object from a BetInfo message. Also converts values to other types if specified.
                                 * @param message BetInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.BetInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this BetInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a lotteryAward. */
                            interface IlotteryAward {

                                /** lotteryAward info */
                                info?: (com.aoo.chess.comms.protocol.proto.message.IHistoryInfo|null);

                                /** lotteryAward time */
                                time?: (number|Long|null);

                                /** lotteryAward players */
                                players?: (number[]|null);
                            }

                            /** Represents a lotteryAward. */
                            class lotteryAward implements IlotteryAward {

                                /**
                                 * Constructs a new lotteryAward.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IlotteryAward);

                                /** lotteryAward info. */
                                public info?: (com.aoo.chess.comms.protocol.proto.message.IHistoryInfo|null);

                                /** lotteryAward time. */
                                public time: (number|Long);

                                /** lotteryAward players. */
                                public players: number[];

                                /**
                                 * Creates a new lotteryAward instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns lotteryAward instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IlotteryAward): com.aoo.chess.comms.protocol.proto.message.lotteryAward;

                                /**
                                 * Encodes the specified lotteryAward message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.lotteryAward.verify|verify} messages.
                                 * @param message lotteryAward message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IlotteryAward, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified lotteryAward message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.lotteryAward.verify|verify} messages.
                                 * @param message lotteryAward message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IlotteryAward, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a lotteryAward message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns lotteryAward
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.lotteryAward;

                                /**
                                 * Decodes a lotteryAward message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns lotteryAward
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.lotteryAward;

                                /**
                                 * Verifies a lotteryAward message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a lotteryAward message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns lotteryAward
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.lotteryAward;

                                /**
                                 * Creates a plain object from a lotteryAward message. Also converts values to other types if specified.
                                 * @param message lotteryAward
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.lotteryAward, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this lotteryAward to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of an OpenCardInfo. */
                            interface IOpenCardInfo {

                                /** OpenCardInfo card */
                                card?: (com.aoo.chess.comms.protocol.proto.message.ILotteryCard|null);
                            }

                            /** 开牌 */
                            class OpenCardInfo implements IOpenCardInfo {

                                /**
                                 * Constructs a new OpenCardInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IOpenCardInfo);

                                /** OpenCardInfo card. */
                                public card?: (com.aoo.chess.comms.protocol.proto.message.ILotteryCard|null);

                                /**
                                 * Creates a new OpenCardInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns OpenCardInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IOpenCardInfo): com.aoo.chess.comms.protocol.proto.message.OpenCardInfo;

                                /**
                                 * Encodes the specified OpenCardInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.OpenCardInfo.verify|verify} messages.
                                 * @param message OpenCardInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IOpenCardInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified OpenCardInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.OpenCardInfo.verify|verify} messages.
                                 * @param message OpenCardInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IOpenCardInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes an OpenCardInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns OpenCardInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.OpenCardInfo;

                                /**
                                 * Decodes an OpenCardInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns OpenCardInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.OpenCardInfo;

                                /**
                                 * Verifies an OpenCardInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an OpenCardInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns OpenCardInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.OpenCardInfo;

                                /**
                                 * Creates a plain object from an OpenCardInfo message. Also converts values to other types if specified.
                                 * @param message OpenCardInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.OpenCardInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this OpenCardInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a HistoryInfo. */
                            interface IHistoryInfo {

                                /** HistoryInfo history */
                                history?: (number[]|null);

                                /** HistoryInfo card */
                                card?: (com.aoo.chess.comms.protocol.proto.message.ILotteryCard|null);

                                /** HistoryInfo gold */
                                gold?: (number|Long|null);
                            }

                            /** 彩票历史记录 */
                            class HistoryInfo implements IHistoryInfo {

                                /**
                                 * Constructs a new HistoryInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IHistoryInfo);

                                /** HistoryInfo history. */
                                public history: number[];

                                /** HistoryInfo card. */
                                public card?: (com.aoo.chess.comms.protocol.proto.message.ILotteryCard|null);

                                /** HistoryInfo gold. */
                                public gold: (number|Long);

                                /**
                                 * Creates a new HistoryInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns HistoryInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IHistoryInfo): com.aoo.chess.comms.protocol.proto.message.HistoryInfo;

                                /**
                                 * Encodes the specified HistoryInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.HistoryInfo.verify|verify} messages.
                                 * @param message HistoryInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IHistoryInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified HistoryInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.HistoryInfo.verify|verify} messages.
                                 * @param message HistoryInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IHistoryInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a HistoryInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns HistoryInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.HistoryInfo;

                                /**
                                 * Decodes a HistoryInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns HistoryInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.HistoryInfo;

                                /**
                                 * Verifies a HistoryInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a HistoryInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns HistoryInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.HistoryInfo;

                                /**
                                 * Creates a plain object from a HistoryInfo message. Also converts values to other types if specified.
                                 * @param message HistoryInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.HistoryInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this HistoryInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a LotteryCard. */
                            interface ILotteryCard {

                                /** LotteryCard cardType */
                                cardType?: (number|null);

                                /** LotteryCard cards */
                                cards?: (com.aoo.chess.comms.protocol.proto.message.ICard[]|null);
                            }

                            /** 彩票牌型 */
                            class LotteryCard implements ILotteryCard {

                                /**
                                 * Constructs a new LotteryCard.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ILotteryCard);

                                /** LotteryCard cardType. */
                                public cardType: number;

                                /** LotteryCard cards. */
                                public cards: com.aoo.chess.comms.protocol.proto.message.ICard[];

                                /**
                                 * Creates a new LotteryCard instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns LotteryCard instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ILotteryCard): com.aoo.chess.comms.protocol.proto.message.LotteryCard;

                                /**
                                 * Encodes the specified LotteryCard message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LotteryCard.verify|verify} messages.
                                 * @param message LotteryCard message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ILotteryCard, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified LotteryCard message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LotteryCard.verify|verify} messages.
                                 * @param message LotteryCard message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ILotteryCard, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a LotteryCard message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns LotteryCard
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.LotteryCard;

                                /**
                                 * Decodes a LotteryCard message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns LotteryCard
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.LotteryCard;

                                /**
                                 * Verifies a LotteryCard message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a LotteryCard message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns LotteryCard
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.LotteryCard;

                                /**
                                 * Creates a plain object from a LotteryCard message. Also converts values to other types if specified.
                                 * @param message LotteryCard
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.LotteryCard, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this LotteryCard to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a LotteryBet. */
                            interface ILotteryBet {

                                /** LotteryBet cardType */
                                cardType?: (number|null);

                                /** LotteryBet count */
                                count?: (number|null);
                            }

                            /** Represents a LotteryBet. */
                            class LotteryBet implements ILotteryBet {

                                /**
                                 * Constructs a new LotteryBet.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ILotteryBet);

                                /** LotteryBet cardType. */
                                public cardType: number;

                                /** LotteryBet count. */
                                public count: number;

                                /**
                                 * Creates a new LotteryBet instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns LotteryBet instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ILotteryBet): com.aoo.chess.comms.protocol.proto.message.LotteryBet;

                                /**
                                 * Encodes the specified LotteryBet message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LotteryBet.verify|verify} messages.
                                 * @param message LotteryBet message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ILotteryBet, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified LotteryBet message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.LotteryBet.verify|verify} messages.
                                 * @param message LotteryBet message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ILotteryBet, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a LotteryBet message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns LotteryBet
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.LotteryBet;

                                /**
                                 * Decodes a LotteryBet message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns LotteryBet
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.LotteryBet;

                                /**
                                 * Verifies a LotteryBet message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a LotteryBet message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns LotteryBet
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.LotteryBet;

                                /**
                                 * Creates a plain object from a LotteryBet message. Also converts values to other types if specified.
                                 * @param message LotteryBet
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.LotteryBet, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this LotteryBet to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a PlayerBet. */
                            interface IPlayerBet {

                                /** PlayerBet playerId */
                                playerId?: (number|null);

                                /** PlayerBet bet */
                                bet?: (com.aoo.chess.comms.protocol.proto.message.ILotteryBet|null);
                            }

                            /** Represents a PlayerBet. */
                            class PlayerBet implements IPlayerBet {

                                /**
                                 * Constructs a new PlayerBet.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerBet);

                                /** PlayerBet playerId. */
                                public playerId: number;

                                /** PlayerBet bet. */
                                public bet?: (com.aoo.chess.comms.protocol.proto.message.ILotteryBet|null);

                                /**
                                 * Creates a new PlayerBet instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns PlayerBet instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerBet): com.aoo.chess.comms.protocol.proto.message.PlayerBet;

                                /**
                                 * Encodes the specified PlayerBet message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerBet.verify|verify} messages.
                                 * @param message PlayerBet message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IPlayerBet, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified PlayerBet message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerBet.verify|verify} messages.
                                 * @param message PlayerBet message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IPlayerBet, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a PlayerBet message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns PlayerBet
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.PlayerBet;

                                /**
                                 * Decodes a PlayerBet message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns PlayerBet
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.PlayerBet;

                                /**
                                 * Verifies a PlayerBet message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a PlayerBet message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns PlayerBet
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.PlayerBet;

                                /**
                                 * Creates a plain object from a PlayerBet message. Also converts values to other types if specified.
                                 * @param message PlayerBet
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.PlayerBet, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this PlayerBet to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a PlayerAward. */
                            interface IPlayerAward {

                                /** PlayerAward cardType */
                                cardType?: (number|null);

                                /** PlayerAward gold */
                                gold?: (number|Long|null);
                            }

                            /** 玩家奖励 */
                            class PlayerAward implements IPlayerAward {

                                /**
                                 * Constructs a new PlayerAward.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerAward);

                                /** PlayerAward cardType. */
                                public cardType: number;

                                /** PlayerAward gold. */
                                public gold: (number|Long);

                                /**
                                 * Creates a new PlayerAward instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns PlayerAward instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerAward): com.aoo.chess.comms.protocol.proto.message.PlayerAward;

                                /**
                                 * Encodes the specified PlayerAward message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerAward.verify|verify} messages.
                                 * @param message PlayerAward message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IPlayerAward, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified PlayerAward message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerAward.verify|verify} messages.
                                 * @param message PlayerAward message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IPlayerAward, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a PlayerAward message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns PlayerAward
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.PlayerAward;

                                /**
                                 * Decodes a PlayerAward message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns PlayerAward
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.PlayerAward;

                                /**
                                 * Verifies a PlayerAward message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a PlayerAward message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns PlayerAward
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.PlayerAward;

                                /**
                                 * Creates a plain object from a PlayerAward message. Also converts values to other types if specified.
                                 * @param message PlayerAward
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.PlayerAward, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this PlayerAward to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a BetStar. */
                            interface IBetStar {

                                /** BetStar time */
                                time?: (number|Long|null);
                            }

                            /** Represents a BetStar. */
                            class BetStar implements IBetStar {

                                /**
                                 * Constructs a new BetStar.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IBetStar);

                                /** BetStar time. */
                                public time: (number|Long);

                                /**
                                 * Creates a new BetStar instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns BetStar instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IBetStar): com.aoo.chess.comms.protocol.proto.message.BetStar;

                                /**
                                 * Encodes the specified BetStar message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.BetStar.verify|verify} messages.
                                 * @param message BetStar message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IBetStar, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified BetStar message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.BetStar.verify|verify} messages.
                                 * @param message BetStar message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IBetStar, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a BetStar message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns BetStar
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.BetStar;

                                /**
                                 * Decodes a BetStar message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns BetStar
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.BetStar;

                                /**
                                 * Verifies a BetStar message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a BetStar message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns BetStar
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.BetStar;

                                /**
                                 * Creates a plain object from a BetStar message. Also converts values to other types if specified.
                                 * @param message BetStar
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.BetStar, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this BetStar to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a GainServerLotteryInfo. */
                            interface IGainServerLotteryInfo {
                            }

                            /** Represents a GainServerLotteryInfo. */
                            class GainServerLotteryInfo implements IGainServerLotteryInfo {

                                /**
                                 * Constructs a new GainServerLotteryInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IGainServerLotteryInfo);

                                /**
                                 * Creates a new GainServerLotteryInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns GainServerLotteryInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IGainServerLotteryInfo): com.aoo.chess.comms.protocol.proto.message.GainServerLotteryInfo;

                                /**
                                 * Encodes the specified GainServerLotteryInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.GainServerLotteryInfo.verify|verify} messages.
                                 * @param message GainServerLotteryInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IGainServerLotteryInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified GainServerLotteryInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.GainServerLotteryInfo.verify|verify} messages.
                                 * @param message GainServerLotteryInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IGainServerLotteryInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a GainServerLotteryInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns GainServerLotteryInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.GainServerLotteryInfo;

                                /**
                                 * Decodes a GainServerLotteryInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns GainServerLotteryInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.GainServerLotteryInfo;

                                /**
                                 * Verifies a GainServerLotteryInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a GainServerLotteryInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns GainServerLotteryInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.GainServerLotteryInfo;

                                /**
                                 * Creates a plain object from a GainServerLotteryInfo message. Also converts values to other types if specified.
                                 * @param message GainServerLotteryInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.GainServerLotteryInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this GainServerLotteryInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ServerLotteryInfo. */
                            interface IServerLotteryInfo {

                                /** ServerLotteryInfo state */
                                state?: (number|null);

                                /** ServerLotteryInfo time */
                                time?: (number|Long|null);

                                /** ServerLotteryInfo betInfo */
                                betInfo?: (com.aoo.chess.comms.protocol.proto.message.IBetInfo|null);

                                /** ServerLotteryInfo historyInfo */
                                historyInfo?: (com.aoo.chess.comms.protocol.proto.message.IHistoryInfo|null);
                            }

                            /** Represents a ServerLotteryInfo. */
                            class ServerLotteryInfo implements IServerLotteryInfo {

                                /**
                                 * Constructs a new ServerLotteryInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IServerLotteryInfo);

                                /** ServerLotteryInfo state. */
                                public state: number;

                                /** ServerLotteryInfo time. */
                                public time: (number|Long);

                                /** ServerLotteryInfo betInfo. */
                                public betInfo?: (com.aoo.chess.comms.protocol.proto.message.IBetInfo|null);

                                /** ServerLotteryInfo historyInfo. */
                                public historyInfo?: (com.aoo.chess.comms.protocol.proto.message.IHistoryInfo|null);

                                /**
                                 * Creates a new ServerLotteryInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ServerLotteryInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IServerLotteryInfo): com.aoo.chess.comms.protocol.proto.message.ServerLotteryInfo;

                                /**
                                 * Encodes the specified ServerLotteryInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ServerLotteryInfo.verify|verify} messages.
                                 * @param message ServerLotteryInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IServerLotteryInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ServerLotteryInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ServerLotteryInfo.verify|verify} messages.
                                 * @param message ServerLotteryInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IServerLotteryInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ServerLotteryInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ServerLotteryInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ServerLotteryInfo;

                                /**
                                 * Decodes a ServerLotteryInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ServerLotteryInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ServerLotteryInfo;

                                /**
                                 * Verifies a ServerLotteryInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ServerLotteryInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ServerLotteryInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ServerLotteryInfo;

                                /**
                                 * Creates a plain object from a ServerLotteryInfo message. Also converts values to other types if specified.
                                 * @param message ServerLotteryInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ServerLotteryInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ServerLotteryInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a PlayerMail. */
                            interface IPlayerMail {

                                /** PlayerMail id */
                                id?: (number|null);

                                /** PlayerMail title */
                                title?: (string|null);

                                /** PlayerMail context */
                                context?: (string|null);

                                /** PlayerMail attach */
                                attach?: (string|null);

                                /** PlayerMail state */
                                state?: (number|null);

                                /** PlayerMail createTime */
                                createTime?: (number|Long|null);
                            }

                            /** Represents a PlayerMail. */
                            class PlayerMail implements IPlayerMail {

                                /**
                                 * Constructs a new PlayerMail.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerMail);

                                /** PlayerMail id. */
                                public id: number;

                                /** PlayerMail title. */
                                public title: string;

                                /** PlayerMail context. */
                                public context: string;

                                /** PlayerMail attach. */
                                public attach: string;

                                /** PlayerMail state. */
                                public state: number;

                                /** PlayerMail createTime. */
                                public createTime: (number|Long);

                                /**
                                 * Creates a new PlayerMail instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns PlayerMail instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerMail): com.aoo.chess.comms.protocol.proto.message.PlayerMail;

                                /**
                                 * Encodes the specified PlayerMail message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerMail.verify|verify} messages.
                                 * @param message PlayerMail message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IPlayerMail, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified PlayerMail message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerMail.verify|verify} messages.
                                 * @param message PlayerMail message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IPlayerMail, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a PlayerMail message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns PlayerMail
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.PlayerMail;

                                /**
                                 * Decodes a PlayerMail message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns PlayerMail
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.PlayerMail;

                                /**
                                 * Verifies a PlayerMail message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a PlayerMail message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns PlayerMail
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.PlayerMail;

                                /**
                                 * Creates a plain object from a PlayerMail message. Also converts values to other types if specified.
                                 * @param message PlayerMail
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.PlayerMail, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this PlayerMail to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a MailList. */
                            interface IMailList {

                                /** MailList mails */
                                mails?: (com.aoo.chess.comms.protocol.proto.message.IPlayerMail[]|null);
                            }

                            /** Represents a MailList. */
                            class MailList implements IMailList {

                                /**
                                 * Constructs a new MailList.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IMailList);

                                /** MailList mails. */
                                public mails: com.aoo.chess.comms.protocol.proto.message.IPlayerMail[];

                                /**
                                 * Creates a new MailList instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns MailList instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IMailList): com.aoo.chess.comms.protocol.proto.message.MailList;

                                /**
                                 * Encodes the specified MailList message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.MailList.verify|verify} messages.
                                 * @param message MailList message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IMailList, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified MailList message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.MailList.verify|verify} messages.
                                 * @param message MailList message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IMailList, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a MailList message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns MailList
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.MailList;

                                /**
                                 * Decodes a MailList message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns MailList
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.MailList;

                                /**
                                 * Verifies a MailList message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a MailList message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns MailList
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.MailList;

                                /**
                                 * Creates a plain object from a MailList message. Also converts values to other types if specified.
                                 * @param message MailList
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.MailList, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this MailList to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a SendMailMessage. */
                            interface ISendMailMessage {

                                /** SendMailMessage players */
                                players?: (number[]|null);

                                /** SendMailMessage title */
                                title?: (string|null);

                                /** SendMailMessage context */
                                context?: (string|null);

                                /** SendMailMessage attack */
                                attack?: (string|null);
                            }

                            /** Represents a SendMailMessage. */
                            class SendMailMessage implements ISendMailMessage {

                                /**
                                 * Constructs a new SendMailMessage.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.ISendMailMessage);

                                /** SendMailMessage players. */
                                public players: number[];

                                /** SendMailMessage title. */
                                public title: string;

                                /** SendMailMessage context. */
                                public context: string;

                                /** SendMailMessage attack. */
                                public attack: string;

                                /**
                                 * Creates a new SendMailMessage instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns SendMailMessage instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.ISendMailMessage): com.aoo.chess.comms.protocol.proto.message.SendMailMessage;

                                /**
                                 * Encodes the specified SendMailMessage message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.SendMailMessage.verify|verify} messages.
                                 * @param message SendMailMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.ISendMailMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified SendMailMessage message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.SendMailMessage.verify|verify} messages.
                                 * @param message SendMailMessage message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.ISendMailMessage, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a SendMailMessage message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns SendMailMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.SendMailMessage;

                                /**
                                 * Decodes a SendMailMessage message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns SendMailMessage
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.SendMailMessage;

                                /**
                                 * Verifies a SendMailMessage message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a SendMailMessage message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns SendMailMessage
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.SendMailMessage;

                                /**
                                 * Creates a plain object from a SendMailMessage message. Also converts values to other types if specified.
                                 * @param message SendMailMessage
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.SendMailMessage, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this SendMailMessage to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a DeleteMail. */
                            interface IDeleteMail {

                                /** DeleteMail mailIds */
                                mailIds?: (number[]|null);
                            }

                            /** Represents a DeleteMail. */
                            class DeleteMail implements IDeleteMail {

                                /**
                                 * Constructs a new DeleteMail.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IDeleteMail);

                                /** DeleteMail mailIds. */
                                public mailIds: number[];

                                /**
                                 * Creates a new DeleteMail instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns DeleteMail instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IDeleteMail): com.aoo.chess.comms.protocol.proto.message.DeleteMail;

                                /**
                                 * Encodes the specified DeleteMail message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.DeleteMail.verify|verify} messages.
                                 * @param message DeleteMail message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IDeleteMail, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified DeleteMail message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.DeleteMail.verify|verify} messages.
                                 * @param message DeleteMail message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IDeleteMail, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a DeleteMail message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns DeleteMail
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.DeleteMail;

                                /**
                                 * Decodes a DeleteMail message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns DeleteMail
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.DeleteMail;

                                /**
                                 * Verifies a DeleteMail message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a DeleteMail message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns DeleteMail
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.DeleteMail;

                                /**
                                 * Creates a plain object from a DeleteMail message. Also converts values to other types if specified.
                                 * @param message DeleteMail
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.DeleteMail, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this DeleteMail to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a PlayerMallInfo. */
                            interface IPlayerMallInfo {

                                /** PlayerMallInfo mallId */
                                mallId?: (number|null);

                                /** PlayerMallInfo buyCount */
                                buyCount?: (number|null);
                            }

                            /** Represents a PlayerMallInfo. */
                            class PlayerMallInfo implements IPlayerMallInfo {

                                /**
                                 * Constructs a new PlayerMallInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerMallInfo);

                                /** PlayerMallInfo mallId. */
                                public mallId: number;

                                /** PlayerMallInfo buyCount. */
                                public buyCount: number;

                                /**
                                 * Creates a new PlayerMallInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns PlayerMallInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerMallInfo): com.aoo.chess.comms.protocol.proto.message.PlayerMallInfo;

                                /**
                                 * Encodes the specified PlayerMallInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerMallInfo.verify|verify} messages.
                                 * @param message PlayerMallInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IPlayerMallInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified PlayerMallInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerMallInfo.verify|verify} messages.
                                 * @param message PlayerMallInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IPlayerMallInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a PlayerMallInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns PlayerMallInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.PlayerMallInfo;

                                /**
                                 * Decodes a PlayerMallInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns PlayerMallInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.PlayerMallInfo;

                                /**
                                 * Verifies a PlayerMallInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a PlayerMallInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns PlayerMallInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.PlayerMallInfo;

                                /**
                                 * Creates a plain object from a PlayerMallInfo message. Also converts values to other types if specified.
                                 * @param message PlayerMallInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.PlayerMallInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this PlayerMallInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a PlayerMallInfoList. */
                            interface IPlayerMallInfoList {

                                /** PlayerMallInfoList infos */
                                infos?: (com.aoo.chess.comms.protocol.proto.message.IPlayerMallInfo[]|null);
                            }

                            /** Represents a PlayerMallInfoList. */
                            class PlayerMallInfoList implements IPlayerMallInfoList {

                                /**
                                 * Constructs a new PlayerMallInfoList.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerMallInfoList);

                                /** PlayerMallInfoList infos. */
                                public infos: com.aoo.chess.comms.protocol.proto.message.IPlayerMallInfo[];

                                /**
                                 * Creates a new PlayerMallInfoList instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns PlayerMallInfoList instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IPlayerMallInfoList): com.aoo.chess.comms.protocol.proto.message.PlayerMallInfoList;

                                /**
                                 * Encodes the specified PlayerMallInfoList message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerMallInfoList.verify|verify} messages.
                                 * @param message PlayerMallInfoList message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IPlayerMallInfoList, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified PlayerMallInfoList message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.PlayerMallInfoList.verify|verify} messages.
                                 * @param message PlayerMallInfoList message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IPlayerMallInfoList, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a PlayerMallInfoList message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns PlayerMallInfoList
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.PlayerMallInfoList;

                                /**
                                 * Decodes a PlayerMallInfoList message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns PlayerMallInfoList
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.PlayerMallInfoList;

                                /**
                                 * Verifies a PlayerMallInfoList message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a PlayerMallInfoList message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns PlayerMallInfoList
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.PlayerMallInfoList;

                                /**
                                 * Creates a plain object from a PlayerMallInfoList message. Also converts values to other types if specified.
                                 * @param message PlayerMallInfoList
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.PlayerMallInfoList, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this PlayerMallInfoList to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a GainServerInfo. */
                            interface IGainServerInfo {
                            }

                            /** Represents a GainServerInfo. */
                            class GainServerInfo implements IGainServerInfo {

                                /**
                                 * Constructs a new GainServerInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IGainServerInfo);

                                /**
                                 * Creates a new GainServerInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns GainServerInfo instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IGainServerInfo): com.aoo.chess.comms.protocol.proto.message.GainServerInfo;

                                /**
                                 * Encodes the specified GainServerInfo message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.GainServerInfo.verify|verify} messages.
                                 * @param message GainServerInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IGainServerInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified GainServerInfo message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.GainServerInfo.verify|verify} messages.
                                 * @param message GainServerInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IGainServerInfo, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a GainServerInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns GainServerInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.GainServerInfo;

                                /**
                                 * Decodes a GainServerInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns GainServerInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.GainServerInfo;

                                /**
                                 * Verifies a GainServerInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a GainServerInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns GainServerInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.GainServerInfo;

                                /**
                                 * Creates a plain object from a GainServerInfo message. Also converts values to other types if specified.
                                 * @param message GainServerInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.GainServerInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this GainServerInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ServerInfoMsg. */
                            interface IServerInfoMsg {

                                /** 服务器编号 */
                                serverId?: (number|null);

                                /** 服务器组 */
                                serverGroup?: (number|null);

                                /** 服务器名称 */
                                serverName?: (string|null);

                                /** 服务器类型 */
                                serverType?: (number|null);

                                /** 外网IP */
                                ip?: (string|null);

                                /** 外网端口 */
                                port?: (number|null);

                                /** 内网地址 */
                                localIp?: (string|null);

                                /** 内网端口 */
                                localPort?: (number|null);
                            }

                            /** Represents a ServerInfoMsg. */
                            class ServerInfoMsg implements IServerInfoMsg {

                                /**
                                 * Constructs a new ServerInfoMsg.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IServerInfoMsg);

                                /** 服务器编号 */
                                public serverId: number;

                                /** 服务器组 */
                                public serverGroup: number;

                                /** 服务器名称 */
                                public serverName: string;

                                /** 服务器类型 */
                                public serverType: number;

                                /** 外网IP */
                                public ip: string;

                                /** 外网端口 */
                                public port: number;

                                /** 内网地址 */
                                public localIp: string;

                                /** 内网端口 */
                                public localPort: number;

                                /**
                                 * Creates a new ServerInfoMsg instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ServerInfoMsg instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IServerInfoMsg): com.aoo.chess.comms.protocol.proto.message.ServerInfoMsg;

                                /**
                                 * Encodes the specified ServerInfoMsg message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ServerInfoMsg.verify|verify} messages.
                                 * @param message ServerInfoMsg message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IServerInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ServerInfoMsg message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ServerInfoMsg.verify|verify} messages.
                                 * @param message ServerInfoMsg message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IServerInfoMsg, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ServerInfoMsg message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ServerInfoMsg
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ServerInfoMsg;

                                /**
                                 * Decodes a ServerInfoMsg message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ServerInfoMsg
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ServerInfoMsg;

                                /**
                                 * Verifies a ServerInfoMsg message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ServerInfoMsg message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ServerInfoMsg
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ServerInfoMsg;

                                /**
                                 * Creates a plain object from a ServerInfoMsg message. Also converts values to other types if specified.
                                 * @param message ServerInfoMsg
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ServerInfoMsg, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ServerInfoMsg to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }

                            /** Properties of a ServerInfoList. */
                            interface IServerInfoList {

                                /** ServerInfoList infos */
                                infos?: (com.aoo.chess.comms.protocol.proto.message.IServerInfoMsg[]|null);
                            }

                            /** Represents a ServerInfoList. */
                            class ServerInfoList implements IServerInfoList {

                                /**
                                 * Constructs a new ServerInfoList.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: com.aoo.chess.comms.protocol.proto.message.IServerInfoList);

                                /** ServerInfoList infos. */
                                public infos: com.aoo.chess.comms.protocol.proto.message.IServerInfoMsg[];

                                /**
                                 * Creates a new ServerInfoList instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns ServerInfoList instance
                                 */
                                public static create(properties?: com.aoo.chess.comms.protocol.proto.message.IServerInfoList): com.aoo.chess.comms.protocol.proto.message.ServerInfoList;

                                /**
                                 * Encodes the specified ServerInfoList message. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ServerInfoList.verify|verify} messages.
                                 * @param message ServerInfoList message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: com.aoo.chess.comms.protocol.proto.message.IServerInfoList, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Encodes the specified ServerInfoList message, length delimited. Does not implicitly {@link com.aoo.chess.comms.protocol.proto.message.ServerInfoList.verify|verify} messages.
                                 * @param message ServerInfoList message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: com.aoo.chess.comms.protocol.proto.message.IServerInfoList, writer?: protobuf.Writer): protobuf.Writer;

                                /**
                                 * Decodes a ServerInfoList message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns ServerInfoList
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.aoo.chess.comms.protocol.proto.message.ServerInfoList;

                                /**
                                 * Decodes a ServerInfoList message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns ServerInfoList
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.aoo.chess.comms.protocol.proto.message.ServerInfoList;

                                /**
                                 * Verifies a ServerInfoList message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a ServerInfoList message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns ServerInfoList
                                 */
                                public static fromObject(object: { [k: string]: any }): com.aoo.chess.comms.protocol.proto.message.ServerInfoList;

                                /**
                                 * Creates a plain object from a ServerInfoList message. Also converts values to other types if specified.
                                 * @param message ServerInfoList
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: com.aoo.chess.comms.protocol.proto.message.ServerInfoList, options?: protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this ServerInfoList to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }
                        }
                    }
                }
            }
        }
    }
}
