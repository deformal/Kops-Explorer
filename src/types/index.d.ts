export interface AwsEC2Pricings {
  sku: string;
  onDemandPricing: {
    description: string;
    rateCode: string;
    hourlyPrice: string;
  };
  reservedPricing: Array<{
    leaseContractLength: string;
    offeringClass: string;
    purchaseOption: string;
    hourlyPrice: string;
    upfrontFee?: string;
    hourlyRateCode: string;
    upfrontRateCode?: string;
  }>;
  instanceType: AwsInstancePricing;
  licenseModel: string;
  operatingSystem: string;
  operation: string;
  preInstalledSw: string;
  tenancy: string;
  usagetype: string;
}

export interface AwsInstancePricing {
  instanceType: string;
  currentGeneration: boolean;
  instanceFamily: string;
  vcpu: number;
  physicalProcessor: string;
  clockSpeed: string;
  memory: string;
  storage: string;
  networkPerformance: string;
  processorArchitecture: string;
  classicnetworkingsupport: boolean;
  dedicatedEbsThroughput: string;
  enhancedNetworkingSupported: boolean;
  gpuMemory: string;
  normalizationSizeFactor: number;
  vpcnetworkingsupport: boolean;
  region: AwsRegions;
}

export enum AwsRegions {
  EU_WEST_3 = "eu-west-3",
  AP_NORTHEAST_1 = "ap-northeast-1",
  AP_NORTHEAST_3 = "ap-northeast-3",
  EU_CENTRAL_1_HAM_1 = "eu-central-1-ham-1",
  AP_SOUTH_1 = "ap-south-1",
  CA_CENTRAL_1 = "ca-central-1",
  AP_SOUTHEAST_2 = "ap-southeast-2",
  SA_EAST_1 = "sa-east-1",
  EU_CENTRAL_1 = "eu-central-1",
  EU_WEST_2 = "eu-west-2",
  US_EAST_2 = "us-east-2",
  US_EAST_1_WL1_IAH1 = "us-east-1-wl1-iah1",
  AP_NORTHEAST_2 = "ap-northeast-2",
  US_GOV_EAST_1 = "us-gov-east-1",
  AP_SOUTHEAST_3 = "ap-southeast-3",
  US_EAST_1 = "us-east-1",
  AP_EAST_1 = "ap-east-1",
  EU_CENTRAL_2 = "eu-central-2",
  AF_SOUTH_1 = "af-south-1",
  US_WEST_1 = "us-west-1",
  US_EAST_1_IAH_1 = "us-east-1-iah-1",
  EU_NORTH_1 = "eu-north-1",
  ME_CENTRAL_1 = "me-central-1",
  US_WEST_2 = "us-west-2",
  EU_WEST_1 = "eu-west-1",
  CA_WEST_1 = "ca-west-1",
  US_GOV_WEST_1 = "us-gov-west-1",
  AP_SOUTH_2 = "ap-south-2",
  AP_SOUTHEAST_4 = "ap-southeast-4",
  EU_SOUTH_2 = "eu-south-2",
  IL_CENTRAL_1 = "il-central-1",
  US_WEST_2_LAX_1 = "us-west-2-lax-1",
  AP_SOUTHEAST_1 = "ap-southeast-1",
  ME_SOUTH_1 = "me-south-1",
  US_EAST_1_SCL_1 = "us-east-1-scl-1",
  US_WEST_2_PHX_1 = "us-west-2-phx-1",
  US_EAST_1_MSP_1 = "us-east-1-msp-1",
  EU_SOUTH_1 = "eu-south-1",
  US_EAST_1_DFW_1 = "us-east-1-dfw-1",
  US_EAST_1_PHL_1 = "us-east-1-phl-1",
  US_EAST_1_CHI_1 = "us-east-1-chi-1",
  US_EAST_1_WL1_DTW1 = "us-east-1-wl1-dtw1",
  US_WEST_2_LAS_1 = "us-west-2-las-1",
  US_WEST_2_DEN_1 = "us-west-2-den-1",
  US_EAST_1_QRO_1 = "us-east-1-qro-1",
  AP_NORTHEAST_2_WL1_CJJ1 = "ap-northeast-2-wl1-cjj1",
  AP_SOUTHEAST_1_BKK_1 = "ap-southeast-1-bkk-1",
  AP_SOUTH_1_CCU_1 = "ap-south-1-ccu-1",
  EU_NORTH_1_HEL_1 = "eu-north-1-hel-1",
  AP_NORTHEAST_1_WL1_KIX1 = "ap-northeast-1-wl1-kix1",
  US_EAST_1_ATL_1 = "us-east-1-atl-1",
  AP_NORTHEAST_1_WL1_NRT1 = "ap-northeast-1-wl1-nrt1",
  US_EAST_1_BUE_1 = "us-east-1-bue-1",
  EU_WEST_2_WL1_MAN1 = "eu-west-2-wl1-man1",
  CA_CENTRAL_1_WL1_YTO1 = "ca-central-1-wl1-yto1",
  US_EAST_1_BOS_1 = "us-east-1-bos-1",
  AP_NORTHEAST_1_TPE_1 = "ap-northeast-1-tpe-1",
  AF_SOUTH_1_LOS_1 = "af-south-1-los-1",
  US_WEST_2_WL1_LAX1 = "us-west-2-wl1-lax1",
  AP_SOUTH_1_DEL_1 = "ap-south-1-del-1",
  US_EAST_1_WL1 = "us-east-1-wl1",
  EU_NORTH_1_CPH_1 = "eu-north-1-cph-1",
  AP_SOUTHEAST_2_AKL_1 = "ap-southeast-2-akl-1",
  US_WEST_2_WL1_DEN1 = "us-west-2-wl1-den1",
  US_WEST_2_SEA_1 = "us-west-2-sea-1",
  US_EAST_1_LIM_1 = "us-east-1-lim-1",
  US_EAST_1_NYC_1 = "us-east-1-nyc-1",
  AP_SOUTHEAST_2_PER_1 = "ap-southeast-2-per-1",
  EU_CENTRAL_1_WAW_1 = "eu-central-1-waw-1",
  US_EAST_1_WL1_BNA1 = "us-east-1-wl1-bna1",
  US_EAST_1_WL1_CHI1 = "us-east-1-wl1-chi1",
  ME_SOUTH_1_MCT_1 = "me-south-1-mct-1",
  EU_CENTRAL_1_WL1_DTM1 = "eu-central-1-wl1-dtm1",
  US_WEST_2_WL1_PHX1 = "us-west-2-wl1-phx1",
  US_EAST_1_MIA_1 = "us-east-1-mia-1",
  US_EAST_1_WL1_MIA1 = "us-east-1-wl1-mia1",
  EU_WEST_2_WL2_MAN1 = "eu-west-2-wl2-man1",
  US_EAST_1_WL1_MSP1 = "us-east-1-wl1-msp1",
  US_EAST_1_WL1_CLT1 = "us-east-1-wl1-clt1",
  US_WEST_2_WL1_SEA1 = "us-west-2-wl1-sea1",
  EU_CENTRAL_1_WL1_MUC1 = "eu-central-1-wl1-muc1",
  AP_SOUTHEAST_1_MNL_1 = "ap-southeast-1-mnl-1",
  US_EAST_1_MCI_1 = "us-east-1-mci-1",
  US_WEST_2_WL1 = "us-west-2-wl1",
  AP_NORTHEAST_2_WL1_SEL1 = "ap-northeast-2-wl1-sel1",
  US_WEST_2_WL1_LAS1 = "us-west-2-wl1-las1",
  US_EAST_1_WL1_TPA1 = "us-east-1-wl1-tpa1",
  US_WEST_2_PDX_1 = "us-west-2-pdx-1",
  EU_WEST_2_WL1_LON1 = "eu-west-2-wl1-lon1",
  US_EAST_1_WL1_NYC1 = "us-east-1-wl1-nyc1",
  US_EAST_1_WL1_WAS1 = "us-east-1-wl1-was1",
  EU_CENTRAL_1_WL1_BER1 = "eu-central-1-wl1-ber1",
  US_EAST_1_WL1_ATL1 = "us-east-1-wl1-atl1",
  US_EAST_1_WL1_DFW1 = "us-east-1-wl1-dfw1",
}
