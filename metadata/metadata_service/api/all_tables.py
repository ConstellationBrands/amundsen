#Created by Hudson Pavia at Constellation Brands

from http import HTTPStatus
from typing import Iterable, List, Mapping, Optional, Union
import logging
from amundsen_common.models.table import (Table,TableSchema)
from flasgger import swag_from
from flask import request
from flask_restful import Resource

from metadata_service.proxy import get_proxy_client

LOGGER = logging.getLogger(__name__)

class AllTablesAPI(Resource):
    """
    ALLTables API
    """

    def __init__(self) -> None:
        self.client = get_proxy_client()

    def get(self) -> Iterable[Union[Mapping, int, None]]:
        all_tables: List[Table] = self.client.get_all_tables()  #call proxy function and store the list of tables
        all_tables_json: str = TableSchema().dump(all_tables, many=True) #convert the list of tables into JSON
        return {'all_tables': all_tables_json}, HTTPStatus.OK